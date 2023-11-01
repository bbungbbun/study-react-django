import React, { Component } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
				<Route path="/join" element={<RoomJoinPage/>} />
      </Routes>
    )
  }
}