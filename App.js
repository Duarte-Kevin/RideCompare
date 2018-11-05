import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import App from './views/App';
import store from './store/index'

export default class AppWithStore extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}
