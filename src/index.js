import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./componentes/layout/Layout";
import Inicio from "./componentes/views/Inicio";
import Item from "./componentes/item/Item";
import GlobalContext from "./context/GlobalContext";
import UserProvider from "./context/UserProvider";
import RequireAuth from './componentes/login/RequireAuth'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContext>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={ <Inicio />} />
              <Route path="/app">
                <Route index element={ <RequireAuth>
                  <App />
                </RequireAuth>
                } />
                <Route path="item/:id" element={ <RequireAuth> <Item /></RequireAuth>}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </GlobalContext>
  </React.StrictMode>
);
