import { StyleSheet, Text, View, ImageBackground, Dimensions} from 'react-native'
import MyAppText from '../../../ui/MyAppText';
const Button = () => {
    return (
        <View style={styles.container}> 
            <MyAppText texto={"Hola Mundo"} />
            <MyAppText texto={"Hola Mundo"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 300
    },
    textUno: {
        width: 'auto',
        fontSize: 40,
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 20
    },
    textDos: {
        width: 'auto',
        fontSize: 40,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20
    }
});

export default Button;