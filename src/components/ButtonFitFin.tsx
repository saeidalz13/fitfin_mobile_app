import { StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import React from "react";

interface ButtonProps {
  onPress: () => void;
  title: string;
  styles: {
    submitButton: {
      backgroundColor: string;
      color: string;
      borderWidth: number;
      borderRadius: number;
      padding: number;
    };
    submitButtonText: {
      color: string
    }
  };
}

const ButtonFitFin: React.FC<ButtonProps> = ({ onPress, title, styles }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.submitButton}>
      <Text style={styles.submitButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonFitFin;

