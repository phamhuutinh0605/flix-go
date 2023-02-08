import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
// import AuthPage from "./AuthPage";
import NavbarAdmin from "./_components/NavbarAdmin";

export default function AdminTemplate({ exact, path, component }) {
  if(!localStorage.getItem('Admin') && path !== "/auth") {
    return <Redirect to="/auth" />
  }
  return (
    <>
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        {path !== "/admin" && path !== "/auth" && path !== "/dash-board" && <NavbarAdmin />}

        <Route exact={exact} path={path} component={component} />
      </div>
    </>
  );
}
