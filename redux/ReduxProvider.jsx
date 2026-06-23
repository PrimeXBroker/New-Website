"use client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "./store";
import { useEffect } from "react";

export default function ReduxProvider({ children }) {
  useEffect(() => {
    persistStore(store);
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
