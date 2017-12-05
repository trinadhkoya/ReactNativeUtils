import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomText from "./src/CustomText";
import SpacingView from "./src/SpacingView";
import system from "./src/system";


if (system.isIOS) {

    instructions = "Cmd+R to to reload"

} else {
    instructions = "shake device to reload"
}


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <CustomText type='h2White' style={styles.welcome}>
                    This is my Custom Text
                </CustomText>

                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Text>The below one is a spacing View </Text>
                <SpacingView/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
