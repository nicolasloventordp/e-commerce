import { StyleSheet, Text, View, ImageBackground, Dimensions} from 'react-native'

const Button = () => {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>MUJERES</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    text: {
        width: '100px',
        fontSize: '30px'
    }
});

export default Button;