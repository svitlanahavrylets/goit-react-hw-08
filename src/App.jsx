import "./App.css";

import { lazy, Suspense, useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <footer></footer>
      </Suspense>
    </div>
  );
}

export default App;
