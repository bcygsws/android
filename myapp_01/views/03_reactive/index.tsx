import {StyleSheet, Text, View} from "react-native";

/**
 * @Desc；RN的响应式布局
 * dimensions 维度、尺寸
 *
 * */
import {Dimensions} from "react-native";
import {useState} from "react";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.log('width:', width, 'height:', height);
const data = [
    {
        id: 1,
        name: '扫一扫'
    },
    {
        id: 2,
        name: '付款码'
    },
    {
        id: 3,
        name: '卡包'
    },
    {
        id: 4,
        name: '出行'
    }
]
const ReactiveFlex = () => {
    const [flag, setFlag] = useState(1);
    const touchHandle = (e: any, id: number) => {

        console.log('e===', e);
        console.log('e.target===:', e.target);
        console.log('id===', id);
        setFlag(id);
    }
    return (
        <View>
            {/*标题*/}
            <Text>ReactiveFlex</Text>
            {/*响应式布局内容*/}
            <View>
                <Text>width:{width}</Text>
                <Text>height:{height}</Text>
            </View>
            <View style={styles.container}>
                {data.map((item) => {
                    return (<View style={styles.item} key={item.id} onTouchStart={(e) => touchHandle(e, item.id)}><Text
                        style={[styles.text, flag === item.id && styles.textActive]}>{item.name}</Text></View>)
                })
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {// 默认width是100%，可以不指定
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    item: {
        flex: 1,
        // width: Dimensions.get('window').width / 4,
        paddingVertical: 10
    },
    text: {
        textAlign: 'center'
    },
    textActive: {
        color: 'blue'

    }
});
export default ReactiveFlex;
