import { Provider } from "react-redux";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return;
  <Provider store={store}>
    <Component {...pageProps} />;
  </Provider>;
}

export default MyApp;