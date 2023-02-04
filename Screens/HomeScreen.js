import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Profile } from './Profile';
import { useNavigation } from '@react-navigation/native';




export const HomeScreen = () => {

const navigation= useNavigation()
  return (
    <SafeAreaView>
      <Text>Welcome To HomeScreen</Text>
      <Button
      title="Go to Profile"
      onPress={() =>
        navigation.navigate('Prof')
      }
    />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



