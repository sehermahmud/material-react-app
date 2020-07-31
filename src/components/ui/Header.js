import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default function Header(props) {
  return (
    <AppBar style={{backgroundColor: 'rgb(245, 102, 131)'}}>
      <Toolbar>Arc Development</Toolbar>
    </AppBar>
  );
}
