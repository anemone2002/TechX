import React from 'react'
import '../components/Order.css'
import phone2 from '../assets/images/phone2.webp'
import phone3 from '../assets/images/phone3.webp'
import phone4 from '../assets/images/phone4.webp'

const Order = () => {
  return (
    
      <div className='order-content'>
        <div className="pre-order-form">
          <h2>Shipping address</h2>
          <form>
            <div className="form-group">
              <input type="text" name='name' placeholder='First Name' />
            </div>
            <div className="form-group">
              <input type="email" name='email' placeholder='Email' />
            </div>
            <div className="form-group">
              <input type="text" name='address' placeholder='Country' />
            </div>
            <div className="form-group d-flex">
              <div className="mr-2" style={{ flex: '1' }}>
                <input type="text" name="zip" placeholder='ZIP Code' />
              </div>
              <div style={{ flex: '1' }}>
                <input type="text" name="city" placeholder='City'/>
              </div>
            </div>
            <div className="form-group">
              <input type="text" name='address' placeholder='Apartment, suite, etc.(optional)' />
            </div>
            <div className="form-group">
              <select name='color'>
                <option value="">Select Color</option>
                <option value="black">Black</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
              </select>
            </div>
            <div className="form-group">
              <input type="number" name='quantity'  placeholder='Quantity' min='1' />
            </div>
            <button type='submit' className='btn'>Continue to Payment</button>
          </form>
        </div>
        <div className='pre-order-form'>
          <h2>TechTrek X</h2>
          <div className="card">
            <img src={phone2} alt="TechTrek X Smartphone" className="img-fluid" />
          </div>
        </div>
      </div>
      
    
  )
}

export default Order
