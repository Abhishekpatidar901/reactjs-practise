import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { store } from "./redux/store";

import App from "./App";
import {BrowserRouter, Routes} from "react-router-dom";
import App from "./App";
function index (){



    return(
<Provider store={store}>
<BrowserRouter>
<Routes>
<Route path="/" element={<App/>} />


</Routes>

</BrowserRouter>
</Provider>

    );
}