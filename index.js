class pluginIndex {
  getCookie(cookieName)
  {
    let cookie = window.localStorage.getItem(cookieName);       
    return cookie;
  }

  openDialog(fromWeb)
  {
    if(fromWeb)
    {
      let loginDialog = window.open("https://app.spacemaker.ai/auth/login?rd=https%3A%2F%2Fapp.spacemaker.ai%2Fprojects", "_blank", "width= 500px, height=500px");
      
      let id = setInterval(() => {
        // try to retrieve cookie each 5s, and close popup in case of success
        let cookie = window.localStorage.getItem('ajs_user_id');
        if(cookie === null)
        {
          clearInterval(id);
        }
        else
        {
          //document.getElementsByClassName('ui-dialog')[0].remove()
          if(loginDialog !== null)
          {
            loginDialog.close();
          } 
        }
      }, 500);
    }
    else
    {
      FormItInterface.CallMethod("FormitPlugin.ShowDialog");
    }
  }
}
export default pluginIndex


