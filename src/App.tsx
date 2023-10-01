import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from "./store";
import TagValidatorForm from "./forms/TagValidatorForm";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <TagValidatorForm />
        </header>
      </div>
    </Provider>
  );
}

export default App;
