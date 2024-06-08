import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainHeader from "../MainHeader/MainHeader";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <MainHeader title="IsayArt" />
      <NavigationMenu />
      <main className="main-content">
        <Outlet />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
