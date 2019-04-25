import React, { Component } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { colors, fonts } from "../theme";
import TaskItem from "../components/TaskItem";
import AddButton from "../components/AddButton";

export default class TasksList extends Component {
  static navigationOptions = {
    title: "All Tasks"
  };

  onNewTodo = () => {
    this.props.navigation.navigate('NewTodo');
  }

  onRemove = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete this todo?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Delete', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle} >Today</Text>
        <TaskItem
          done={true}
          title="Google Project"
          subtitle="Create a new google project"
          time="10:00AM"
          onRemove={this.onRemove}
        />
        <TaskItem
          title="Google Project"
          subtitle="Create a new google project"
          time="10:00AM"
          onRemove={this.onRemove}
        />
        <AddButton onPress={this.onNewTodo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDark,
    flex: 1,
    padding: 8
  },
  sectionTitle: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
    marginLeft: 18,
  }
});
