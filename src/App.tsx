import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import './App.css'
import AuthService from "./services/auth.service";
import IUser from './types/user.type';

import Login from "./components/login.component";

type Props = {};

type State = {
  currentUser: IUser | undefined
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentUser: undefined,
    };
  }

  logOut() {
    AuthService.logout();
    this.setState({
      currentUser: undefined,
    });
  }
  
  render() {
    const { currentUser } = this.state;

    return (
        <div className="container mt-3">
          <div id="toto"></div>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
    );
  }
}

export default App
