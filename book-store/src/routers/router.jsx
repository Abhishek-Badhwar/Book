import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import About from "../components/About/About";
import Blogs from "../components/Blogs/Blogs";
import Singlebook from "../components/Singlebook/Singlebook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBooks from "../Dashboard/UploadBooks";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/", element: <Home />,
    },
    { path: "/shop", element: <Shop /> },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blogs /> },
    { path: "/book/:id", element: <Singlebook />, loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`) },
    ]
  },
  {
    path: "/admin/dashboard", element: <DashboardLayout />,
    children: [
      { path: "/admin/dashboard", element: <Dashboard /> },
      { path: "/admin/dashboard/upload", element: <UploadBooks /> },
      { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      { path: "/admin/dashboard/edit-books/:id", element: <EditBooks />,
    loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`) },

    ]
  },
])

export default router;