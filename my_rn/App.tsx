/**
 * @Desc:Sample React Native App
 * https://github.com/facebook/react-native
 * 一、react native，从环境搭建到项目实践
 * 参考文档：https://juejin.cn/post/7310786611258966067?searchId=202504130401289991E22115345BEABD93#heading-10
 *
 * 二、RN的核心组件和Android原生组件、web标签的对比
 * 参考文档：https://reactnative.cn/docs/intro-react
 * React Native UI库       Android原生组件    web
 * View                       ViewGroup      非滚动的div
 * ScrollView                 ScrollView      滚动div
 * Text                       TextView         p
 * TextInput                  EditText        <input type="text"/>
 * Image                      ImageView       img
 *
 *
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    /*
     * To keep the template simple and small we're adding padding to prevent view
     * from rendering under the System UI.
     * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
     * https://github.com/AppAndFlow/react-native-safe-area-context
     *
     * You can read more about it here:
     * https://github.com/react-native-community/discussions-and-proposals/discussions/827
     */
    const safePadding = '5%';

    return (
        <View style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                style={backgroundStyle}>
                <View style={{paddingRight: safePadding}}>
                    <Header/>
                </View>

                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                        paddingHorizontal: safePadding,
                        paddingBottom: safePadding,
                    }}>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="See Your Changes">
                        <ReloadInstructions/>
                    </Section>
                    <Section title="Debug">
                        <DebugInstructions/>
                    </Section>
                    <Section title="Learn More">
                        Read the docs to discover what to do next:
                        鲍承毅abcdxass
                    </Section>
                    <LearnMoreLinks/>
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
