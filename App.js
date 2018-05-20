import React from "react"
import { View, StatusBar } from "react-native"
import { Constants } from "expo"
import Decks from "./components/Decks"
import { primary } from "./utils/colors"

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

const App = () => (
  <View style={{ flex: 1 }}>
    <AppStatusBar backgroundColor={primary} barStyle="light-content" />
    <Decks />
  </View>
)

export default App
