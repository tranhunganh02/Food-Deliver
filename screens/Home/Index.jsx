import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
const windowHeight = Dimensions.get("window").height;
import ItemOrder from "./ItemOrder";
import { getOrder } from "../../firebase";

//List order confirmation here
export default function Index({navigation}) {
  const [orderList, setOrderList] = useState([]);
  async function fetchData() {
    const data = await getOrder();
    setOrderList(data)
    console.log(data);
  }
  useEffect(() => {
    
    fetchData();
  }, []);
  const Logout = () => {
    navigation.navigate("SignIn")
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
        
      }}
    >
      <View
        style={{
          width: "100%",
          height: windowHeight * 0.08,
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          padding:20,
          backgroundColor:'#AEC2B6'
        }}
      >
        <TouchableOpacity onPress={()=>{navigation.navigate('Order')}}>
          <FontAwesome name="list-alt" size={34} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>List order</Text>
        {/* logOut */}
        <TouchableOpacity
          onPress={() => {
            Logout();
          }}
        >
          <SimpleLineIcons name="logout" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          height: windowHeight * 0.8,
          marginTop: 20,
          padding: 20,
        
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal={false}
          data={orderList}
          renderItem={({ item }) => {
            return (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: 20,
                    alignItems: "center",
                  }}
                  key={item.id}
                >
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    {new Date(Number(item.id)).toLocaleDateString() + " "}
                    {new Date(Number(item.id)).toTimeString().slice(0, 8)}
                  </Text>
                </View>
                <ItemOrder data={item.dataFood} total={item.total} navigation={navigation} id={item.id} loadData={fetchData}/>
              </>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
