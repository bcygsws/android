This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [
`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed
> the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before
> proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and
use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or
after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please
visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS
Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will
automatically update and reflect these changes — this is powered
by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a
full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**,
  accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (
  macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out
  the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out
  the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see
the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React
  Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React
  Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub *
  *repository** for React Native.

# 项目构建方式一：使用@react-native-community/cli脚手架

## 构建过程

- 创建项目：npx @react-native-community/cli init myApp_01

## 相关gradle的基本配置

- 路径gradle/wrapper/gradle-wrapper.properties中的distributedUrl切换完本地下载好的gradle.
- 在项目目录android/local.properties文件，添加如下内容：sdk.dir=E:/android-studio/SDK，以声明环境变量中的ANDROID_HOME的值
-

在项目目录android/build.properties中修改buildToolsVersion、compileSdkVersion、minSdkVersion（最小24）、targetSdkVersion为相应的值；同时为repositories添加
阿里云镜像

- allprojects {
  repositories {
  maven { url 'https://maven.aliyun.com/repository/google' }
  maven { url 'https://maven.aliyun.com/repository/jcenter' }
  maven { url 'https://maven.aliyun.com/repository/public' }
  }
  }

- 以上，运行npm run android命令，即可在手机上运行项目

## 其他配置

- 在android/gradle.properties中添加如下内容：
- # add myself;to solve the problem:app start,but can't find path
- # at old version,it is com.android.build.gradle.overridePathCheck=true
- android.overridePathCheck=true

## 三、安装apk前的准备

### 3.1 真机连接到电脑

- 用一条USB线连接电脑和手机
- 打开usb调试；开启【开发者选项】、【USB调试】、【USB安装】

### 3.2 adb的概念和命令

#### 什么是adb

- [什么是adb](https://developer.baidu.com/article/details/3305955)
- adb是Android Debug Bridge的简称，是一个用于调试Android手机的命令行工具，它提供了一些命令，用于管理模拟器、连接手机、安装、卸载、调试应用程序等操作
- adb的工作原理：adb有三部分组成，分别为客户端、服务器和守护进程（daemon）；当开发者使用命令行终端运行adb命令时，客户端会将命令发送给服务端，服务端将命令转发
  相应的守护进程，守护进程在设备上运行，执行结果返回给服务端；服务端再将结果转发给客户端，最终显示在命令行终端上
- adb devices 查看手机连接的情况，adb默认端口是5037端口，如果端口被占用，则需要查看端口占用情况，释放该端口
    - 查找该端口下的任务id：task_id，使用命令：netstat -ano|findstr 5037
    - 查看任务id所在的进程id，process_id;使用命令：tasklist |findstr task_id
    - 杀掉该进程：taskkill /f /pid process_id
    - [杀死5037端口占用的命令](https://www.cnblogs.com/testhub/p/6284091.html)

- 切换到SDK安装目录下，E:\android-studio\SDK\platform-tools,执行以下命令：
    - add kill-server
    - add start-server
    - add reverse tcp:5037 tcp:5037，将5037端口映射到5037端口

### 3.3 其他配合调试的命令

- npx react-native doctor，命令可以辅助我们检查项目出现的一些问题

### 3.3 启动项目

- npx react-native run-android 或者npm run android 启动项目

## 入门教程

- [入门教程](https://juejin.cn/post/7310786611258966067?searchId=202504100702336ADD8D891F777D0A887B)

# 项目构建方式二：使用create-expo-app

## 构建过程

- npx create-expo-app@latest myApp_02

## 查看模拟器设备运行情况

- adb devices
- adb kill-server
- adb start-server
- adb revise tcp:5037 tcp:5037

## 启动项目

- 切换到根目录下，执行npm run android或者npx expo start --android

# 四、RN中的样式的特殊之处

- RN中的样式没有继承性
    - RN中样式的继承只发生在Text组件中
- 样式的键使用驼峰命名法
- 所有尺寸都没有单位
    - width:100
- 有些特殊的样式名,css中是没有的
    - marginHorizontal和marginVertical

## 4.1 RN中样式的声明

- style={{k1:v1,k2:v2}},外层是js语法，内存是样式对象
- style={[{k1:v1},{k2:v2}]}外层大括号是js语法，内存是样式数组；后面的如果与前面的样式有重复的键，后面的会覆盖前面的
- 在RN中，使用StyleSheet.create()创建样式对象
    - const styles=StyleSheet.create(
    - {
    - container:{
    -       width:100,
    -       backgroundColor:'red'
    - }
    - }
      )

## 遇到Bug

### 如遇到unable to load script.Make sure you're either running a metro server……

- 解决办法[参考文档](https://blog.csdn.net/augfun/article/details/106679110)
- 在android/main下创建一个assets文件夹
- 执行以下命令：npx react-native bundle --platform android --dev false --entry-file index.js
  --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest
  android/app/src/main/res
- 然后，注意查看自己项目是否有 index.android.js这个文件，如果有回车执行命令即可，否则会会报错，
  找不到这个index.android.js文件；把index.android.js改为index.js
- 在项目中执行npm run android 或者npx react-native run-android，打包、安装apk应用到真机或者模拟器


