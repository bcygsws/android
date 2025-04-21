import {Image, StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // height: 200,
    },
    imageContainer: {
        width: 120,
        height: 120,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
const MyImage = () => {
    return (
        <View style={styles.container}>
            <Text>一、require 引入本地图片、source uri引入网络资源图片</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={{width: '50%', height: '50%'}}
                    source={require('../../assets/a1.png')}/>
                {/*注意：这里是uri，而不是url*/}
                <Image
                    style={{width: '50%', height: '50%'}}
                    source={{
                        uri: 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg'
                    }}/>
                <Image
                    style={{width: '50%', height: '50%'}}
                    source={{
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
                    }}/>
            </View>
        </View>

    )
}
export default MyImage;
