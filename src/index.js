import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from "@sentry/react";
import App from "./App";

Sentry.init({
  dsn: "https://localhost@sentry.io/3000"
});
const container = document.getElementById('main');
const root = createRoot(container);
root.render(<BrowserRouter><App /></BrowserRouter>);