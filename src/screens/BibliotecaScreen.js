import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';

const MOCK_DATA = [
  { id: '1', title: 'Matemáticas Avanzadas', type: 'PDF', date: 'Oct 10' },
  { id: '2', title: 'Historia Universal', type: 'Imagen', date: 'Oct 09' },
  { id: '3', title: 'Física Cuántica', type: 'Texto', date: 'Oct 08' },
];

export default function BibliotecaScreen() {
  const { colors } = useTheme();

  const renderItem = ({ item, index }) => (
    <Animated.View entering={FadeInRight.delay(index * 100)} style={[styles.itemCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.itemIcon}>
        <Ionicons
          name={item.type === 'PDF' ? 'document-text' : item.type === 'Imagen' ? 'image' : 'text'}
          size={24}
          color={colors.primary}
        />
      </View>
      <View style={styles.itemInfo}>
        <Text style={[styles.itemTitle, { color: colors.text }]}>{item.title}</Text>
        <Text style={[styles.itemSubtitle, { color: colors.textSecondary }]}>{item.type} • {item.date}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
    </Animated.View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Biblioteca</Text>
        <TouchableOpacity style={[styles.addButton, { backgroundColor: colors.primary }]}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_DATA}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  list: {
    padding: 20,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 15,
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(94, 92, 230, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 13,
  },
});
