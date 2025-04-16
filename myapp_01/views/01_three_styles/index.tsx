import {StyleSheet, Text, View} from "react-native";
import React from "react";

/**
 * @Desc:React Native 样式声明的三种方式：演示
 * 对象
 * 数组对象
 * StyleSheet.create({})
 *
 * */

const Home = (): React.JSX.Element => {
    // 声明样式的三种方式：对象、数组对象和StyleSheet
    return (
        <View>
            <Text style={{fontSize: 14, color: "red"}}>Home</Text>
            <Text style={[{fontSize: 20, color: "orange"}, {fontSize: 30}]}>Home1</Text>
            <Text style={styles.home}>Home2</Text>
        </View>
    )
}
export default Home;
/*可以将样式代码统一组织在一起*/
const styles = StyleSheet.create({
    home: {
        fontSize: 20,
        color: "blue"
    }
})
