import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

const Card = ({imgSource,nameItem,priceItem,total,setTotal,clearAll,setClearAll}) => {

    const [totalElemento, setTotalElemento] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(clearAll){
            setCount(0);
            setTotalElemento(0);
            setTotal(0);
            setClearAll(false);
        }
    }, [clearAll]);

    const handlePrice = (action) => {
        if(action === "add"){
            setCount(count + 1);
            setTotalElemento(totalElemento + priceItem);
            setTotal(total + priceItem);
        }else{
            if(totalElemento - priceItem < 0){
                setCount(0);
                setTotalElemento(0);
            }else{
                setCount(count - 1);
                setTotalElemento(totalElemento - priceItem);
                setTotal(total - priceItem);
            }
        }
     }

    return (
        <View className="flex-row"> 
                {/* Info sobre el producto unitario */}
                <View className="justify-center p-3 w-32 min-w-min">
                    <View className="flex flex-row space-x-3 ">
                        <Text className="font-bold">{count}</Text>
                        <Text className="font-bold text-center">{nameItem}</Text>
                    </View>
                    <Text className="text-center ">{totalElemento}</Text>
                </View>
                {/* Imagen del producto unitario cards */}
                <TouchableOpacity className="w-28 p-2 ml-2 mt-2 items-center rounded-lg shadow-lg bg-red-100" onPress={()=>{handlePrice('sub')}}>
                    <Image source={imgSource} resizeMode="cover" className="w-14 h-14 "/>
                    <Text className="font-bold text-center">{nameItem}</Text>
                    <Text className="font-extralight w-3/4 text-center rounded bg-red-50">{priceItem}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-28 p-2 ml-2 mt-2 items-center rounded-lg shadow-lg bg-green-100" onPress={()=>{handlePrice('add')}}>
                    <Image source={imgSource} resizeMode="cover" className="w-14 h-14 "/>
                    <Text className="font-bold text-center">{nameItem}</Text>
                    <Text className="font-extralight w-3/4 text-center rounded bg-green-50">{priceItem}</Text>
                </TouchableOpacity>
        </View> 
    );
};

export default Card;
