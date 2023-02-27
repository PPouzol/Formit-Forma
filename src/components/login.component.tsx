import { Component } from "react";

type Props = {};

type State = {
  redirect: string | null
};
export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    debugger
    window.location.replace("https://app.spacemaker.ai/auth/login?rd=https%3A%2F%2Fapp.spacemaker.ai%2Fprojects");
  }

  componentWillUnmount() {
    window.location.reload();
  }
  
  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <h3>Login component</h3>
        </div>
      </div>
    );
  }
}
