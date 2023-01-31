import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import Popup from "./component/Popup";
// import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div style={{backgroundColor:"red",height:"100%"}}><Popup /></div>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
