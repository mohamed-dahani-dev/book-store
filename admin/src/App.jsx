import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./pages/login/Login";

const App = () => {
  // url of backend
  const url = "http://localhost:3000";

  // check if admin is logged in
  const [isLogin, setIsLogin] = useState(false);

  // name of admin
  const [adminName, setAdminName] = useState("Admin");

  return (
    <>
      {isLogin ? (
        <div className="py-5 px-10 max-sm:p-3">
          <Header setIsLogin={setIsLogin} adminName={adminName} />
          <Main url={url} />
        </div>
      ) : (
        <Login setIsLogin={setIsLogin} url={url} setAdminName={setAdminName} />
      )}
    </>
  );
};

export default App;
