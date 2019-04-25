import { createStackNavigator, createAppContainer } from "react-navigation";
import TasksList from "../screens/TasksList";
import TasksCategories from "../screens/TasksCategories";
import { colors } from "../theme";
import NewTodo from "../screens/NewTodo";

const MainStack = createStackNavigator(
  {
    TasksCategories: {
      screen: TasksCategories
    },
    TasksList: {
      screen: TasksList
    }
  },
  {
    initialRouteName: 'TasksCategories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.background,
        height: 80,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: colors.white,
        textAlign: 'left',
        width: '100%',
        paddingLeft: 16,
        fontSize: 23
      },
      headerTintColor: colors.white
    }
  }
);

const ModalNavigator = createStackNavigator({
  Main: {
    screen: MainStack,
  },
  NewTodo: {
    screen: NewTodo
  }
}, {
  mode: 'modal',
  headerMode: 'none',
  transparentCard: true,
})

export default createAppContainer(ModalNavigator);
