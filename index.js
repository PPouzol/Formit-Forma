class pluginIndex {
  getCookie(cookieName)
  {
    const nameLenPlus = (cookieName.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${cookieName}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }

  openDialog(fromWeb)
  {
    let loginDialog = null;
    if(fromWeb)
    {
      loginDialog = window.open("https://app.spacemaker.ai/auth/login?rd=https%3A%2F%2Fapp.spacemaker.ai%2Fprojects", "_blank", "width= 500px, height=500px");
    }
    else
    {
      FormItInterface.CallMethod("FormitPlugin.ShowDialog");
    }

    let id = setInterval(() => {
      // try to retrieve cookie each 1s, and close popup in case of success
      let cookie = this.getCookie('ajs_user_id');
      if(cookie !== null)
      {
        clearInterval(id);
        if(fromWeb && loginDialog !== null)
        {
          loginDialog.close();
        } 
        else if(!fromWeb)
        {
          FormItInterface.CallMethod("FormitPlugin.CloseDialog");
        }
      }
    }, 1000);
  }
}
export default pluginIndex


