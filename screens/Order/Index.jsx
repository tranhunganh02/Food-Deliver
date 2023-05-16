import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth, getOrderWithId } from "../../firebase";
import { FlashList } from "@shopify/flash-list";
import Item from "./Item";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import { UpdateStatus } from "../../firebase";
export default function Index({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getOrderWithId(auth.currentUser.uid).then((data) => {
      setData(data);
    });
  }, []);
  return (
    <SafeAreaView style={{ padding: 15, flex: 1 }}>
      <View style={{ width: "100%", height: windowHeight * 0.85 }}>
        <ScrollView>
          {data.map((item, index) => {
            return (
              <>
                <View
                  key={index}
                  style={{
                    width: "100%",
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: 15,
                    borderBottomWidth: 1,
                  }}
                >
                  <View
                    key={item.id}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>
                      ID Order
                    </Text>
                    <Text>#{item.id}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      paddingVertical: 20,
                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>
                      Status
                    </Text>
                    <TouchableOpacity
                      style={{
                        height: 31,
                        width: 125,
                        backgroundColor: "#9ED27B",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                      }}
                      onPress={() => {
                        Alert.alert("Order success");
                        UpdateStatus(item.id, 3);
                        navigation.navigate("Home");
                      }}
                    >
                      <Text>Delivery</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      paddingVertical: 8,
                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>
                      Address
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <Text>{item.address}</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>
                      Total
                    </Text>
                    <Text>
                      {new Intl.NumberFormat("de-DE").format(item.total)} VND
                    </Text>
                  </View>
                  <View>
                    <Item data={item.dataFood} />
                  </View>
                </View>
              </>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: windowWidth,
          bottom: 5,
        }}
      >
        <TouchableOpacity
          style={{
            height: 65,
            width: "60%",
            backgroundColor: "#DBE4C6",
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
