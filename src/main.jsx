import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Front/Header.jsx";
import Footer from "./components/Front/Footer.jsx";
import { Notes } from "./components/Pages/Notes.jsx";
import { Contribute } from "./components/Pages/Contribute.jsx";
import { Home } from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import Contact from "./components/Pages/Contact.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Video from "./components/Pages/Video.jsx";
import VideoPlayer from "./components/Pages/VideoPlayer.jsx";
import Playlist from "./components/Pages/Playlist.jsx";
import PdfViewer from "./components/Pages/PdfViewer.jsx";
import { Dasboard } from "./components/Pages/Dasboard.jsx";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notes/:name",
        element: <Notes />,
      },
      {
        path: "/dashboard",
        element: <Dasboard />,
      },
      {
        path: "/contribute",
        element: <Contribute />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/videoplayer",
        element: <VideoPlayer />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/PdfViewer/",
        element: <PdfViewer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-3l8dohgx7o1rw8wz.us.auth0.com"
    clientId="QbsglMGV8xRj4fphIpeTsUyOhFMXjJBd"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={appRouter} />
  </Auth0Provider>
);
