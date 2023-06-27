import React, { Fragment } from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../app/store";

const RootLayout = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </Provider>
    </Fragment>
  );
};

export default RootLayout;
