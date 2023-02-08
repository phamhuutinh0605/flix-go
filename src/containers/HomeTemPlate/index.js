import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class HomeTemPlate extends Component {
  render() {
    const {path, exact, component} = this.props;
    return <>
      <Route path={path} exact={exact} component={component}/>
    </>
  }
}
