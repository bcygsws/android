import {StatusBar, StyleSheet, Switch, Text, View} from "react-native";
import {useState} from "react";

/**
 * @Desc: SwitchStatusBar
 * Switch组件：实际是，一个触摸开关组件；
 * 在当前SwitchStatusBar组件中演示
 *
 * 注：其中StatusBar直接在父组件App.tsx中演示
 * hidden属性和barStyle属性
 * */

const SwitchStatusBar = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View>
            {/*Switch在当前组件中演示*/}
            <Text>Switch组件</Text>
            <View style={styles.container}>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    value={isEnabled}
                    onValueChange={() => setIsEnabled(!isEnabled)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'red',
    },
})
export default SwitchStatusBar;
