import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useStore from "../store";
import { dado1 } from "../assets/dado1.jpg";
import { dado2 } from "../assets/dado2.gif";
import { dado3 } from "../assets/dado3.jpeg";
import { dado4 } from "../assets/dado4.jpg";
import { dado5 } from "../assets/dado5.png";
import { dado6 } from "../assets/dado6.png";

const DiceGame = () => {
  const navigation = useNavigation();

  const history = useStore((state) => state.history);

  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);
  const [diceResult, setDiceResult] = useState([]);

  const diceImages = [dado1, dado2, dado3, dado4, dado5, dado6];

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);

    // Adicione o resultado ao histórico global
    useStore.addToHistory(newDice1 + newDice2);

    // Adiciona o novo resultado ao início do array para exibição em ordem
    setDiceResult((prevState) => [...prevState, newDice1 + newDice2]);
  };
  console.log(diceResult);

  // Função para determinar se um valor é vencedor ou perdedor
  const determineResult = (result) => {
    if (result === 7 || result === 11) {
      return "Você venceu!";
    } else {
      return "Desculpe, você perdeu. Tente de novo.";
    }
  };

  // Quando o usuário quiser ver o histórico, chame esta função
  const viewHistory = () => {
    navigation.navigate("History", { history: diceResult }); // Passe o histórico como parâmetro
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Resultado dos Dados: {dice1 + dice2}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={diceImages[dice1 - 1]} // Subtraia 1 porque os índices do array começam em 0
          style={{ width: 100, height: 100, marginRight: 20 }}
        />
        <Image
          source={diceImages[dice2 - 1]} // Subtraia 1 porque os índices do array começam em 0
          style={{ width: 100, height: 100 }}
        />
      </View>
      <TouchableOpacity
        onPress={rollDice}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "blue",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Rolar Dados</Text>
      </TouchableOpacity>
      {dice1 + dice2 === 7 || dice1 + dice2 === 11 ? (
        <Text>Você venceu!</Text>
      ) : (
        <Text>VOcê perdeu.</Text>
      )}
      <TouchableOpacity
        onPress={viewHistory} // Use a função para navegar para a tela de histórico
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "blue",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Ver Histórico</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DiceGame;
