import {ActivityIndicator, Alert, Platform, StyleSheet, View} from "react-native";

/**
 * @Desc:任务进度指示条
 * ActivityIndicator
 * 属性：
 * size: large | small，也可以写具体数字
 *（注：但是值为具体数字只在Android上生效，因此ios上任务进度条图标会很小）
 * color：颜色
 *
 * Platform.OS属性：读取当前操作环境，Platform.OS属性
 * android | ios
 *
 * */
const MyActivityIndicator = () => {
    // 读取当前操作环境，Platform.OS属性
    if (Platform.OS === 'android') {
        // @ts-ignore
        alert('当前操作环境为Android');
    } else {
        // @ts-ignore
        alert('当前操作环境为iOS');
    }
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff"/>
            <ActivityIndicator size="small" color="#00ff00"/>
            {/*size为数值，只在Android设备上生效*/}
            <ActivityIndicator size={40} color="orange"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
    }
});
export default MyActivityIndicator;
