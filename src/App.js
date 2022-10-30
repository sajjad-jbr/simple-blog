import Header from "./components/Header";
import Content from "./components/Content";
import {useSelector} from "react-redux";
import {selectSignedIn} from "./features/userSlice";
import Blogs from "./components/Blogs";
import './assets/styles/App.css';
function App() {
    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div className="App">
            <Header/>
            <Content/>
            {isSignedIn && <Blogs/>}
        </div>
    );
}

export default App;
