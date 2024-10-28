// Импорт необходимых библиотек и модулей
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/native-stack';

// Импорт компонентов экранов
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';

// Создание навигатора для вкладок
const Tab = createBottomTabNavigator();

// Создание навигатора для стека экранов
const HomeStack = createStackNavigator();

// Определение стека экранов для домашнего экрана
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    {/* Экран планировщика задач */}
    <HomeStack.Screen
      name="Планировщик задач"
      component={HomeScreen}
      options={{
        headerStyle: {
          width: 20, // Ширина заголовка
          backgroundColor: '#000000', // Цвет фона заголовка
        },
        headerTitleAlign: 'center', // Выравнивание заголовка по центру
        headerTitleStyle: {
          color: '#fff', // Цвет текста заголовка
        },
      }}
    />
    {/* Главный экран */}
    <HomeStack.Screen name="MainScreen" component={MainScreen} />
  </HomeStack.Navigator>
);

// Основной компонент приложения
export default function App() {
  return (
    // Контейнер для навигации
    <NavigationContainer>
      {/* SafeAreaView обеспечивает корректное отображение на устройствах с вырезами (notches) */}
      <SafeAreaView style={styles.container}>
        {/* Навигатор вкладок */}
        <Tab.Navigator>
          {/* Вкладка для домашнего экрана */}
          <Tab.Screen name="Главное" component={HomeStackScreen} />
          {/* Вкладка для профиля */}
          <Tab.Screen name="Профиль" component={ProfileScreen} />
          {/* Вкладка для настроек */}
          <Tab.Screen name="Настройки" component={SettingsScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

// Стили для компонента
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1', // Фон приложения
  },
});
