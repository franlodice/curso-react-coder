import './ItemListContainer.css'
import ItemCount from '../ItemCount.js/ItemCount'

const ItemListContainer = ({greeting}) => {
    const clickOnAdd = (totalCount) => {
        if (totalCount>0) {
            console.log(`Se agregaron ${totalCount} productos al carrito`)
        } else {
            console.log ('No se han agregado productos')
        } 
        
    }

    return (
        <>
        <h1>{greeting}</h1>
        <ItemCount stock={10} initial={1} onAdd={clickOnAdd}/>
        </>
    )
}

export default ItemListContainer 