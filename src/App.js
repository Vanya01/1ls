import {Users} from "./HW6/Components/Users";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";

export default function App() {
    return(
      <Router>
          <div>
              <Link to={'/users'}/>
          </div>

          <div>
              <Route path={'/users'} component={Users}/>
          </div>
      </Router>
    );
}