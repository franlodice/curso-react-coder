import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { mostrarProducto } from '../../mock/products'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {   
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState (true);

    useEffect(()=>{
        mostrarProducto
        .then((resolve)=>{
            setProduct(resolve);
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
                {loading ? (
            <h4>Cargando Detalle...</h4> 
        ):(
            <div className="ItemDetailContainer">
            <ItemDetail product={product}/>
            </div>
        )}
        </>
    );
};

export default ItemDetailContainer