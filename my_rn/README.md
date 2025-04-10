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

# 项目构建

## 构建过程

## 安装apk前的准备

- npm run android构建、打包和安装apk之前，adb的操作；platform-tools/adb.exe
- 切换到SDK安装目录下，E:\android-studio\SDK\platform-tools,执行以下命令
    - add kill-server
    - add start-server
    - add reverse tcp:8081 tcp:8081
- npx react-native doctor，命令可以辅助我们检查项目出现的一些问题
## 入门教程
- [入门教程](https://juejin.cn/post/7310786611258966067?searchId=202504100702336ADD8D891F777D0A887B)

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


