'use strict';
import { Component } from "react";
import pluginIndex from "../../index.js";

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
    new pluginIndex().accessSpacemaker();
    return null;
  }
  
  render() {
    return <></>;
  }
}
