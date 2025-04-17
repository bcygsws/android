import {StyleSheet, Text, View} from "react-native";
import React from "react";

/**
 * @Desc: RN中flex 布局
 *
 * */

const About = (): React.JSX.Element => {
    return (
        <View style={{backgroundColor: 'pink'}}>
            <Text>在RN中的flex布局,垂直方向</Text>
            <View style={styles.columnContainer}>
                <View style={{backgroundColor: 'red', flex: 1}}>
                    <Text>12</Text></View>
                <View style={{backgroundColor: 'green', flex: 2}}>
                    <Text>34</Text></View>
                <View style={{backgroundColor: 'yellow', flex: 3}}>
                    <Text>56</Text></View>
            </View>
            <Text>在RNz中flex 布局,水平方向</Text>
            <View style={styles.rowContainer}>
                <View style={styles.text}>
                    <Text style={{textAlign: 'center'}}>苏轼</Text>
                </View>
                <View style={styles.text}>
                    <Text style={{textAlign: 'center'}}>苏辙</Text>
                </View>
                <View style={styles.text}>
                    <Text style={{textAlign: 'center'}}>苏洵</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    columnContainer: {
        flexDirection: 'column',
        height: 300,
        // marginHorizontal: 10,// 垂直于主轴方向的外边距
        // marginVertical: 30,// 垂直于交叉轴方向的外边距；等价于marginVertical
        marginTop: 30,
        marginBottom: 30
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 30,
        height: 80,
        // justifyContent: 'flex-start'
        // justifyContent: 'center',
        // justifyContent: 'space-between',
        // justifyContent: 'space-around',
        justifyContent: 'flex-end',
    },
    text: {
        backgroundColor: 'green',
        width: 80,
        marginHorizontal: 10
    }
})
export default About;
