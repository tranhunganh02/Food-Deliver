import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/Auth/SignIn'
import SignUp from './screens/Auth/SignUp'
import LogoAnimation from './screens/LogoAnimation/Index';
import Home from './screens/Home/Index'
const Stack = createNativeStackNavigator();
const Index = () => {

     return (
       <NavigationContainer>
           <Stack.Navigator initialRouteName="Logo" screenOptions={{headerShown: false}}>
           <Stack.Screen name="LogoAnimation" component={LogoAnimation}  />
               <Stack.Screen name="SignIn" component={SignIn}  />
               <Stack.Screen name="SignUp" component={SignUp}  />
               <Stack.Screen name="Home" component={Home}  />
           </Stack.Navigator>
       </NavigationContainer>
     )
   }

export default Index
   