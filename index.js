class pluginIndex {
  initialize(callback) {
    FormItInterface.Initialize(callback);
  }

  getCookie(cookieName)
  {
    let cookie = window.localStorage.getItem(cookieName);        
    if(cookie === null)
    {
      FormItInterface.CallMethod("FormitPlugin.ShowDialog");
      let id = setInterval(() => {
        // try to retrieve cookie each 5s, and close popup in case of success
        let cookie = window.localStorage.getItem(cookieName);
        if(cookie === null)
        {
          clearInterval(id);
        }
        else
        {
          debugger
        }
      }, 500);
    }
    return cookie;
  }
}
export default pluginIndex


