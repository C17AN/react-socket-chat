import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";
import "./style/global.css";

function App() {
  const [userName, setUserName] = useState();
  const [roomName, setRoomName] = useState();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home
              userName={userName}
              roomName={roomName}
              setUserName={setUserName}
              setRoomName={setRoomName}
            />
          </Route>
          <Route
            path="/chat"
            exact
            render={() => <Chat userName={userName} roomName={roomName} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
