import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TransactionComponent from './Components/TransactionComponent'
import TransactionsSummary from './Components/TransactionsSummary';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransactionContainer } from './Components/TransactionContainer'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TransactionContainer>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transactions" component={TransactionComponent} />
          <Tab.Screen name="Summary" component={TransactionsSummary} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionContainer>
  );
}