import { Component } from "react";
import formitFormaService from "../services/formit-forma.service";

type Props = {};

type State = {
  loggedIn: boolean
};

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      loggedIn: false
    };
  }

  static login(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
    formitFormaService.accessSpacemaker(false);
    return null;
  }
  
  render() {
    return <></>;
  }
}
