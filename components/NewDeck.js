import React, { Component } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from "react-native"
import { primary, white, darkText, lightText, black } from "../utils/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary
  },
  deckContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 10
  },
  heading: {
    fontSize: 35,
    color: white,
    textAlign: "center"
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30
  },
  button: {
    backgroundColor: black,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 70,
    paddingLeft: 70
  },
  input: {
    margin: 25,
    height: 50,
    backgroundColor: white,
    borderRadius: 3,
    color: darkText,
    paddingHorizontal: 15
  }
})

class NewDeck extends Component {
  state = {
    deckName: ""
  }

  toggleFlip = () => {
    this.setState(currentState => ({
      flipped: !currentState.flipped
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deckContainer}>
          <Text style={styles.heading}>
            What is the title of your new deck?
          </Text>

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Deck Title"
            placeholderTextColor={lightText}
            onChangeText={deckName => this.setState(() => ({ deckName }))}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: white }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default NewDeck