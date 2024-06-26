import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Root from "./layouts/Root";
import Products from "./pages/Products/Products";
import rootReducer from "./reducers/index";
import Auth from "./component/Auth/Auth";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Home from "./pages/Home/Home";
import RequireAuth from "./component/Auth/RequireAuth";
import Profile from "./pages/Profile/Profile";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      {
        path: "products/search",
        element: <Products />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <GoogleOAuthProvider clientId="348710026541-642hkvh9nkvgnpsh297r9cvc10s2nav6.apps.googleusercontent.com">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
