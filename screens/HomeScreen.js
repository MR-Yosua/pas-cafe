import { View, Text,Image, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import data from '../helpers/RutasImagenes';
import { TrashIcon } from 'react-native-heroicons/outline'
const HomeScreen = () => {
  const navigation = useNavigation();
  const [total, setTotal] = useState(0);
  const [clearAll, setClearAll] = useState(false);

  // useEffect(() => {
  //   console.log(total);
  // } ,[total]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  const formatNumber = () => { 
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
   }

  return (
    <SafeAreaView className="bg-orange-400">
      <View className="flex-1">
        <View>
          <Image source={require('../assets/cafe-logo.jpg')} className="w-full h-36 mt-1"/>
        </View>
        {/* Cards */}
        <ScrollView className="bg-gray-50 h-[74%] flex-1">
          {data.map((e) => {
            return <Card 
              key={e.nombreItem}
              imgSource={e.img_url} 
              nameItem = {e.nombreItem} 
              priceItem= {Number(e.priceItem)} 
              total={total} 
              setTotal={setTotal} 
              clearAll ={clearAll} 
              setClearAll={setClearAll} />
          })}
        </ScrollView>
        {/* Total Box */}
        <View className="w-max p-4 fixed bottom-0 left-0">
          <Text className="text-center text-white text-lg font-bold">Total : {`$ ${formatNumber()}`}</Text>
          <View className="absolute right-10 top-4">
            <TrashIcon size={25} color="#ffff" onPress={(e)=>{setClearAll(true)}}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen