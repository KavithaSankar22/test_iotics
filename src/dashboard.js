import * as React from 'react';
import {
    Button,
    View,
    TouchableOpacity,
    SafeAreaView, StyleSheet, ImageBackground
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Right } from "native-base";
import Icon from 'react-native-vector-icons/Entypo'
import Iconswitch from 'react-native-vector-icons/AntDesign';


const DashBoard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Container>
                <ImageBackground source={require('../src/image/download.png')} style={styles.image}>
                    <Content padder  >
                        <Card style={{ borderColor: "white" }} >
                            <CardItem header bordered style={{ backgroundColor: "black", }}>
                                <TouchableOpacity onPress={
                                    () => navigation.navigate('LivingRoom')
                                } >
                                    <Text style={{ color: 'white' }}>Living Room</Text>
                                </TouchableOpacity>
                                <View style={{ marginLeft: 180 }}>
                                    <Right >
                                        <Icon name="dots-three-horizontal" color="white" size={20} />
                                    </Right>
                                </View>
                            </CardItem>
                            <CardItem style={{ backgroundColor: "black" }}>
                                <Body >
                                    <Text style={{ color: 'white' }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={styles.item}>
                                                <TouchableOpacity>
                                                    <Iconswitch name={'poweroff'} color="white" size={30} />
                                                </TouchableOpacity>
                                                <Text style={styles.itemText}>{"Light1"}</Text>
                                            </View>
                                            <View style={styles.item}>
                                                <TouchableOpacity>
                                                    <Iconswitch name={'poweroff'} color="white" size={30} />
                                                </TouchableOpacity>
                                                <Text style={styles.itemText}>{"Light1"}</Text>

                                            </View>
                                            <View style={styles.item}>
                                                <TouchableOpacity>
                                                    <Iconswitch name={'poweroff'} color="white" size={30} />
                                                </TouchableOpacity>
                                                <Text style={styles.itemText}>{"Light1"}</Text>
                                            </View>
                                            <View style={styles.item}>
                                                <TouchableOpacity>
                                                    <Iconswitch name={'poweroff'} color="white" size={30} />
                                                </TouchableOpacity>
                                                <Text style={styles.itemText}>{"Fan"}</Text>
                                            </View>
                                        </View>
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </ImageBackground>
            </Container>
        </View>
    );
}
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
    item: {

        marginLeft: 20,
        marginRight: 15,
        marginTop: 20,
        marginBottom: 20

    },
    itemText: {
        color: 'grey',
        marginTop: 15,
        textAlign: "center"
    },
})
export default DashBoard;