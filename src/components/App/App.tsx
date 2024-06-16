import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
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
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </main>
    </div>
  );
};

export default App;
