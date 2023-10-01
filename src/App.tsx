import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import TagValidatorForm from './forms/TagValidatorForm';

const App = () => {
  return (
    <Provider data-testid="store-provider" store={store}>
      <div className="app">
        <TagValidatorForm data-testid="tag-validator-form" />
      </div>
    </Provider>
  );
};

export default App;
