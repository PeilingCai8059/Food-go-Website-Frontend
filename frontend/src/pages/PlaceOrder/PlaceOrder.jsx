import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Login from '../../components/Login/Login'

const PlaceOrder = () => {
  const {getTotal,showLogin,setShowlogin} = useContext(StoreContext)
  let deliveryFee = (getTotal() > 35 || getTotal() === 0 ? 0 : 5.99)

  return (
    <>
      {showLogin && <Login setShowlogin={setShowlogin} />}
   <div className='app'>
   <Navbar setShowlogin={setShowlogin} />
    <form  className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text"  placeholder='First name'/>
          <input type="text"  placeholder='Last name'/>
        </div>
        <input type="text"  placeholder='Email address'/>
        <input type="text"  placeholder='Street'/>
        <div className="multi-fields">
          <input type="text"  placeholder='City'/>
          <input type="text"  placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text"  placeholder='Zip code'/>
          <input type="text"  placeholder='Country'/>
        </div>
        <input type="text"  placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-detail">
                <p>Subtotal</p>
                <p>${getTotal()}</p>
              </div>
              <div className="cart-total-detail">
                <p>Delivery Fee</p>
                <p>${deliveryFee}</p>
              </div>
              <hr />
              <div className="cart-total-detail">
                <p>Total</p>
                <p>${(getTotal() + deliveryFee).toFixed(2)}</p>
              </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>

   </div>
    <Footer />
 </>

  )
}

export default PlaceOrder