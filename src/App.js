import logo from './logo.svg';
import './App.css';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import WishListCount from './WishListCount';
import WishMovie from './WishMovie';
function App() {
  return (
    <MovieProvider>
    <div className="App">
     <MovieList/>
     <WishListCount/>
     <WishMovie/>
    </div>
    </MovieProvider>
  );
}

export default App;
