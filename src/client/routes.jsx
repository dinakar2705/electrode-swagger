import React from "react";
import { Route } from "react-router";
import Home from "./components/home";
import Spec from "./components/spec"

export const routes =
<Route >
    <Route path="/" component={ Home }/>
    <Route path="/spec" component={ Spec }/>
    </Route>;
