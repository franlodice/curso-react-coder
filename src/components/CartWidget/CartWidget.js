import './CartWidget.css'
const CartWidget = ({colorText}) => {

    return (
        <div className='zoomMenu cartWidget' style={{color: colorText}}>
            <a href="#">
                <img src={"../images/car_icon.svg"} alt="Cart" className='cartIcon'/>
            </a>
            <p>1</p>
        </div>
    )
}
export default CartWidget