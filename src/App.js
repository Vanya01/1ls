import {Users} from "./HW6/Components/Users";
import Posts from "./HW6/Components/Posts/About/Posts/Posts";

import {
    BrowserRouter as Router,
    Route,
    Link, Switch,
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <>
                <div>
                    <Link to={'/users'}>Users page</Link>
                    <br/>
                    <Link to={'/posts'}>Posts page</Link>

                </div>

                <div>
                    <Switch>
                        <Route path={'/users'} component={Users}/>
                        <Route path={'/posts'} component={Posts}/>
                    </Switch>
                </div>
            </>
        </Router>
    );
}