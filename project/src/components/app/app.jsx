import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../../public/style/main.scss";
import { AppRoute } from "../../const";
import Main from '../main/main';
import NotFound from "../not-found/not-found";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path={AppRoute.CONVERTER}>
            <Main/>
          </Route>
          <Route>
            <NotFound />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;