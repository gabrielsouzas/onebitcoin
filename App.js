import { StyleSheet, Text, StatusBar, SafeAreaView, Platform } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationsList';
import { useEffect, useState } from 'react';

function addZero(number) {
  if (number <= 9) {
    return "0" + number;
  }
  return number;
}

function url(qtdDays) {
  const date = new Date("2022-07-01");
  const listLastDays = qtdDays;
  
  const endDate = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  
  date.setDate(date.getDate() - listLastDays);
  const startDate = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  
  
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
}

async function getListCoins(url) {
  try {
    let response = await fetch(url);
    let returnApi = await response.json();
    if ("bpi" in returnApi) {
      let selectListQuotations = returnApi.bpi;
      const queryCoinsList = Object.keys(selectListQuotations).map((key)=>{
        return {
          data: key.split("-").reverse().join("/"),
          valor: selectListQuotations[key]
        }
      })
      let data = queryCoinsList.reverse();
      return data;
    } else {
      console.log("Dados para a data não encontrados");
      return [0]
    }
  } catch (error) {
    console.log(error);
  }
}

async function getPriceCoinsGraphic(url) {
  try {
    let response = await fetch(url);
    let returnApi = await response.json();
    if ("bpi" in returnApi) {
      let selectListQuotations = returnApi.bpi;
      const queryCoinsList = Object.keys(selectListQuotations).map((key)=> selectListQuotations[key]);
      let dataGraphic = queryCoinsList;
      return dataGraphic;
    } else {
      console.log("Dados para a data não encontrados");
      return [0]
    }
  } catch (error) {
    console.log(error);
  }
}



export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);
  const [price, setPrice] = useState();

  function priceCotation() {
    // .pop() - Pega o último item da lista
    setPrice(coinsGraphicList.pop());
  }

  function updateDay(number) {
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then((data)=>{
      setCoinsList(data);
    });

    priceCotation();

    getPriceCoinsGraphic(url(days)).then((dataGraphic)=>{
      setCoinsGraphicList(dataGraphic);
    })

    if (updateData) {
      setUpdateData(false);
    }

  }, [updateData])
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#f50d41"
        barStyle="dark-content"   
      
      />
      <CurrentPrice 
        lastCotation={price}
      />
      <HistoryGraphic 
        infoDataGraphic={coinsGraphicList}
      />
      <QuotationList 
        filterDay={updateDay}
        listTransactions={coinsList}
      />
      
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
