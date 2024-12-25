import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <h1> React with money kio mio</h1>
        <hr />
        <hr />
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
