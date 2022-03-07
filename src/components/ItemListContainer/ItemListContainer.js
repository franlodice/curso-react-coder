import { useEffect, useState  } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import {firestoreDb} from '../../services/firebase/firebase'


const ItemListContainer = ({greeting}) => {   
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (true);
    const { categoryId } = useParams ();

    useEffect (() => {
        setLoading (true)

        const collectionRef = categoryId ?
            query(collection(firestoreDb, 'products'), where('category','==',categoryId)) :
            collection(firestoreDb, 'products')
        

        getDocs(collectionRef).then(querySnapshot =>{
            const products = querySnapshot.docs.map(doc =>{
                return { id: doc.id, ...doc.data() }
            })
            setProducts (products)
            
        }).finally(()=>{
            setLoading(false)
        })

        return (()=> {
            setProducts()
        })
    }, [categoryId])

    //useEffect(() => {
        //mostrarProductosPorCategoria(categoryId).then(item => {
        //    setProducts(item)
        //}).catch(err  => {
        //    console.log(err)
        //})
        //.finally (()=>{
        //    setLoading(false);
        //})
    //}, [categoryId]);
    

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