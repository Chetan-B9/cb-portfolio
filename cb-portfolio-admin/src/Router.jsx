import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import Add from "./Components/Add/Add";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path="add" element = {<Add />} />
            <Route path="update" element = {<Add />} />
        </Route>
    )
)

export default router;