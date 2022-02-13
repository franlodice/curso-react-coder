import { useEffect, useState  } from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount.js/ItemCount'
import ItemList from '../ItemList/ItemList'
import { mostrarProductos } from '../../mock/products'


const ItemListContainer = ({greeting}) => {
    const clickOnAdd = (totalCount) => {
        if (totalCount>0) {
            console.log(`Se agregaron ${totalCount} productos al carrito`)
        } else {
            console.log ('No se han agregado productos')
        } 
        
    }
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (true);

    useEffect(()=>{
        mostrarProductos
        .then((resolve)=>{
            setProducts(resolve);
        })
        .catch ((error)=>{
            alert(error);
        })
        .finally (()=>{
            setLoading(false);
        });
    }, []);
    
    

    return (
        <>
            <h1>{greeting}</h1>
            {loading ? (
                <h3>Cargando Productos...</h3> 
            ):(
                <>
                    <ItemList products={products}/>
                </>
            )}
            <ItemCount stock={10} initial={1} onAdd={clickOnAdd}/>
        </>
    );
};

export default ItemListContainer 