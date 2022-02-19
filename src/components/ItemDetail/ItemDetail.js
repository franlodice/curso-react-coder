import './ItemDetail.css'

const ItemDetail = ({product}) => {
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
                
            </footer>
        </article>
    )
}

export default ItemDetail