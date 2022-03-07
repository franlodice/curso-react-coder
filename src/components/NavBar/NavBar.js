import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'


const NavBar = () => {

  const [categories, setCategories] = useState([])

  const { cart } = useContext (CartContext)

    useEffect(()=>{
      getDocs(collection(firestoreDb, 'categories')).then(response =>{
      const categories = response.docs.map(cat =>{
        return { id: cat.id, ...cat.data()}
      })
      setCategories(categories)
    })

}, [])

    return (
      <nav className='NavBar'>
        <NavLink to={'/'}><img src={"./images/epaamarillo_simple.svg"} alt="Logotipo EPA" className='logoNav zoomMenu'/></NavLink>
        <div className="categories">
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'categorieSelected zoomMenu' : 'Option zoomMenu'
          }>{cat.description}</NavLink>)}
        </div>
        <div>
          {cart.length > 0 && <CartWidget colorText='white'/>}
        </div>
          
      </nav>
    )
}

export default NavBar