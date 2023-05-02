import { View, Text, Modal, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView } from "react-native";
import React, {useEffect, useState} from "react";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Item from "./Item";
import { FAB } from "@rneui/themed";
const windowHeight =Dimensions.get('window').height
export default function ModalOrder({data, total},) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisibleConfim, setIsModalVisibleConfim] = useState(false);

  const [loadingVisible, setLoadingVisible] = useState(false);

  const showSuccess = () => {
    setModalVisible(false)
    setIsModalVisibleConfim(true);
    setLoadingVisible(true);
    setTimeout(() => {
      setLoadingVisible(false);
      setTimeout(() => {
        setIsModalVisibleConfim(false);
      }, 1500);
    }, 1500);
  };
  useEffect(()=>{
  },[])
  return (
    <TouchableOpacity style={styles.centeredView}
    onPress={()=>{
      setModalVisible(!modalVisible)
    }}
    >
      <View style={styles.orderContainer}>
        <View style={styles.orderTop}>
            <Text style={{fontSize:17, fontWeight:'400'}}>Home-Barker Street</Text>
            <TouchableOpacity>
            <AntDesign name="right" size={23} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.orderBottom}>
            <View>
            <Text style={{fontSize:14, fontWeight:'400', color:'grey'}}>Product</Text>
              <Text style={{fontSize:16, fontWeight:'500',}}>{data.length} Products</Text>
            </View>
            <View style={{justifyContent:'center'}}>
              <Text style={{fontSize:14, fontWeight:'400', color:'grey'}}>Order Total </Text>
              <Text>{new Intl.NumberFormat("de-DE").format(total)} VND</Text>
            </View>
        </View>
      </View>
      {/* Modal sucess */}
      <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisibleConfim}
          >
            <View style={styles.centeredView}>

              {loadingVisible ? (<FAB loading visible={loadingVisible} size="large" color="green" />) : (
                <>
                  <View style={styles.modalView}>
                    <Text>Add your list order success</Text>
                    <MaterialIcons
                      name="library-add-check"
                      size={35}
                      color="green"
                    />
                  </View>
                </>
              )}
            </View>
          </Modal>
      {/* Modal order */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          
           <ScrollView
            horizontal={false}
            showsHorizontalScrollIndicator={false}
           >
            <View style={styles.modalView}>
           {data.map((order) => {
              return (
                <Item
                key={order.key}
                  name={order.name}
                  image={order.image}
                  quantity={order.quantity}
                  price={order.price}
                />
              );
            })}
                      </View>
           </ScrollView>
           <View style={{flexDirection:'row', padding:20, justifyContent:'space-between', width:'100%'}}>
           <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={()=> {showSuccess()}}
            >
              <Text style={styles.textStyle}>Choose</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[,styles.button, styles.buttonClose,{backgroundColor:'grey'}]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
           </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  orderContainer:{
    width:'90%',
    height:windowHeight*0.15,
    borderWidth:0.5,
    borderColor:'#B0B0B0',
    borderRadius:9,
    padding:15,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ABC4AA"
  },
  orderTop:{
    flexDirection:'row',
    justifyContent:'space-between',
    height:'50%',
    width:'100%'
  },
  orderBottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    height:'49%',
    width:'100%'
  }
  ,centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:15,

  },
  modalView: {
    margin: 10,
    backgroundColor:"#9BA4B5",
    borderRadius: 5,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop:35,
    height:'auto'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:'45%',
    height:windowHeight*0.08,
    justifyContent:'center'
  },
  buttonClose: {
    backgroundColor: "#BFCBAE",
    marginBottom:50
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
