import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

const SensorCard = (props) => {
  const styles = createStyles(useTheme());

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{props.title}</Text>
        <View style={styles.icon}>
          <Text style={styles.iconText}>{props.icon}</Text>
        </View>
      
      </View>
      <View style={styles.valueDisplay}>
        <Text style={styles.value}>
          {props.value !== null ? props.value.toFixed(1) : "--"}
        </Text>
        <Text style={styles.unit}>{props.unit}</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Mínima</Text>
          <Text style={styles.statValue}>
            {props.min !== null
              ? `${props.min.toFixed(1)}${props.unit}`
              : `--${props.unit}`}
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Máxima</Text>
          <Text style={styles.statValue}>
            {props.max !== null
              ? `${props.max.toFixed(1)}${props.unit}`
              : `--${props.unit}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const createStyles = (theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.card,
      width: 400,
      borderRadius: 10,
      padding: 20,
      marginTop: 10,
      flexDirection: "column",
    },
    cardHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    cardTitle: {
      color: theme.text,
      fontSize: 16,
      fontWeight: "600",
    },
    icon: {
      alignItems: "center",
      justifyContent: "center",
    },
    valueDisplay: {
      flexDirection: "row",
      marginBottom: 12,
    },
    value: {
      color: theme.text,
      fontSize: 28,
      fontWeight: 700,
    },
    unit: {
      color: theme.text,
      marginLeft: 6,
      fontSize: 14,
    },
    stats: {
      flexDirection: "row",       
      justifyContent: "space-between",
      alignItems: "center",
      marginTop:20,
      width: 350,
      gap: 8, 
    },
    stat: {
      flex: 1,                    
      alignItems: "center",        
    },
    statLabel: {
      color: theme.text,
      fontSize: 12,
    },
    statValue: {
      color: theme.text,
      fontSize: 14,
      fontWeight: "600",
    },
  });


export default memo(SensorCard);
