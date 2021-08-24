import {Users} from "./HW6/Components/Users";
import Posts from "./HW6/Components/Posts/About/Posts/Posts";
import {
    BrowserRouter as Router,
    Route,
    Link, Switch,
} from "react-router-dom";
import './App.css'



export default function App() {
    return (
        <Router>
            <>
                <div className={'home_page'}>
                    <Link to={'/users'}>Users page</Link>
                    <br/>
                    <Link to={'/posts'}>Posts page</Link>

                </div>

                <div className={'mainer'}>
                    <Switch>
                        <Route path={'/users'} component={Users}/>
                        <Route path={'/posts'} component={Posts}/>
                    </Switch>
                </div>
            </>
        </Router>
    )
}