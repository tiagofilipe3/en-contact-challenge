import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import MailPage from "../MailPage";

export default (
  <>
    <Route exact path="/">
      <LoginPage />
    </Route>
    <Route path="/mail">
      <MailPage />
    </Route>
  </>
);
