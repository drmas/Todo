import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { colors, fonts } from "../theme";
import KeyboardSpacer from "react-native-keyboard-spacer";
import DateTimePicker from "react-native-modal-datetime-picker";
import dayjs from 'dayjs';

const initialState = {
  title: "",
  content: "",
  date: new Date(),
  isDateTimePickerVisible: false
};

export default class NewTodo extends Component {
  static navigationOptions = {
    title: "New Todo"
  };

  state = initialState;

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({date});
    this.hideDateTimePicker();
  };

  onChangeText = name => value => this.setState({ [name]: value });

  onCancel = () => {
    this.setState(initialState);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}> New Todo </Text>

          <Text style={styles.name}>Title</Text>
          <TextInput
            style={styles.input}
            value={this.state.title}
            onChangeText={this.onChangeText("title")}
          />

          <Text style={styles.name}>Content</Text>
          <TextInput
            style={[styles.input, styles.inputContent]}
            multiline
            value={this.state.content}
            onChangeText={this.onChangeText("content")}
          />

          <Text style={styles.name}>Time</Text>
          <Text
            style={styles.input}
            onPress={this.showDateTimePicker}
            >{dayjs(this.state.date).format('🗓MMM DD, YYYY  ⏰dddd HH:mm A')}</Text>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTitle}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, styles.btnCancel]}
            onPress={this.onCancel}
          >
            <Text style={[styles.btnTitle, styles.btnCancelTitle]}>Cancel</Text>
          </TouchableOpacity>

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />

          <KeyboardSpacer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    shadowColor: colors.black,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 30,
    shadowOpacity: 0.3,
    padding: 6,
    paddingTop: 20
  },
  title: {
    textAlign: "center",
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: 20
  },
  name: {
    color: colors.white,
    fontSize: 16,
    margin: 8
  },
  input: {
    borderColor: colors.offset,
    borderWidth: 1,
    alignSelf: "stretch",
    height: 40,
    fontSize: 16,
    padding: 8,
    margin: 8,
    color: colors.white
  },
  inputContent: {
    height: 80
  },
  btn: {
    alignSelf: "stretch",
    margin: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.red
  },
  btnCancel: {
    backgroundColor: colors.white,
    marginBottom: 20
  },
  btnTitle: {
    color: colors.white,
    fontSize: 16
  },
  btnCancelTitle: {
    color: colors.red
  }
});
