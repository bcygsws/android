import {Alert, Button, Text, View} from "react-native";

/**
 * @desc：Button组件和Alert组件定义对话框
 *
 * Button
 * 注：Button上不写style样式，改用以下属性来控制按钮的显示和交互
 * text属性： 为按钮名称
 * color属性:为按钮背景颜色
 * accessibilityLabel属性：为盲人,无障碍访问功能显示的文本
 *
 * */
const AlertButton = () => {
    const pressHandler = () => {
        // js中的的alert方法
        // alert('这是js中的alert方法');

        // RN中的Alert组件
        Alert.alert('标题区', '内容区', [
            {
                text: '确定', onPress: () => {
                    console.log('确定');
                }
            },
            {
                text: '取消', onPress: () => {
                    console.log('取消')
                }
            }
        ])
    }
    const pressHandler1 = () => {
        Alert.alert('更新提示', '有新版本，是否更新', [
            {
                text: '稍后再试', onPress: () => {
                    console.log('稍后再试');
                }
            },
            {
                text: '确定', onPress: () => {
                    console.log('确定');
                }
            },
            {
                text: '取消', onPress: () => {
                    console.log('取消');
                }
            }
        ], {cancelable: true})// 第四参数，cancelable控制是否可以点击空白处取消对话框
    }
    return (<View>
        <Text>Alert和Button组件</Text>
        <View>
            {/*类似onClick,Button有onPress事件*/}
            <Button title={'点击按钮'} onPress={pressHandler}></Button>
        </View>
        {/*复杂按钮*/}
        <View style={{marginTop: 20}}>
            {/*类似onClick,Button有onPress事件*/}
            <Button
                title={'复杂弹框'}
                onPress={pressHandler1}
                color={'red'}
                accessibilityLabel={'为盲人，无障碍访问功能显示的文本'}
            ></Button>
        </View>
    </View>)
}
export default AlertButton;
