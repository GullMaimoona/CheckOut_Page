import React from 'react';

const OrderSummary = () => {
  return (
    <div className="w-full  mt-16 mr-10 max-w-xl mx-auto p-4 bg-gray-100 shadow-md rounded">  
      {/* Heading */}
      <div className="flex justify-between mb-4">  
        <h3 className="text-lg font-semibold text-gray-900">Product</h3>
        <h3 className="text-lg font-semibold text-gray-900">Total</h3>
      </div>
      {/* Order Items */}
      <div className="flex justify-between border-b pb-4 mb-4">  
        <span className="text-sm font-medium text-gray-600">v-neck dress x 1</span>
        <span className="text-sm font-medium text-gray-900">$94.5</span>
      </div>
      <div className="flex justify-between border-b py-4 mb-4">  
        <span className="text-sm font-medium text-gray-600">sleeveless dress x 1</span>
        <span className="text-sm font-medium text-gray-900">$261</span>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between py-4 mb-4">  
        <span className="text-medium font-semibold text-gray-600">Subtotal</span>
        <span className="text-sm font-medium text-red-500">$355.5</span>
      </div>

      {/* Shipping Heading */}
      <h3 className="text-medium font-semibold text-gray-600 mt-6 mb-2">Shipping</h3>  
      {/* Shipping Options */}
      <div className="flex flex-col py-4 mb-4">  
        <label className="flex items-center text-sm font-medium text-gray-600 mb-2">  
          <input type="radio" name="shipping" className="form-radio h-4 w-4 text-indigo-600" />
          <span className="ml-2">Free Shipping</span>
        </label>
        <label className="flex items-center text-sm font-medium text-gray-600 mt-2">  
          <input type="radio" name="shipping" className="form-radio h-4 w-4 text-indigo-600" />
          <span className="ml-2">Local Pickup</span>
        </label>
      </div>

      {/* Total */}
      <div className="flex justify-between py-4 border-t mb-4">  
        <span className="text-sm font-medium text-gray-600">Total</span>
        <span className="text-sm font-medium text-red-500">$355.5</span>
      </div>

      {/* Payment Options */}
      <div className="flex flex-col mt-6 mb-4"> 
        <label className="flex items-center text-sm font-medium text-gray-600 mb-2"> 
          <input type="radio" name="payment" className="form-radio h-4 w-4 text-indigo-600" defaultChecked />
          <span className="ml-2">COD</span>
        </label>
        <label className="flex items-center text-sm font-medium text-gray-600 mt-2"> 
          <input type="radio" name="payment" className="form-radio h-4 w-4 text-indigo-600" />
          <span className="ml-2">PayPal</span>
        </label>
      </div>

       

      {/* Place Order Button */}
      <div className="flex justify-center mt-4"> 
        <button className="w-36 h-12 px-6 py-2 border border-transparent text-sm font-medium   text-white bg-red-500 hover:bg-white hover:text-black hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
