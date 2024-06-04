import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <MainHeader title="IsayArt" />
      <NavigationMenu />
      <Outlet />
    </div>
  );
};

export default App;
