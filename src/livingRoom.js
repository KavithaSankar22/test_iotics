
import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, FlatList, SectionList, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import { color } from 'react-native-reanimated';


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);
const Tab = createMaterialTopTabNavigator();
const numColumns = 2
const ListItem = ({ item }) => {
  return (

    <View style={styles.item}>
      <TouchableOpacity>
        <Icon name={item.icon} color="white" size={90} />
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

// To render the icon using flatlist
function ControlScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../src/image/download.png')} style={styles.image}>
           <View style={styles.container1}>
          <StatusBar style="light" />
          <SafeAreaView style={{ flex: 1 }}>
            <SectionList
              sections={SECTIONS}
              renderSectionHeader={({ section }) => (
                <>
                  <Text ></Text>
                  <FlatList
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                    numColumns={numColumns}
                  />
                </>
              )}
              renderItem={({ item, section }) => {
                return null;
                }}
            />
          </SafeAreaView>
          <View>
            <TouchableOpacity
              style={styles.submit}
            >
              <Text style={{ fontSize: 17, color: "white", textAlign: "center", padding: 2 }}> Master On </Text>
            </TouchableOpacity>
            <View>
              <Text></Text>
            </View>
            <TouchableOpacity
              style={styles.submit}
            >
              <Text style={{ fontSize: 17, color: "white", textAlign: "center", padding: 2 }}> Master Off</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
// Schedule Screen
function ScheduleScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../src/image/download.png')} style={styles.image}>
        <Text style={styles.text}>SCHEDULE</Text>
      </ImageBackground>
      <View>
        <View >
        </View>
      </View>
    </View>
  );
}

//Setting Screen
function SettingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../src/image/download.png')} style={styles.image}>
        <Text style={styles.text}>SETTING</Text>
      </ImageBackground>

    </View>
  );
}
//Main Screen
function LivingRoom() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: 'white' },
        tabBarStyle: { backgroundColor: 'black' },
      }}
    >
      <Tab.Screen name="CONTROL" component={ControlScreen} />
      <Tab.Screen name="SCHEDULE" component={ScheduleScreen} />
      <Tab.Screen name="SETTING" component={SettingScreen} />
    </Tab.Navigator>

  );
}
//Flatlist JSON DATA
const SECTIONS = [
  {

    data: [
      {
        key: '1',
        text: 'Light 02',
        icon: 'poweroff'
      },
      {
        key: '2',
        text: 'Light 02',
        icon: 'poweroff',
      },

      {
        key: '3',
        text: 'Light 02',
        icon: 'poweroff',
      },
      {
        key: '4',
        text: 'Fan',
        icon: 'poweroff',
      },

    ],
  },

];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  container1: {
    flex: 1,
  },

  item: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 20

  },
  submit:
  {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#351652',
    borderRadius: 30,
    borderWidth: 0,
  },
  itemText: {
    color: 'grey',
    marginTop: 15,
    textAlign: "center"
  },
});

export default LivingRoom