import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { FAB } from "@rneui/themed";
const windowHeight = Dimensions.get("window").height;
export default function ItemOrder({ data, total, navigation, id, loadData }) {
  return (
    <TouchableOpacity
      style={styles.centeredView}
      onPress={() => {
        navigation.navigate("OrderDetails", {
          data: data,
          idOrder: id
        })
      }}
    >
      <View style={styles.orderContainer}>
        <View style={styles.orderTop}>
          <Text style={{ fontSize: 17, fontWeight: "400" }}>
            ID:  #{id}
          </Text>
          <TouchableOpacity>
            <AntDesign name="right" size={23} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.orderBottom}>
          <View>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "grey" }}>
              Product
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              {Object(data).length} Products
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "grey" }}>
              Order Total{" "}
            </Text>
            <Text>{new Intl.NumberFormat("de-DE").format(total)} VND</Text>
          </View>
        </View>
      </View>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  orderContainer: {
    width: "90%",
    height: windowHeight * 0.15,
    borderWidth: 0.5,
    borderRadius: 9,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  orderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50%",
    width: "100%",
  },
  orderBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "49%",
    width: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  modalView: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    marginTop: 35,
    height: 500,
    paddingHorizontal: 30,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "45%",
    height: windowHeight * 0.08,
    justifyContent: "center",
  },
  buttonClose: {
    backgroundColor: "#BFCBAE",
    marginBottom: 50,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
