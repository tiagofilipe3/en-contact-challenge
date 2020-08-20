import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { IntlProvider } from "react-intl";

import App from "./App";
import ptBR from "./i18n/pt-BR";

ReactDOM.render(
  <IntlProvider locale="pt-BR" defaultLocale="pt-BR" messages={ptBR}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);
