import Header from "./Components/header/Header";
import { Route ,Routes } from 'react-router-dom'; 
import Hero from "./Components/Pages/home/Hero";
import Movies from "./Components/Pages/movies/Movies";
import Series from "./Components/Pages/tv series/Series";
import Error404 from "./Components/Pages/erorr/Error404";
import Search from "./Components/Pages/searching/Search";
import MovieDetail from "./Components/Pages/Detail/MovieDetail";
import SeriesDetail from "./Components/Pages/Detail/SeriesDetail";
import Footer from "./Components/footer/Footer";

function App(){
    return (
      <div className="bg-black text-white font-sans">
        <Header />
        {/* <Footer /> */}
        <Routes >
          <Route path='/' element={<Hero />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/series' element={<Series />}/>
          <Route path='/Search' element={<Search />}/>
          <Route path='/movieDetail/:id' element={<MovieDetail />}/>
          <Route path='/seriesDetail/:id' element={<SeriesDetail />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
        <Footer />
      </div>
        
    )
}
export default App;