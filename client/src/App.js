import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout/RootLayout";
import Home from "./pages/home";
import "./styles/global.css";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";

const GalleryPage = lazy(() => import("./pages/gallery/gallery"));
const ContactPage = lazy(() => import("./pages/contact/contact"));

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <GalleryPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
