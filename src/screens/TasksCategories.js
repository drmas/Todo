import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors } from "../theme";
import TaskCategoryItem from "../components/TaskCategoryItem";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

export const GET_CATEGORIES = gql`
  {
    categories @client {
      title
      count
      icon
    }
  }
`;

const TasksCategories = props => {
  const onPress = () => {
    props.navigation.navigate("TasksList");
  };

  const { data, error, loading } = useQuery(GET_CATEGORIES);

  if (loading) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      {data &&
        data.categories &&
        data.categories.map(cat => (
          <TaskCategoryItem
            key={cat.title}
            title={cat.title}
            subtitle={cat.count + " Items"}
            icon={cat.icon}
            onPress={onPress}
          />
        ))}

      <TaskCategoryItem
        key={"add-new-category"}
        title={"Add List"}
        icon="plus"
        onPress={onPress}
      />
    </View>
  );
};

TasksCategories.navigationOptions = {
  title: "My Todo Lists"
};

export default TasksCategories;

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
