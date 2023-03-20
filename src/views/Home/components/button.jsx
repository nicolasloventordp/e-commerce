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
        height: '300px'
    },
    textUno: {
        width: 'auto',
        fontSize: '40px',
        backgroundColor: 'red',
        padding: '12px',
        borderRadius: '20px'
    },
    textDos: {
        width: 'auto',
        fontSize: '40px',
        backgroundColor: 'red',
        padding: '10px',
        borderRadius: '20px'
    }
});

export default Button;