import { Route, Switch, Link } from "wouter";
import classes from "./App.module.scss";
import Elira from "./pages/Elira";
import Finana from "./pages/Finana";
import Pomu from "./pages/Pomu";

export default function App() {
    return (
        <div className={classes.container}>
            <nav>
                <Link className={classes.link} to="/Finana">
                    To Finana
                </Link>
                <Link className={classes.link} to="/Pomu">
                    To Pomu
                </Link>
                <Link className={classes.link} to="/Elira">
                    To Elira
                </Link>
            </nav>
            <Switch>
                <Route path="/Elira">
                    <Elira />
                </Route>
                <Route path="/Finana">
                    <Finana></Finana>
                </Route>
                <Route path="/Pomu">
                    <Pomu></Pomu>
                </Route>
                <Route>
                    <div>Whomst?</div>
                </Route>
            </Switch>
        </div>
    );
}
