import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { primary, white, black } from "../utils/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary
  },
  deckDetails: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  deckName: {
    fontSize: 50,
    color: white
  },
  deckCards: {
    color: black
  },
  deckActions: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30
  },
  button: {
    borderRadius: 5,
    borderWidth: 2,
    paddingTop: 20,
    borderColor: black,
    paddingBottom: 20,
    paddingRight: 70,
    paddingLeft: 70
  },
  startBtn: {
    backgroundColor: black,
    marginTop: 20
  }
})

const Deck = ({ title, cardCount, navigation }) => (
  <View style={styles.container}>
    <View style={styles.deckDetails}>
      <Text style={styles.deckName}>{title}</Text>
      <Text style={styles.deckCards}>{`${cardCount} Cards`}</Text>
    </View>
    <View style={styles.deckActions}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("NewCard", {
            title
          })
        }
      >
        <Text>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.startBtn]}
        onPress={() => navigation.navigate("Quiz", { title })}
      >
        <Text style={{ color: white }}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  </View>
)

Deck.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  cardCount: PropTypes.number.isRequired
}

const mapStateToProps = (decks, { navigation }) => {
  const deck = navigation.state.params.deckName
  return {
    title: deck,
    cardCount: decks[deck].questions.length
  }
}

export default connect(mapStateToProps)(Deck)
