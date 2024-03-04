import React, { useState } from "react";
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
  const [dark, Setdark] = useState(false);
  return (
    <div
      className={
        dark &&
        "dark: transition-colors duration-700 ease-in-out bg-[#202124] text-white "
      }
    >
      <Header />
      <Outlet context={[dark]} />
      <button
        className={
          dark
            ? `fixed z-20 bottom-16 right-10 w-10 h-10 rounded-full bg-white text-black p-1 `
            : "fixed z-20 bottom-16 right-10 w-10 h-10 rounded-full bg-black text-white p-1 "
        }
        onClick={() => Setdark(!dark)}
      >
        {/* {dark ? "wte" : "drk"} */}
        {dark ? (
          <i class="fa-solid fa-sun"></i>
        ) : (
          <i class="fa-solid fa-moon"></i>
        )}
      </button>
      <Footer />
    </div>
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
        path: "/video/:id",
        element: <Video />,
      },
      {
        path: "/videoplayer",
        element: <VideoPlayer />,
      },
      {
        path: "/playlist/:id",
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
