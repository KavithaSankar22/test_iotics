import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

// Sidenav 

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#351652" }}>
      <View>
        <Image
          source={require('../src/image/iotics.png')}
          style={styles.sideMenuProfileIcon}

        />
        <Text style={{ textAlign: "center", marginTop: 6, color: "white" }}>appdemo@iotics.io</Text>
        <Text></Text>
        <Text style={{ color: "grey" }}>___________________________________________</Text>
      </View >
      <DrawerContentScrollView {...props}>
        <DrawerItem activeTintColor={'white'} inactiveTintColor={"white"} 
         label="Home" 
          onPress={() => props.navigation.navigate('SplashScreen')}
        />
        <DrawerItem activeTintColor={'white'} inactiveTintColor={"white"}
          label="Add Devices"
          onPress={() => props.navigation.navigate('Adddevice')}
        />
        <DrawerItem activeTintColor={'white'} inactiveTintColor={"white"}
          label="Help"
          onPress={() => props.navigation.navigate('SplashScreen')}
        />

        {/* <DrawerItemList    activeTintColor={'white'} inactiveTintColor={"white"} {...props} /> */}
        <DrawerItem activeTintColor={'white'} inactiveTintColor={"white"}
          label="Visit Us"
          onPress={() => Linking.openURL('https://www.iotics.io/')}
        />

      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 13,
          textAlign: 'center',
          color: 'grey'
        }}>
        Version 3.4.8
      </Text>
      <Text></Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 80,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop: 10
  },
});

export default CustomSidebarMenu;