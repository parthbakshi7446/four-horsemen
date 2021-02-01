
import React, { useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import firebase from "./firebase";
import { createBrowserHistory } from "history";
import { makeStyles } from "@material-ui/core/styles";

let ps;

const hist = createBrowserHistory();
// const { ReactComponent } = require("*.svg");
const { ImportContacts } = require("@material-ui/icons");
const useStyles = makeStyles(styles);

export default function App() {
    useEffect(()=>{
        console.log("here1")
        const messaging = firebase.messaging();
        messaging.requestPermission().then(()=>{
        console.log("here2")
        return messaging.getToken()
        }).then(token=>{
        console.log("here3")
        console.log("token:",token);
        }).catch((err)=>{
        console.log("error:",err);
        })
    },[])
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/rtl" component={RTL} />
                {/* <Redirect from="/" to="/admin/dashboard" /> */}
            </Switch>
        </Router>
    )
}
