import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

import DashboardScreen from '../screens/DashboardScreen';
import BibliotecaScreen from '../screens/BibliotecaScreen';
import CalendarioScreen from '../screens/CalendarioScreen';
import EstudioScreen from '../screens/EstudioScreen';
import RankingScreen from '../screens/RankingScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Biblioteca') iconName = focused ? 'library' : 'library-outline';
          else if (route.name === 'Calendario') iconName = focused ? 'calendar' : 'calendar-outline';
          else if (route.name === 'Estudio') iconName = focused ? 'book' : 'book-outline';
          else if (route.name === 'Ranking') iconName = focused ? 'trophy' : 'trophy-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 90,
          paddingBottom: 30,
          paddingTop: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Biblioteca" component={BibliotecaScreen} />
      <Tab.Screen name="Estudio" component={EstudioScreen} />
      <Tab.Screen name="Calendario" component={CalendarioScreen} />
      <Tab.Screen name="Ranking" component={RankingScreen} />
    </Tab.Navigator>
  );
}
