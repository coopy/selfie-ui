/*global document:false*/

// TODO: Factor out "demo/" to be the actual App.
//  Boilerplate is for a standalone component, not a full-blown app.

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { SelfieUi } from "../src/index";

import initializeStore from '../src/store/init-store';
const store = initializeStore();

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <Provider store={store} key='provider'>
          <SelfieUi />
        </Provider>
      </div>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
