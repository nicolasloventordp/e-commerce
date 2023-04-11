import { StyleSheet, View, Dimensions, TouchableHighlight, SafeAreaView, FlatList, StatusBar, Text } from 'react-native'
import MyAppText from '../../ui/MyAppText'
import { AntDesign } from '@expo/vector-icons';
import Item from './components/Item'
import Slider from '../../components/Slider';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const DATA = [
    {
        id: '1',
        title: '1 imagen'
    },
    {
        id: '2',
        title: '2 imagen'
    },
    {
        id: '3',
        title: '3 imagen'
    }
];

const Section = ({ navigation }) => {
    return (
        /*<View style={styles.section}>
            <TouchableHighlight 
                style={{width: 50, height: 50}}
                onPress={() => navigation.goBack()}
            >
                <AntDesign 
                    name="left" 
                    size={32} 
                    color="white"
                />
            </TouchableHighlight>
            <View style={styles.text}>
                <MyAppText 
                    texto={"MUJERES"} 
                    size={32} 
                    color={'white'} 
                />
            </View>

             

        </View>*/
        <View style={styles.container}>
            <View style={styles.iconBackContainer}>
                <TouchableHighlight 
                    style={styles.iconBack}
                    onPress={() => navigation.goBack()}>
                    <AntDesign 
                        name="left" 
                        size={32} 
                        color="black"/>
                </TouchableHighlight>
            </View>
            <Slider/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBackContainer: {
        flex: 0.15,
        width: '100%',
        justifyContent: 'flex-start',
        justifyContent: 'flex-end'
    },
    iconBack: {
        marginLeft: 20
    }


});

export default Section;