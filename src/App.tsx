import { useState, useEffect } from "react";
import './App.css'
import Login from "./components/login.component";
import FormItForma from "./components/forma.component";
import formitFormaService from "./services/formit-forma.service";
import FormaService from "./services/forma.service";

declare global {
  let FormItInterface: any;
  let FormItPlugin: any;
  let FormIt: any;
  let WSM: any;
}

function App() {
  const [content, setContent] = useState(<></>)

  function handleRegionSelectChange(sender) {
    let regions = document.getElementsByClassName("region")
    Array.prototype.forEach.call(regions, function(el) {
      el.classList.remove("chosen");
      if(el.id === sender.currentTarget.id) {
        el.classList.add("chosen");
        setRegion(sender.currentTarget.id);
      }
    });
  }

  const [region, setRegion] = useState<string>("eu")

  
function loginClick() {  
  Login.login(region);
}

function compileFromCookie() {
  let loggedIn = window.location.href.indexOf("region=") > -1;
  let cookie = formitFormaService.getCookie('ajs_user_id');
  let node: JSX.Element | null = null;
  loggedIn = loggedIn || cookie !== null;
  if(!loggedIn)
  {
    // add nothing, dialog box will be displayed to login
    node = <div id="LoginControls" className="">
              <h4>Start plugin to select a project</h4>
              <button id="LoginButton" className="button is-link" onClick={loginClick}>
                <span>Start plugin</span>
                <i className="fab fa-github fa-lg"></i>
              </button>
            </div>;
  }
  else
  {
    // retrieve region from context url
    if(FormaService.API_URL === '')
    {
      let hrefSplit = window.location.href.split("region=");
      if(hrefSplit.length > 1)
      {
        FormaService.setRegionUrl(hrefSplit[1]);
        
        if(FormaService.API_URL) {
          const script = document.createElement('script');

          script.src = `${FormaService.API_URL}/design-system/v2/weave/components/dropdown/weave-select.js`;
          script.async = true;
          script.type = "module";

          document.body.appendChild(script);
        }
      }
    }
    node = <FormItForma />;
  }

  return { loggedIn, node };
}

  function handleChangeRegion() {
    formitFormaService.leaveSpacemaker();
  }

  useEffect(() => { 
    let logContent = compileFromCookie();
    if(logContent !== null)
    {
      setContent(logContent.node!)
    }
  }, [])

  return (
      <div id="PluginWrapper">
        <div id='PluginContainer'>
          <div id="region-selector">
            <label id="us" className="region" onClick={handleRegionSelectChange.bind(this)}>US</label>
            <label id="eu" className="region chosen" onClick={handleRegionSelectChange.bind(this)}>EU</label>
            <label onClick={handleChangeRegion.bind(this)}>Change region</label>
          </div>
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
                FormIt-Forma plugin needs to save data to the local storage, so it can only be used in standard browsing mode.
                <br/>
                <br/>
                To use FormIt-Forma Plugin, please switch to standard browsing mode.
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
