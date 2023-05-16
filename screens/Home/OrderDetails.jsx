import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import { UpdateStatus } from "../../firebase";
import { AppContext } from "../../OrderContext";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default OrderDetails = ({ route, navigation }) => {
  const data = route.params.data
  const {order,updateOrder}= useContext(AppContext);

  return (
    <View style={{ flex: 1, padding: 25 }}>
          <View style={{ width: "100%", height: 700, marginTop: 50 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={false}
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: "#B7B7B7",
                      height: windowHeight * 0.25,
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      marginBottom: 20,
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
                        #{index+1}
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
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 20,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                UpdateStatus(route.params.idOrder, 2);
                updateOrder()
                navigation.goBack();
              }}
            >
              <Text style={styles.textStyle}>Choose</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                ,
                styles.button,
                styles.buttonClose,
                { backgroundColor: "grey" },
              ]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.textStyle}>Home</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  foodButton: {
    padding: 4,
    borderWidth: 0.4,
    borderColor: "#E2E2E2",
    marginHorizontal: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "45%",
    height: windowHeight * 0.08,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {
    backgroundColor: "#BFCBAE",
    marginBottom: 50,
  },
});
