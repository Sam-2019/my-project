import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Teams from "./pages/teams";
import Gallery from "./pages/gallery";
import FAQ from "./pages/faq";
import ErrorPage from "./pages/404";

const router = createBrowserRouter([
 {
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
 },
 {
  path: "about",
  element: <About />,
 },
 {
  path: "contact",
  element: <Contact />,
 },
//  {
//   path: "team",
//   element: <Teams />,
//  },
 {
  path: "gallery",
  element: <Gallery />,
 },
 {
  path: "faqs",
  element: <FAQ />,
 },
]);

function App() {
 return (
  <div>
   <Navigation />
   <RouterProvider router={router} />
   <Footer />
  </div>
 );
}

export default App;
