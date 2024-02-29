import "./Style.css";
import "./components/pages/itemListContainer/ItemListContainer.css";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import "./components/common/ItemList.css";
import "./components/layout/navBar/NavBar.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/pages/cartCompra/Cart";
import "./components/pages/itemDetail/ItemDetail.css";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { NotFound } from "./components/pages/notFound/NotFound";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
