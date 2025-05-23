/**
 * @Desc:Sample React Native App
 * https://github.com/facebook/react-native
 * 注：StatusBar组件只在Android上使用
 *
 *
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
    Button,
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import Home from "./views/01_three_styles/index";
import About from "./views/02_flex/index";
import ReactiveFlex from "./views/03_reactive";
import AlertButton from "./views/04_alert_button";
import SwitchStatusBar from "./views/05_Switch_StatusBar";
import MyActivityIndicator from "./views/06_activity_indicator";
import MyImage from "./views/07_image";
import MyTextInput from "./views/ 08_textinput";

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
}

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    // 控制StatusBar的显示和隐藏
    const [visibleStatus, setVisibleStatus] = useState(false);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    /*
     * To keep the template simple and small we're adding padding to prevent view
     * from rendering under the System UI.
     * For bigger apps the recommendation is to use `react-native-safe-area-context`:
     * https://github.com/AppAndFlow/react-native-safe-area-context
     *
     * You can read more about it here:
     * https://github.com/react-native-community/discussions-and-proposals/discussions/827
     */
    const safePadding = '2%';
    const scrollBackground = {
        // backgroundColor: isDarkMode ? Colors.black : Colors.white,
        backgroundColor: isDarkMode ? Colors.black : Colors.white
    }
    return (
        <View style={backgroundStyle}>
            {/*移动设备顶端状态条,注：StatusBar只在Android上使用*/}
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
                hidden={visibleStatus}
            />
            {/*移动设备主显示区*/}
            {/*高版本才可以使用100%来设置宽度，0.6版本需要使用Dimensions.get('window').width/Dimensions.get('window').height获取宽高*/}
            <ScrollView style={[scrollBackground, {width: Dimensions.get('window').width}]}>
                <View style={{paddingRight: safePadding, paddingLeft: safePadding}}>
                    {/*九、TextInput组件*/}
                    <MyTextInput/>
                    {/*rn中style声明的三种方式*/}
                    <Home/>
                    {/*rn中flex 布局*/}
                    <About/>
                    {/*响应式布局*/}
                    <ReactiveFlex/>
                    {/*Alert和Button组件*/}
                    <AlertButton/>
                    {/*五、Switch和StatusBar组件*/}
                    <SwitchStatusBar/>
                    {/*六、演示statusBar组件*/}
                    <View>
                        <Button title="切换StatusBar的显示/隐藏" onPress={() => {
                            setVisibleStatus(!visibleStatus);
                        }}></Button>
                    </View>
                    {/*七、任务进度指示条*/}
                    <View>
                        {/*<MyActivityIndicator/>*/}
                    </View>
                    {/*八、Image组件*/}
                    <MyImage/>


                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
