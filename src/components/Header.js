import React from 'react'

const Header = ({ toggleNewKidForm }) => {
  return (
    <header className="px-5 border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center py-3">
        
        <div className="flex justify-between items-center space-x-3">
         
          <button onClick={toggleNewKidForm}
            className="w-full rounded-md px-3 py-2 flex justify-start text-xs text-white font-medium uppercase tracking-wide bg-blue-900 hover:bg-blue-800">
            <span>
              <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </span>
            <span className="pl-2 w-full">New Kid</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header