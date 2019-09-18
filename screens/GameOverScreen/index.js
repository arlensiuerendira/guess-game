import React from "react";
import { View, Text, Button } from "react-native";
import Colors from "../../constants/colors";
import Card from "../../components/Card/";
import styles from "./styles";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameOver}>
        <Text style={{ textAlign: "center" }}>Game Over !!</Text>
        <Text style={{ textAlign: "center" }}>
          It took me {props.roundsNumber} rounds to guess the number:{" "}
          {props.userNumber}, want to play again ?
        </Text>
        <View style={{ width: "40%", marginVertical: 10 }}>
          <Button
            title="RESTART"
            onPress={props.onRestart}
            color={Colors.primary}
          />
        </View>
      </Card>
    </View>
  );
};

export default GameOverScreen;
