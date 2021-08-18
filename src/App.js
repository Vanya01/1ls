import './App.css';
import Users from "./one_page/users";
import Posts from "./one_page/posts";
import Comments from "./one_page/comments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function App() {
    return (

<Router>

    <div className={'App'}>
        <Link to={'/users'}>All users</Link>
        <br/>
        <Link to={'/posts'}> All posts of users</Link>
        <br/>
        <Link to={'/comments'}>All comments</Link>
        <br/>
     <Switch>
        <Route path={'/users'} component={Users}/>
        <Route path={'/posts'} component={Posts}/>
        <Route path={'/comments'} component={Comments}/>
     </Switch>

    </div>
</Router>

    )
}
export default App;
