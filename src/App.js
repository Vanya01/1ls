import './App.css';
import './User/User.service';
import './Users/Users';
import {Users} from "./Users/Users";
import {Post} from "./Post/Post";
import {Comment} from "./Comment/Comment";

function App() {
    return (<div>
            <Users/>
            <Post/>
            <Comment/>
        </div>
    )
}
export default App;
