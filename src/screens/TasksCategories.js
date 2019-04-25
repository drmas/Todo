import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors } from "../theme";
import TaskCategoryItem from "../components/TaskCategoryItem";

export default class TasksCategories extends Component {
  static navigationOptions = {
    title: "My Todo Lists"
  };

  onPress = () => {
    this.props.navigation.navigate("TasksList");
  };

  render() {
    return (
      <View style={styles.container}>
        <TaskCategoryItem
          title="All Tasks"
          subtitle="9 items"
          icon="notebook"
          onPress={this.onPress}
        />
        <TaskCategoryItem
          title="Personal"
          subtitle="9 items"
          icon="user"
          onPress={this.onPress}
        />
        <TaskCategoryItem
          title="Work"
          subtitle="9 items"
          icon="briefcase"
          onPress={this.onPress}
        />
        <TaskCategoryItem
          title="Add List"
          subtitle=""
          icon="plus"
          onPress={this.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDark,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: 8
  }
});
