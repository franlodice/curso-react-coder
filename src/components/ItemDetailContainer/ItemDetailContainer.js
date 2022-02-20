import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { mostrarProducto } from '../../mock/products'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {   
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState (true);
    const { productId } = useParams ()


    useEffect(() => {
        mostrarProducto(productId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })
        .finally (()=>{
            setLoading(false);
        })
        return (() => {
            setProduct ()
        })
    }, [productId]);
    
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