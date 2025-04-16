import {StyleSheet, Text, View} from "react-native";
import React from "react";

/**
 * @Desc: RN中flex 布局
 *
 * */

const About = (): React.JSX.Element => {
    return (
        <View style={{backgroundColor: 'pink'}}>
            <Text>在RN中的flex布局</Text>
            <View style={styles.aboutContainer}>
                <View style={{backgroundColor: 'red', flex: 1}}>
                    <Text>12</Text></View>
                <View style={{backgroundColor: 'green', flex: 2}}>
                    <Text>34</Text></View>
                <View style={{backgroundColor: 'yellow', flex: 3}}>
                    <Text>56</Text></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    aboutContainer: {
        flexDirection: 'column',
        width: '100%',
        height: 300
    }
})
export default About;
