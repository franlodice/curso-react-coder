import { useContext, useState, useRef } from 'react';
import './Cart.css'
import CartContext   from '../../context/CartContext';
import Togglable from '../Togglable/Togglable'
import ContactForm from '../ContactForm/ContactForm'
import ItemCart from '../ItemCart/ItemCart';
import {Link} from 'react-router-dom';
import { writeBatch, getDocs, collection, addDoc, Timestamp, where, query, documentId } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices';



const Cart = () => {

    const { cart, getTotal, cleaningCart, removeItem } = useContext(CartContext);

    const [processingOrder, setProcessingOrder] = useState(false)

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const contactFormRef = useRef()

    const setNotification = useNotificationServices()

    const confirmOrder = () => {
        if(contact.phone !== '' && contact.email !== '' && contact.name !== '') {
            setProcessingOrder(true)

            const objOrder = {
                buyer: contact,
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(firestoreDb)
            
            const outOfStock = []

            const ids = objOrder.items.map(i => i.id)

            getDocs(query(collection(firestoreDb, 'products'),where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach((docSnapshot) => {
                        if(docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).quantity) {
                            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).quantity})
                        } else {
                            outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => { 
                            batch.commit()
                            cleaningCart()
                            setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                        })
                    } else {
                        outOfStock.forEach(prod => {
                            setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                            removeItem(prod.id)
                        })    
                    }               
                }).catch((error) => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })

        } else {
             setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }

    if(processingOrder) {
        return (
        <h1>Procesando orden, por favor espere</h1>
        )
    }

    if(cart.length === 0) {
        return (
            <div>
                <h1>Cart</h1>
                <h2>No hay productos en el carrito</h2>
                <Link to={'/'}> Ver Productos </Link>
            </div>
        )
    }

    return (
        <>
            <h1>Cart</h1>

            <div className="cleaningDiv">
                <button className="cleanButton" onClick={()=> cleaningCart()}>Vaciar Carrito</button>
            </div>

            <div className="cart">
                {
                    cart.map (product => {
                        return (
                            <ItemCart key={product.id} {...product}></ItemCart>
                        )
                    }
                        
                )}
            </div>

            <h2>Total: ${getTotal()}</h2>
            
            <div>

                {
                    (contact.phone !== '' && contact.email !== '' && contact.name !== '') &&
                    
                        <div>
                            <h4>Nombre: {contact.name}</h4>
                            <h4>Telefono: {contact.phone}</h4>
                            <h4>Email: {contact.email}</h4>
                        </div>    
                }
                
                <Togglable buttonLabelShow={
                            (contact.phone !== '' && contact.email !== '' && contact.name !== '') 
                                ? 'Editar contacto' 
                                : 'Agregar contacto'
                            } 
                            ref={contactFormRef}>
                    <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                </Togglable>
                
                <button onClick={() => confirmOrder()} className="mainButton3">CONFIRMAR COMPRA</button>
            </div>            
        </>
    );
};

export default Cart;