// redux/provider.jsx
"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import CartHydrator from "./CartHydrator";

export default function ReduxProvider({ children }) {
  return(
    <>
      <Provider store={store}>
        <CartHydrator />
        {children}
      </Provider>
    </>
  )

}