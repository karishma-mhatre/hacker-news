import React from 'react';
import './App.css';
import reducer from './reducers/articleList'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ArticleList from './components/ArticleList/ArticleList';
import {Provider} from 'react-redux';
import Header from './components/Header/Header'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <ArticleList />
      </div>
    </Provider>
  );
}

export default App;
