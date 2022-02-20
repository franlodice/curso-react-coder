import './ItemDetail.css'
import ItemCount from '../ItemCount.js/ItemCount'

const ItemDetail = ({product}) => {
    const clickOnAdd = (totalCount) => {
        if (totalCount>0) {
            console.log(`Se agregaron ${totalCount} productos al carrito`)
        } else {
            console.log ('No se han agregado productos')
        }
    } 
        
    return (
    <article className="CardItem">
            <picture>
                <img src={product?.img} alt={product?.name} className="ItemImg"/>
            </picture>
            <section>
                <h2 className="ItemHeader">
                    {product?.name}
                </h2>
                <p className="Info">
                    Categoria: {product?.category}
                </p>
                <p className="Info">
                    Descripción: {product?.description}
                </p>
                <p className="Info">
                    Precio: {product?.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
            <ItemCount stock={product?.stock} initial={1} onAdd={clickOnAdd}/>
            </footer>
        </article>
    )
}

export default ItemDetail