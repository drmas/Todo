import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, fonts } from "../theme";

const TaskItem = ({ title, subtitle, time, done, onRemove }) => (
  <View style={styles.container}>
    <View style={done ? styles.checked : styles.unChecked}>
      {done && <Icon name="check" color={colors.white} size={16} />}
    </View>
    <View style={styles.center}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>

    {done ? (
      <TouchableOpacity style={styles.unChecked} onPress={onRemove}>
        <Icon name="close" color={colors.white} size={16} />
      </TouchableOpacity>
    ) : (
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: colors.background,
    borderRadius: 4
  },
  checked: {
    backgroundColor: colors.offset,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  unChecked: {
    borderColor: colors.offset,
    borderWidth: 2,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2
  },
  center: {
    flex: 1
  },
  title: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: 18,
    padding: 6
  },
  subTitle: {
    fontFamily: fonts.regular,
    color: colors.text2,
    fontSize: 13,
    paddingHorizontal: 6
  },
  timeContainer: {
    backgroundColor: colors.red,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 16,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center"
  },
  time: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: 14,
    paddingTop: 6
  }
});

export default TaskItem;
