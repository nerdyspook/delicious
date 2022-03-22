import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
};

export default App;
