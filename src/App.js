import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

/* 
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

this was the way to create react element using core react

*/

/*

const jsxHeading = <h1 id="heading">Hello World from JSX!</h1>;
This is way to create react element using JSX 
if u console any of them jsxHeading or heading both will be object containing same things so therefore they are same, exactly same just the syntax is different 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

*/

/* REACT COMPONENT

const HeadingComponent = () => {
  return (
    <h1 id="container" className="heading">
      Namaste React Functional Component
    </h1>
  );
};

root.render(<HeadingComponent />); // way of rendering functional component is also different.

THIS ALL WAS FOR UNDERSTANDING, NOW LETS BUILD THE PROJECT.
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />); // way of rendering functional component is also different.
// we used this when there were no routes, now we need routes so we need to provide the configuration we make above to the app to render thats done below.

root.render(<RouterProvider router={appRouter} />);
