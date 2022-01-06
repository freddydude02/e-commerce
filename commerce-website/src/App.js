import "./assets/styling/theme.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./containers/navBar";
import Grid from "./containers/Grid";
import SearchProvider from "./context/SearchTerm";
import ProductDataProvider from "./context/ProductData";
import CartDataProvider from "./context/CartData";
import ErrorPage from "./containers/ErrorPage";
import ProductPage from "./containers/ProductPage";
import CarouselDisplay from "./containers/Carousel/Carousel";
import Cart from "./containers/Cart";
{
    /* <Route
    path="*"
    element={<ErrorPage></ErrorPage>}
></Route> */
}

function App() {
    return (
        <div className="App">
            <Router>
                <CartDataProvider>
                    <ProductDataProvider>
                        <SearchProvider>
                            <NavBar></NavBar>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <CarouselDisplay></CarouselDisplay>
                                    }
                                ></Route>
                                <Route
                                    path="/all-products"
                                    element={<Grid></Grid>}
                                ></Route>
                                <Route
                                    path="/all-products/:params"
                                    element={<ProductPage></ProductPage>}
                                ></Route>
                                <Route
                                    path="/cart"
                                    element={<Cart></Cart>}
                                ></Route>
                            </Routes>
                        </SearchProvider>
                    </ProductDataProvider>
                </CartDataProvider>
            </Router>
        </div>
    );
}

export default App;
