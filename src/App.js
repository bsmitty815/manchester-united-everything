
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import PlayerProfile from "./components/PlayerProfile"
import Header from "./components/Header"
import CurrentStats from "./components/CurrentStats"
import AllTimeStats from "./components/AllTimeStats"
import { Switch, Route } from "react-router-dom"
import PlayerQuotes from "./components/PlayerQuotes"
import CurrentFixtures from "./components/CurrentFixtures"

function App() {
  return (
    <div className="body">
            <header className="header">
              <Header />
            </header>
                <div className="navBar">
                <NavBar />
                </div>
                <div>
                <Switch>

                        <Route path="/PlayerProfile">
                            <PlayerProfile />
                        </Route>
                        <Route path="/CurrentStats">
                            <CurrentStats />
                        </Route>
                        <Route path="/CurrentFixtures">
                            <CurrentFixtures />
                        </Route>
                        <Route path="/PlayerQuotes">
                            <PlayerQuotes />
                        </Route>
                        <Route path="/AllTimeStats">
                            <AllTimeStats />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                  </Switch>
                </div>

            
    </div>
  );
}

export default App;
