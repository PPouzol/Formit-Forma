import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import * as ReactDOMServer from 'react-dom/server';

import IUser from './types/user.type';
import './App.css'

import pluginIndex from "../index.js";

import Login from "./components/login.component";
import FormitForma from "./components/forma.component";

type Props = {};

type State = {
  currentUser: IUser | undefined
}

var loginContent: JSX.Element = <Login />;
var loggedInContent: JSX.Element = <FormitForma />;

class App extends Component<Props, State> {
  constructor(props: Props) {
// class App extends Component {
//     constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    let index = new pluginIndex();
    index.initialize(() => {
      debugger
      let appContainer = document.querySelector("#app");
      let index = new pluginIndex();
      let cookie = index.getCookie('ajs_user_id');
      let node: JSX.Element | null = null;
      if(cookie === null)
      {
        // add nothing, dialog box will be displayed to login
        node = <></>
      }
      else
      {
        node = loggedInContent;
      }
      if(node !== null)
      {
        let nodeStr = ReactDOMServer.renderToString(node!);
        appContainer!.innerHTML = nodeStr;
      }
    });
  }

  render() {
    return (
      <div className="container mt-3">
        <div id="app">
          buildPageAccordingToCookie()        
        </div>
      </div>);
  }
}

export default App
