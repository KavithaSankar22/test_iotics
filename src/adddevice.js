import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const adddevice = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ textAlign: "center" }}> ADD DEVICES</Text>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          onPress={
            () => navigation.navigate('Dashboard')
          }
          title="Go to DashBoard"
        />
      </View>
    </View>

  );
}

export default adddevice;