import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDVoGvYVmnArwPXS71TJ95XWT2nOQIefS0',
      authDomain: 'burger-bar-55539.firebaseapp.com',
      databaseURL: 'https://burger-bar-55539.firebaseio.com',
      projectId: 'burger-bar-55539',
      storageBucket: 'burger-bar-55539.appspot.com',
      messagingSenderId: '635398903855'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
