import { StyleSheet, Text, StatusBar, SafeAreaView, Platform } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationsList';
import QuotationItems from './src/components/QuotationsList/QuotationItems';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#f50d41"
        barStyle="dark-content"   
      
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40: 0
  },
});
