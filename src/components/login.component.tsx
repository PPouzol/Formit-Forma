import { Component } from "react";
import formitFormaService from "../services/formit-forma.service";

type Props = {
};

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

  static login(region): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
    formitFormaService.accessSpacemaker(false, region);
    return null;
  }
  
  render() {
    return <></>;
  }
}
