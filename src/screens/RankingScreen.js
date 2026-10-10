import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const RANKING_DATA = [
  { id: '1', name: 'Tú', points: 2450, isUser: true },
  { id: '2', name: 'Ana García', points: 2340, isUser: false },
  { id: '3', name: 'Carlos López', points: 2100, isUser: false },
  { id: '4', name: 'María Pérez', points: 1950, isUser: false },
  { id: '5', name: 'Juan Silva', points: 1820, isUser: false },
];

export default function RankingScreen() {
  const { colors } = useTheme();

  const renderItem = ({ item, index }) => (
    <Animated.View
      entering={FadeInDown.delay(index * 100)}
      style={[
        styles.rankCard,
        {
          backgroundColor: item.isUser ? colors.primary + '15' : colors.surface,
          borderColor: item.isUser ? colors.primary : colors.border
        }
      ]}
    >
      <Text style={[styles.rankNumber, { color: item.isUser ? colors.primary : colors.textSecondary }]}>
        {index + 1}
      </Text>
      <View style={[styles.avatar, { backgroundColor: colors.border }]}>
        <Ionicons name="person" size={20} color={colors.textSecondary} />
      </View>
      <Text style={[styles.name, { color: colors.text, fontWeight: item.isUser ? 'bold' : '500' }]}>
        {item.name}
      </Text>
      <Text style={[styles.points, { color: colors.primary }]}>{item.points} pts</Text>
    </Animated.View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Rankings</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Global</Text>
      </View>

      <FlatList
        data={RANKING_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
  },
  list: {
    padding: 20,
  },
  rankCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 10,
  },
  rankNumber: {
    width: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
