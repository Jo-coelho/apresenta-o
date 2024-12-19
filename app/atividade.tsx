// Tela de Nível de Atividade Atualizada

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const NivelAtividadeScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        <Text style={styles.stepText}>5 de 10</Text>
      </View>

      <View style={styles.progressBar}>
        {Array.from({ length: 10 }).map((_, index) => (
          <View
            key={index}
            style={index < 5 ? styles.progressActive : styles.progressInactive}
          />
        ))}
      </View>

      <Text style={styles.question}>Qual seu Nível de Atividade?</Text>

      <View style={styles.optionsContainer}>
        {[
          "Sedentário",
          "Moderadamente ativo",
          "Muito ativo",
        ].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionButton, selectedOption === option && styles.optionButtonSelected]}
            onPress={() => setSelectedOption(option)}
          >
            <Text
              style={[styles.optionText, selectedOption === option && styles.optionTextSelected]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.nextButton, !selectedOption && styles.nextButtonDisabled]}
        disabled={!selectedOption}
      >
        <Link href="/treino" style={styles.nextButtonText}>PRÓXIMO</Link>
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
  optionsContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  optionButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  optionButtonSelected: {
    backgroundColor: "#9C27B0",
  },
  optionText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
  optionTextSelected: {
    color: "#FFF",
  },
  nextButton: {
    backgroundColor: "#9C27B0",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 40,
  },
  nextButtonDisabled: {
    backgroundColor: "#D3D3D3",
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

export default NivelAtividadeScreen;
