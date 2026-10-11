import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import Animated, { ZoomIn } from 'react-native-reanimated';

export default function EstudioScreen() {
  const { colors } = useTheme();

  const modes = [
    { title: 'Completación', icon: 'create', color: '#FF3B30' },
    { title: 'Selección Simple', icon: 'list', color: '#5E5CE6' },
    { title: 'Reconocimiento', icon: 'images', color: '#32ADE6' },
    { title: 'Desarrollo', icon: 'document-text', color: '#34C759' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Estudio</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>¿Qué quieres practicar hoy?</Text>
      </View>

      <View style={styles.grid}>
        {modes.map((mode, index) => (
          <Animated.View key={index} entering={ZoomIn.delay(index * 100)} style={styles.gridItem}>
            <TouchableOpacity style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <View style={[styles.iconContainer, { backgroundColor: mode.color + '20' }]}>
                <Ionicons name={mode.icon} size={32} color={mode.color} />
              </View>
              <Text style={[styles.modeTitle, { color: colors.text }]}>{mode.title}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  gridItem: {
    width: '50%',
    padding: 10,
  },
  card: {
    aspectRatio: 1,
    borderRadius: 24,
    borderWidth: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modeTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
