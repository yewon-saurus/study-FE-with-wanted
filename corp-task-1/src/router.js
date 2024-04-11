import { createBrowserRouter } from "react-router-dom";

import List from "./pages/list/List";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <List />
    },
    {
        path: "/detail/:num",
        element: <Detail />
    },
]);

export default router;