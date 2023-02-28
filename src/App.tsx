import { Component, createRef } from "react";
import * as ReactDOMServer from 'react-dom/server';

import IUser from './types/user.type';
import './App.css'

import pluginIndex from "../index.js";

import Login from "./components/login.component";
import FormitForma from "./components/forma.component";

type Props = {}

class App extends Component<Props> {
  formitFormaComponent: any;

  constructor(props: Props) {
    super(props);
    this.formitFormaComponent = createRef();
  }

  componentDidMount() {
    this.compileFromCookie();
      
    let loginButton = document.getElementById("LoginButton");
    if(loginButton !== null)
    {
      loginButton.onclick = Login.login;
    }      
  }

  compileFromCookie(): void {
    let index = new pluginIndex();
    let cookie = index.getCookie('ajs_user_id');
    let node: JSX.Element | null = null;
    if(cookie === null)
    {
      // add nothing, dialog box will be displayed to login
      node = <div id="LoginControls" className="">
                <button id="LoginButton" className="button is-link">
                  <span>Login</span>
                  <i className="fab fa-github fa-lg"></i>
                </button>
              </div>;
    }
    else
    {
      node = <FormitForma ref={this.formitFormaComponent}/>;
    }

    if(node !== null)
    {
      let nodeStr = ReactDOMServer.renderToString(node!);
      let appContainer = document.querySelector("#app");
      appContainer!.innerHTML = nodeStr;
    }
  }

  render() {
    let content = 
      <div id="PluginWrapper">
        <div id='PluginContainer'>
          <h1 className="title">Formit-Forma</h1>
          <div id="AppControls">
            <div className="container mt-3">
              <div id="app">
              </div>
            </div>
          </div>
          <div id="NoAccess" hidden>
            <div>
                <div className="alertIcon"></div>
            </div>
            <div>
                It looks like your web browser is in private or incognito mode. 
                Formit-Forma plugin needs to save data to the local storage, so it can only be used in standard browsing mode.
                <br/>
                <br/>
                To use Formit-Forma Plugin, please switch to standard browsing mode.
            </div>
          </div>
        </div>
      </div>;
    return content;
  }
}

export default App
