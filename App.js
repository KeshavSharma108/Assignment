import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './Navigation/RootNavigation';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
<RootNavigation/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
