import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { colors, fonts } from "../theme";

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = (width - 48) / 2

const TaskCategoryItem = ({ icon, title, subtitle, onPress }) => (
  <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={onPress}>
    <Icon name={icon} size={60} color={colors.white} style={styles.icon}/>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: ITEM_WIDTH,
    padding: 32,
    backgroundColor: colors.background,
  },
  icon: {
    marginBottom: 32,
    opacity: 0.95
  },
  title: {
    color: colors.green,
    fontSize: 18,
    fontFamily: fonts.regular,
  },
  subtitle: {
    marginTop: 4,
    color: colors.white,
    opacity: 0.5,
    fontSize: 14,
    fontFamily: fonts.regular,
  }
});

export default TaskCategoryItem;
