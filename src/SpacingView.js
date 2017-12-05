import React, {PureComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import colors from "../res/colors";
import screen from "./screen";


class SpacingView extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 2,
        backgroundColor: colors.bgError,
        width:screen.width
    },
});

export default SpacingView;
