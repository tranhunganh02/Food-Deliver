// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  getDocs,
  getDoc,
  collection,
  doc,
  updateDoc,
  where,
  query,
  and
} from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAQ3bi-4waxZGaSldJvks00rVq7mKK7rQ0",
//   authDomain: "food-delivery-daf8c.firebaseapp.com",
//   databaseURL: "https://food-delivery-daf8c-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "food-delivery-daf8c",
//   storageBucket: "food-delivery-daf8c.appspot.com",
//   messagingSenderId: "596005918238",
//   appId: "1:596005918238:web:9b7d157e42ca21fc50c00f",
//   measurementId: "G-R1G6XK8G2X"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDQtiBswAc9Qn5w_5ePEW_8QJejfDQckqA",
  authDomain: "test1-8afe3.firebaseapp.com",
  projectId: "test1-8afe3",
  storageBucket: "test1-8afe3.appspot.com",
  messagingSenderId: "282946755124",
  appId: "1:282946755124:web:c0216d3934eb0c14924861",
  measurementId: "G-PXTTR98PD2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Firebase
const dbStore = getFirestore(app);
const getOrder = async () => {
  const q = query(collection(dbStore, "orders"),where("status", "==", 1));

  const querySnapshot = await getDocs(q);

  const a = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    a.push({
     id: doc.id,
     idUser: doc.data().idUser,
     status: doc.data().status,
     total: doc.data().total,
     address: doc.data().address,
     dataFood: doc.data().data,
   });
  });
  return a;
};
const getOrderWithId = async (id) => {

  const q = query(collection(dbStore, "orders"), where("idDeliver", "==", auth.currentUser.uid), where("status", "==", 2));

  const querySnapshot = await getDocs(q);

  const a = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    a.push({
     id: doc.id,
     idUser: doc.data().idUser,
     status: doc.data().status,
     total: doc.data().total,
     address: doc.data().address,
     dataFood: doc.data().data,
   });
  });
  return a;
};
const getImageProduct = async (idProduct) => {
  const docRef = doc(dbStore, "products", `${idProduct}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return String(docSnap.data().image);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
const UpdateStatus = async (idOrder, status) => {
  const DocRef = doc(dbStore, "orders", `${idOrder}`);
  await updateDoc(DocRef, {
    status: status,
    idDeliver: auth.currentUser.uid,
  });
};
async function getUser(idUser) {
  try {
    const docRef = doc(dbStore, "users", idUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      return userData;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting user document:", error);
    return null;
  }
};
export {
  auth,
  dbStore,
  getOrder,
  getImageProduct,
  UpdateStatus,
  getOrderWithId,
  getUser
};
