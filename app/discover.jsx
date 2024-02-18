import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#CFCCD6'}}>Discover</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020300',
    color: '#CFCCD6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
