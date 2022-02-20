import { useEffect, useState  } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { mostrarProductosPorCategoria } from '../../mock/products'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (true);
    const { categoryId } = useParams ();

    useEffect(() => {
        mostrarProductosPorCategoria(categoryId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })
        .finally (()=>{
            setLoading(false);
        })
    }, [categoryId]);
    

    return (
        <>
            <h1>{greeting}</h1>
            {loading ? (
                <h3>Cargando Productos...</h3> 
            ):(
                    <ItemList products={products}/>
            )}
        </>
    );
};

export default ItemListContainer 