import "./src/styles/global.css";
import { LocationContextProvider } from "./src/utils/wrapPageElement";

export const wrapPageElement = LocationContextProvider;

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash === "#contacts") {
    window.scroll({ top: document.body.clientHeight });
  }
};
