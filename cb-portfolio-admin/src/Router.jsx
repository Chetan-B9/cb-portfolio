import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Add from "./Components/Add/Add";
import Dashboard from "./Components/Projects/Projects";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element = {<Layout />}>
            <Route index element = {<Dashboard />} />
            <Route path="add" element = {<Add />} />
            <Route path="update" element = {<Add />} />
        </Route>
    )
)

export default router;