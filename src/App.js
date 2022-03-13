import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import {NotificationServicesProvider} from './services/notification/NotificationServices';

function App() {
  return (
    
      <div className="App">
        <NotificationServicesProvider>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting="Hola Mundo!"/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting="Hola Mundo!"/>}/>
                  <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                  <Route path='/Cart' element={<Cart />}/>
                </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </NotificationServicesProvider>
      </div>

  );
}

export default App;
