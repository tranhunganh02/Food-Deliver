import {
     View,
     Text,
     FlatList,
     Dimensions,
     Image,
     ScrollView,
     TouchableOpacity,
     Alert,
   } from "react-native";
   import React, { useEffect, useState } from "react";
   const windowHeight = Dimensions.get("window").height;
   const windowWidth = Dimensions.get("window").width;
   import a from "../Home/List";
   export default function Index({navigation}) {
     const [product, setProduct] = useState([a.item[0].product]);
     const b = [{ a: "c" }, { a: "v" }];
     useEffect(() => {}, []);
     return (
       <View style={{padding:15,}}>
         <ScrollView
          showsVerticalScrollIndicator={false}
         >
           {/* Order1 */}
           <View
             style={{
               width: "100%",
               flex: 1,
               justifyContent: "flex-start",
               alignItems: "center",
               padding: 20,
             }}
           >
             <View
               style={{
                 flexDirection: "row",
                 justifyContent: "space-between",
                 width: "100%",
                 paddingVertical:20
               }}
             >
               <Text style={{ fontSize: 20, fontWeight: "600" }}>Status</Text>
              <TouchableOpacity style={{
                    height:25,
                    width:65,
                    backgroundColor:'#9ED27B',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:20
              }}
              onPress={()=>{Alert.alert("Order success")}}
              >
              <Text>Delivery</Text>
              </TouchableOpacity>
             </View>
             <View
               style={{
                 flexDirection: "row",
                 justifyContent: "space-between",
                 width: "100%",
               }}
             >
               <Text style={{ fontSize: 20, fontWeight: "600" }}>#2196F3</Text>
               <Text>3 product</Text>
             </View>
             <View
               style={{
                 flexDirection: "row",
                 justifyContent: "space-between",
                 width: "100%",
                 marginTop: 10,
               }}
             >
               <Text style={{ fontSize: 20, fontWeight: "500" }}>Total</Text>
               <Text>{new Intl.NumberFormat("de-DE").format(150000)} VND</Text>
             </View>
             <View
               style={{ width: "100%", height: windowHeight * 0.7, marginTop: 30 }}
             >
               {a.item[1].product.map((item, index) => {
                 return (
                   <View
                     style={{
                       borderWidth: 0.5,
                       borderColor: "#B7B7B7",
                       height: windowHeight * 0.2,
                       width: "100%",
                       marginBottom: 20,
                       borderRadius: 10,
                       flexDirection: "row",
                       alignItems: "center",
                       justifyContent: "space-around",
                     }}
                   >
                     <View
                       style={{
                         height: "80%",
                         width: "40%",
                         justifyContent: "space-between",
                         alignItems: "center",
                       }}
                     >
                       <Text style={{ fontSize: 17, fontWeight: "400" }}>
                         {" "}
                         {item.name}
                       </Text>
                       <Text>
                         {new Intl.NumberFormat("de-DE").format(item.price)} VND
                       </Text>
                     </View>
                     <View
                       style={{
                         height: "80%",
                         width: "45%",
                         justifyContent: "space-between",
                         alignItems: "center",
                       }}
                     >
                       <Text>Quantity: {item.quantity}</Text>
                       <Image
                         source={{ uri: item.image }}
                         style={{
                           height: windowHeight * 0.1,
                           width: "90%",
                           borderRadius: 2,
                         }}
                       ></Image>
                     </View>
                   </View>
                 );
               })}
             </View>
           </View>
           {/* Order 2 */}
           {/* <View
             style={{
               width: "100%",
               flex: 1,
               justifyContent: "flex-start",
               alignItems: "center",
               padding: 20,
             }}
           >
             <View
               style={{
                 flexDirection: "row",
                 justifyContent: "space-between",
                 width: "100%",
               }}
             >
               <Text style={{ fontSize: 20, fontWeight: "600" }}>Status</Text>
               <Text>Delivering</Text>
             </View>
             <View
               style={{
                 flexDirection: "row",
                 justifyContent: "space-between",
                 width: "100%",
                 marginTop: 10,
               }}
             >
               <Text style={{ fontSize: 20, fontWeight: "600" }}>#2196F3</Text>
               <Text>{a.item[2].product.length} product</Text>
             </View>
             <View
               style={{
                 flexDirection: "row",
                 justifyContent: "space-between",
                 width: "100%",
                 marginTop: 10,
               }}
             >
               <Text style={{ fontSize: 20, fontWeight: "500" }}>Total</Text>
               <Text>{new Intl.NumberFormat("de-DE").format(150000)} VND</Text>
             </View>
             <View
               style={{ width: "100%", height: windowHeight * 0.7, marginTop: 30 }}
             >
               {a.item[2].product.map((item, index) => {
                 return (
                   <View
                     style={{
                       borderWidth: 0.5,
                       borderColor: "#B7B7B7",
                       height: windowHeight * 0.2,
                       width: "100%",
                       marginBottom: 20,
                       borderRadius: 10,
                       flexDirection: "row",
                       alignItems: "center",
                       justifyContent: "space-around",
                     }}
                   >
                     <View
                       style={{
                         height: "80%",
                         width: "40%",
                         justifyContent: "space-between",
                         alignItems: "center",
                       }}
                     >
                       <Text style={{ fontSize: 17, fontWeight: "400" }}>
                         {" "}
                         {item.name}
                       </Text>
                       <Text>
                         {new Intl.NumberFormat("de-DE").format(item.price)} VND
                       </Text>
                     </View>
                     <View
                       style={{
                         height: "80%",
                         width: "45%",
                         justifyContent: "space-between",
                         alignItems: "center",
                       }}
                     >
                       <Text>Quantity: {item.quantity}</Text>
                       <Image
                         source={{ uri: item.image }}
                         style={{
                           height: windowHeight * 0.1,
                           width: "90%",
                           borderRadius: 2,
                         }}
                       ></Image>
                     </View>
                   </View>
                 );
               })}
             </View>
           </View> */}
         </ScrollView>
        <View style={{
          justifyContent:'center',
          alignItems:'center',
          position:'absolute',
          width:windowWidth,
          bottom:0,
          marginBottom:10
        }}>
        <TouchableOpacity
          style={{
               height:90,
               width:"60%",
               backgroundColor:'#DBE4C6',
               borderRadius:35,
               justifyContent:'center',
               alignItems:'center'
          }}
          onPress={()=>{navigation.goBack()}}
         >
               <Text>Back to Home</Text>
         </TouchableOpacity>
        </View>
       </View>
     );
   }
   
   