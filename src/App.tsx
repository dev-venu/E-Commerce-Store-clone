import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import MainContent from "./Components/MainContent";
import ProductPage from "./Components/ProductPage";
import TopSellers from "./Components/TopSellers";
import PopularBlogs from "./Components/PopularBlogs";



const App = () => {
  return (
    <Router >
      <div className="flex h-screen">
        <SideBar/>
      

      <div className="rounded w-full flex justify-center flex-wrap">
        <Routes>
            <Route path="/" element= {<MainContent/>}/>
            <Route path="/product/:id" element= {<ProductPage/>}/>
        </Routes>

        <div className="flex justify-center items-center">
          <TopSellers/>
          <PopularBlogs/>
        </div> 

      </div>
      </div>
    </Router>
  )
}

export default App;