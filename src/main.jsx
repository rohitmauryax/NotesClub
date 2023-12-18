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
<<<<<<< HEAD
import Video from "./components/Pages/Video.jsx";
import VideoPlayer from "./components/Pages/VideoPlayer.jsx";
import Playlist from "./components/Pages/Playlist.jsx";
=======
import PdfViewer from "./components/Pages/PdfViewer.jsx";
>>>>>>> dbbadb3182e49adc02b4bd4ef61c51a111432c81

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
<<<<<<< HEAD
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
=======
        path: "/PdfViewer/",
        element: <PdfViewer />,
>>>>>>> dbbadb3182e49adc02b4bd4ef61c51a111432c81
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-0zl2yx0frsm3mmws.us.auth0.com"
    clientId="lGjaeq4q0bRjkoqmfjmqxU2pEUd8XnX3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={appRouter} />
  </Auth0Provider>
);
