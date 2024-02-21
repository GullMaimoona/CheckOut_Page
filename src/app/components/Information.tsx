import React from 'react';

const Information = () => {
  return (
    <div className="container mx-auto mt-10 ml-12 ">
      <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
      <form className="w-full max-w-lg">
        {/* Name Section */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
              First Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="first-name"
              type="text"
              placeholder=""
              required  
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="last-name"
              type="text"
              placeholder=""
              required  
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phone"
              type="text"
              placeholder=""
              required  
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder=""
              required  
            />
          </div>
        </div>

        {/* Country Section */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="country">
              Country
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full text-gray-700 border border-gray-300 rounded py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="country"
                required   
              >
                <option value="" disabled>Select Country</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="South Africa">South Africa</option>
                <option value="United States">United States</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="address"
              type="text"
              placeholder=""
              required  
            />
          </div>
        </div>

        {/* Town/City and State/County Section */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="town-city">
              Town/City
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="town-city"
              type="text"
              placeholder=""
              
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state-county">
              State / County
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="state-county"
              type="text"
              placeholder=""
   
            />
          </div>
        </div>

        {/* Postal Code Section */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="postal-code">
              Postal Code
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="postal-code"
              type="text"
              placeholder=""
              required  
            />
          </div>
        </div>

        {/* Create Account Checkbox */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
              <span className="ml-2 text-gray-700">Create An Account?</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Information;
