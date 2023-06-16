import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Dashboard from './Screens/Dashboard';
import {Card, Title, Paragraph} from 'react-native-paper';

export default function App() {
  //dashboard
  const[dashboard,showDashboard]=useState(true)
  //dashboard
    return (
    <SafeAreaView>
      <StatusBar backgroundColor='paleturquoise' />
      <Text style={{ marginTop: 5 }}>..</Text>
      {dashboard && <Dashboard />}
    </SafeAreaView>
  );
}

