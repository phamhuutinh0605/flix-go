import React from "react";
import { Route } from "react-router-dom";
import NavbarDashboard from "../_components/NavbarDashboard";

export default function DashboardPage({exact, path, component}) {
  return (
    <>
    <div style={{
        blackgroundColor: "white", minHeight: "100vh"
      }}><NavbarDashboard/></div>
      
      <Route exact={exact} path={path} component={component}/>
    </>
      
  );
}
