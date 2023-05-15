import { View, Text, Dimensions, Image } from "react-native";
import React, { useEffect } from "react";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const Item = ({data}) => {
  return (
    <View>
     {data.map((item, index)=>{ 
          return(
               <>
                <View
                key={index}
          style={{
            borderWidth: 0.5,
            borderColor: "#B7B7B7",
            height: windowHeight * 0.2,
            width: "100%",
            marginBottom: 20,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <View
            style={{
              height: "80%",
              width: "40%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={item.quantity}
          >
             <Text>Quantity: {item.quantity}</Text>
            <Text>{new Intl.NumberFormat("de-DE").format(item.price)} VND</Text>
          </View>
          <View
            style={{
              height: "80%",
              width: "45%",
            }}
          >
           
            <Image
            key={item.image}
          source={{ uri: item.image }}
          style={{
            height: '100%',
            width: "100%",
            borderRadius: 2,
          }}
        ></Image>
          </View>
        </View>
               </>
          )
     })}
    </View>
  );
};



export default Item;
