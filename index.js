import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/Auth/SignIn'
import SignUp from './screens/Auth/SignUp'
import LogoAnimation from './screens/LogoAnimation/Index';
import Home from './screens/Home/Index'
import Order from './screens/Order/Index'
import OrderDetails from './screens/Home/OrderDetails'
const Stack = createNativeStackNavigator();
const Index = () => {

     return (
       <NavigationContainer>
           <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
           <Stack.Screen name="LogoAnimation" component={LogoAnimation}  />
               <Stack.Screen name="SignIn" component={SignIn}  />
               <Stack.Screen name="SignUp" component={SignUp}  />
               <Stack.Screen name="Home" component={Home}  />
               <Stack.Screen name="Order" component={Order}  />
               <Stack.Screen name="OrderDetails" component={OrderDetails}  />
           </Stack.Navigator>
       </NavigationContainer>
     )
   }

export default Index
   