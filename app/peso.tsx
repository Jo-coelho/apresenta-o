// Tela de Peso Atual

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const PesoScreen = () => {
  const [peso, setPeso] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        <Text style={styles.stepText}>2 de 10</Text>
      </View>
      <View style={styles.progressBar}>
        {Array.from({ length: 10 }).map((_, index) => (
          <View
            key={index}
            style={index < 2 ? styles.progressActive : styles.progressInactive}
          />
        ))}
      </View>
      <Text style={styles.question}>Qual seu Peso Atual?</Text>
      <Text style={styles.subText}>Digite seu Peso</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="fitness-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={(text) => setPeso(text)}
          placeholder="75.0"
        />
        <Text style={styles.unitText}>KG</Text>
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Link href="/altura" style={styles.nextButtonText}>PRÓXIMO</Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.skipText}>Pular</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    width: "100%",
  },
  backIcon: {
    marginRight: 10,
  },
  stepText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
  },
  progressBar: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center",
  },
  progressActive: {
    width: 20,
    height: 4,
    backgroundColor: "#9C27B0",
    marginHorizontal: 2,
    borderRadius: 2,
  },
  progressInactive: {
    width: 20,
    height: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 2,
    borderRadius: 2,
  },
  question: {
    fontSize: 24,
    color: "#000",
    fontWeight: "400",
    textAlign: "center",
    marginTop: 50,
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginTop: 40,
    paddingHorizontal: 10,
    width: "80%",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontSize: 24,
    color: "#000",
    textAlign: "center",
  },
  unitText: {
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
  },
  nextButton: {
    backgroundColor: "#9C27B0",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 40,
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  skipText: {
    color: "#000",
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: "underline",
  },
});

export default PesoScreen;