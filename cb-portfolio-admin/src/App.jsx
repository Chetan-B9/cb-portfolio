import router from "./Router.jsx";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    // wraping the application and provide routing context to all its child components
    <RouterProvider router={router} />
  );
}

export default App;
