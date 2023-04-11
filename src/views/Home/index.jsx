import { StyleSheet, View, ImageBackground, Dimensions, TouchableHighlight} from 'react-native'
import imagenFondo from '../../../assets/home-fondo.jpg'
import MyAppText from '../../ui/MyAppText';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={imagenFondo}
                resizeMode="cover"
                style={styles.imagen}>
                <TouchableHighlight
                    style={styles.text}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => navigation.navigate('Section')}>
                    <MyAppText 
                        texto={"MUJERES"} 
                        size={32} 
                        color={'white'} 
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.text}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => navigation.navigate('Section')}>
                    <MyAppText 
                        texto={"HOMBRES"} 
                        size={32} 
                        color={'white'} 
                    />
                </TouchableHighlight>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
    },
    imagen: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        width: 180,
        height: 60,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Home;