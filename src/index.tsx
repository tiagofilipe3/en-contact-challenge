import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import ptBR from "./i18n/pt-BR";

import App from "./App";
import configureStore from "./config/configStore";

const store = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="pt-BR" defaultLocale="pt-BR" messages={ptBR}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
