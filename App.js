import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Header from './components/Header';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import requestReducer from './store/reducers/requests';
import RequestNavigator from './navigation/RequestNavigation';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk'

const rootReducer = combineReducers({
  requests: requestReducer
});

const store = createStore(rootReducer,
  applyMiddleware(thunk));

export default function App() {
  const [enteredTextCard, setEnteredText] = useState('');
  const [card, setCard] = useState([]);

  const InputHandler = enteredText => {
    setEnteredText(enteredText);
  }

  const addTextHandler = () => {
    setCard([...card,
    { key: Math.random().toString(), value: enteredTextCard }])
    console.log(card)
  }

  return (
    <Provider store={store}>
      <RequestNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  cardItem: {
    backgroundColor: "grey",
    padding: 10,
    borderColor: "black",
    borderWidth: 1
  }
});
