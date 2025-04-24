import {Alert, Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";

/**
 * @Desc；TextInput组件
 * 注：j按键，打开dev tools，打印的的val少一个字符
 * 登录案例：
 * 参考：https://blog.csdn.net/qq_27702739/article/details/140886955
 *
 * */
const MyTextInput = () => {
    // 输入框的用户名值：val
    const [val, setVal] = useState('');
    // 输入的密码值
    const [pass, setPass] = useState('');
    /**
     * @Desc：登录按钮点击事件
     *
     * */
    const doLogin = () => {
        console.log("登录按钮点击事件");
        // @ts-ignore
        // alert('用户名：' + val + '密码：' + pass);
        Alert.alert(val, pass, [{
            text: '确定',
            onPress: () => {
                // @ts-ignore
                setVal('');
                setPass('');
            },

        }, {
            text: '取消',
            onPress: () => {
                console.log('取消');
            },
        }
        ]);
    }
    return (<View>
        <View>
            <Text>用户名：{val}</Text>
            <Text>密码：{pass}</Text>
        </View>
        <View>
            <Text style={styles.header}>账号登录</Text>
        </View>
        <View style={styles.item}>
            <Text style={{flex: 1}}>账号</Text>
            <TextInput
                style={styles.input}
                onChangeText={setVal}
                value={val}
                placeholder={'请输入用户名'}
                maxLength={10}
            />
        </View>
        <View style={styles.item}>
            <Text style={{flex: 1}}>密码</Text>
            {/*注：secureTextEntry属性设置为true，将输入文本以....密文显示 */}
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder={'请输入密码'}
                value={pass}
                onChangeText={setPass}
                maxLength={10}
                // keyboardType={'visible-password'}
            />
        </View>

        <View>
            {/*注：Button按钮上不能写style样式，title属性设置按钮名称；color属性设置按钮背景颜色*/}
            <Button title="登录" onPress={doLogin}/>
        </View>
    </View>)
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 20,// 垂直向的两个外边距
        flex: 11
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})
export default MyTextInput;
