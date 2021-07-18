
import './App.css';
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import PlayerProfile from "./components/PlayerProfile"
import Header from "./components/Header"
import CurrentStats from "./components/CurrentStats"
import AllTimeStats from "./components/AllTimeStats"
import { Switch, Route } from "react-router-dom"
import PlayerQuotes from "./components/PlayerQuotes"

function App() {
  return (
    <div className="App">
            <header className="header">
              <Header />
            </header>
            <table>
              <tr>
                <th className="navBar">
                <NavBar />
                </th>
                <th>
                <Switch>
                        <Route path="/Home">
                            <Home />
                        </Route>
                        <Route path="/PlayerProfile">
                            <PlayerProfile />
                        </Route>
                        <Route path="/CurrentStats">
                            <CurrentStats />
                        </Route>
                        <Route path="/PlayerQuotes">
                            <PlayerQuotes />
                        </Route>
                        <Route path="/AllTimeStats">
                            <AllTimeStats />
                        </Route>
                  </Switch>
                </th>
              </tr>
            </table>
            
    </div>
  );
}

export default App;
