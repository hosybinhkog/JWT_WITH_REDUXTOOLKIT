import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const container = document.querySelector("#root");

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
