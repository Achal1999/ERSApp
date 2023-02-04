import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


 export  const Profile = (navigation) => {

  return (
    <SafeAreaView>
      <Text> This is profile page</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}




