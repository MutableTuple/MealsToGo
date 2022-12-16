import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

// const isAndroid = Platform.OS ==='android';
// console.log(StatusBar.currentHeight);
// console.log(ExpoStatusBar.currentHeight);

export default function App() {
  return (
    // <> are called fragments and they let us render two compoenent side by side
    // SafeAreaView is only for IOS

    <> 
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <Searchbar
          placeholder="Search"
         
        />
        </View>

        <View style={styles.list}>
          <Text style={{color:'white'}}>List</Text>
        </View>
    </ SafeAreaView>
    <ExpoStatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "#0C0404",
  },
});
