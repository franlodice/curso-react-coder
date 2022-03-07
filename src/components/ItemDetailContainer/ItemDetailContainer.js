import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';
import {getDoc, doc} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase';

const ItemDetailContainer = () => {   
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState (true);
    const { productId } = useParams ()

    useEffect(() => {
        
        setLoading(true)

        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef).then(response =>{
            const product = { id: response.id, ...response.data() }
            setProduct(product)
        }).finally(() =>{
            setLoading (false)
        })
        return (() => {
            setProduct ()
        })
    }, [productId]);

    /*useEffect(() => {
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
    }, [productId]);*/
    
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