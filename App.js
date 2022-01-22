import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  city: {
    flex: 1.2,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityName:{
    fontSize: 68,
  },
  weather: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  day:{
    flex:1,
    alignItems: 'center',
    backgroundColor: 'teal'
  },
  temp:{
    marginTop: 50,
    fontSize: 168,
  },
  description:{
    marginTop: -30,
    fontSize: 60,
  }
});
