import Layout from "./layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Heart from "./pages/heart/heart";
import SinglePage from "./components/singlePage/SinglePage";
import Categories from "./components/categories/Categories";
function Routes() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/single-page/:id" element={<SinglePage />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    )
  );

  return (
    <div className="main">
      <RouterProvider router={routes} />
    </div>
  );
}

export default Routes;
