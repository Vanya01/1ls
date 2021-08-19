import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {Cars} from "./one_page/Main";

function App() {
    return (
        <Router>
              <div className={'App'}>
                    <ul>
                        <li>
                 <Link to={'/home'}>Home</Link>
                        </li>
                      <li>
                  <Link to={'/plus'}>Plus</Link>
                      </li>
                   <li>
                  <Link to={'/minus'}>Minus</Link>
                   </li>
                    </ul>
                  <Switch>
                      <Route path={'/home'} render={(props)=><Cars param={props}/>}/>
                      <Route path={'/plus'} render={(props)=><Cars param={props}/>}/>
                      <Route path={'/minus'} render={(props)=><Cars param={props}/>}/>
                  </Switch>
              </div>
        </Router>
    )
}
export default App;
