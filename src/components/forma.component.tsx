import { Component } from "react";

type Props = {};

type State = {
  redirect: string | null,
  message: string,
  loading: boolean
};
export default class FormitForma extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentWillUnmount() {
    window.location.reload();
  }

  handleFetch() {
    this.setState({
      message: "",
      loading: true
    });
  }
  
  handlePush() {
    this.setState({
      message: "",
      loading: true
    });
  }

  render() {
    const { loading, message } = this.state;

    const initialValues = {
      authToken: ""
    };

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <h3>Forma component</h3>
        </div>
      </div>
    );
  }
}
