import { useState, useEffect } from "react";
import './App.css'
import * as ReactDOMServer from 'react-dom/server';
import Login from "./components/login.component";
import FormitFormaNew from "./components/forma.component";
import FormitForma from "./components/forma.component";
import formitFormaService from "./services/formit-forma.service";

declare global {
  let WSM: any;
  let FormIt: any;
  let FormItInterface: any;
  let FormitPlugin: any;
  interface window {
    activeProjectId,
    activeProposalId
  }
}

function compileFromCookie() {
  let loggedIn = window.location.href.indexOf("loggedIn=1") > -1;
  let cookie = formitFormaService.getCookie('ajs_user_id');
  let node: JSX.Element | null = null;
  loggedIn = loggedIn || cookie !== null;
  if(!loggedIn)
  {
    // add nothing, dialog box will be displayed to login
    node = <div id="LoginControls" className="">
              <h4>Start plugin to select a project</h4>
              <button id="LoginButton" className="button is-link">
                <span>Start plugin</span>
                <i className="fab fa-github fa-lg"></i>
              </button>
            </div>;
  }
  else
  {
    node = <FormitForma />;
  }

  return { loggedIn, node };
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [content, setContent] = useState(<></>)

  useEffect(() => { 
    let logContent = compileFromCookie();
    if(logContent !== null)
    {
      setLoggedIn(logContent.loggedIn);
      setContent(logContent.node!)
    }

    let loginButton = document.getElementById("LoginButton");
    if(loginButton !== null)
    {
      loginButton.onclick = Login.login;
    }  
  }, [])

  return (
      <div id="PluginWrapper">
        <div id='PluginContainer'>
          <h1 className="title">Formit-Forma</h1>
          <h3 className="title">Send data between FormIt and Forma</h3>
          <div id="AppControls">
            <div className="container mt-3">
              <div id="app">
                { content }
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
      </div>
  )
}

export default App
