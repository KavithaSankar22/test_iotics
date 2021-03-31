

import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/splash';
import DashBoard from './src/dashboard';
import LivingRoom from './src/livingRoom';
import Adddevice from './src/adddevice';
import CustomSidebarMenu from './src/CustomSidebarMenu';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function firstScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <TouchableOpacity >
          <Icon name={"menu"} color="white" size={30} style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

function secondScreen({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{
      headerRight: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
    }}
      options={{ headerShown: false }}>
      <Stack.Screen
        name="Dash"
        component={DashBoard}
        options={{
          headerTitle: "Dashboard",
          headerTitleAlign: "center",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#351652' },
          headerShown: true
        }}
      />
      <Stack.Screen
        name="LivingRoom"
        component={LivingRoom}
        options={{
          headerTitle: 'Living Room',
          headerTitleAlign: "center",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#351652' },
        }} />
    </Stack.Navigator>
  );
}
//sidenav 
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerPosition={'right'}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="SplashScreen"
          options={{ drawerLabel: 'Home' }}
          component={firstScreen} />
        <Drawer.Screen
          name="Dashboard"
          options={{ drawerLabel: 'Dashboard' }}
          component={secondScreen} />
        <Drawer.Screen
          name="Adddevice"
          options={{ drawerLabel: 'Add Device' }}
          component={Adddevice} />
          </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default App;