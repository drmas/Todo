import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors } from "../theme";
import TaskCategoryItem from "../components/TaskCategoryItem";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const GET_CATEGORIES = gql`
  {
    categories @client {
      title,
      count,
      icon
    }
  }
`

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
        <Query query={GET_CATEGORIES}>
          {({ data }) => {
            if (data && data.categories) {
              return data.categories.map(cat => (
                <TaskCategoryItem
                  key={cat.title}
                  title={cat.title}
                  subtitle={cat.count + ' Items'}
                  icon={cat.icon}
                  onPress={this.onPress}
                />
              ));
            }

            return null
          }}
        </Query>

        {/* <TaskCategoryItem
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
        /> */}
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
