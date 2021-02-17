import React, { useEffect } from "react";
import Routes from "./components/Routes/Routes";
import Expo from "expo";
import * as Font from "expo-font";

import * as firebase from "firebase";
import { firebaseConfig } from "./config/firebaseConfig";

export default function App() {
  const load = async() => {
    await Font.loadAsync({
      h1: require("./assets/fonts/Nunito-Regular.ttf"),
      bold: require("./assets/fonts/Nunito-ExtraBoldItalic.ttf"),
      light: require("./assets/fonts/Nunito-Light.ttf"),
      italic: require("./assets/fonts/Nunito-Italic.ttf")
  })
    useEffect(() => load())
  }
  return <Routes />;
}
