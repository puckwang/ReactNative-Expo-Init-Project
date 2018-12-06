# React Native Expo Init Project

用來建立已經設置好的 Expo 初始化專案

## 支援功能
* 狀態管理: Redux, Redux Saga
* 畫面切換: [react-navigation](https://reactnavigation.org/)
* 在地化: [i18n-js](https://github.com/fnando/i18n-js)
* HTTP client: [axios](https://github.com/axios/axios)
* dotEnv

## Install
```shell
git clone https://github.com/s9801077/ReactNative-Expo-Init-Project
cd ReactNative-Expo-Init-Project
cp .env.example .env
yarn install
```

## Run project
```shell
expo start
```


## 說明文件

### 環境參數
可將環境參數設置於 `.env` 與 `.env.example` 中，而 `.env` 不會被上傳到 git，但其他人可以藉由 `.env.example` 來自定環境參數
```dotenv
title = Hello
```

新增完後需重新執行 `expo start` 且要觸發全部重建置，並可於程式中使用
```javascript
process.env.title
```


### 新增畫面
於 `app/screens` 中新增畫面後，需至 `app/screens/app.js` 中進行註冊。
```javascript
import UserInfoScreen from './UserInfo'

const AppNavigator = createStackNavigator({
    UserInfo: { screen: UserInfoScreen },
});
```

### 在地化教學
於 `app/i18n/` 中新增需要的文字與對應的鍵值。
```javascript
const tw = {
    home: {
        hello: '哈囉 {{name}}！',
        msg: '現在語言是繁體中文。',
    }
};

export default tw;
```

接下來你就可以直接在畫面中使用
```javascript
import i18n from "../i18n";
...
<Text>{i18n.t("home.hello", {name: "Puck"})}</Text>
```