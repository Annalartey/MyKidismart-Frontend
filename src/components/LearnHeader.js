import React from 'react'

function LearnHeader() {
    return (
        <header className="px-5 border-b border-gray-200 shadow-sm">
            <div className="w-1/2">
                <label className="font-bold text-3xl text-gray-700 mr-2">Select Topic:</label>
                <select className="border-2 px-4 ml-4">
                    <option>Alphabets</option>
                    <option>Numbers</option>
                    <option>Shapes</option>
                    <option>Colours</option>
                    <option>Animals</option>
                </select>
            </div>
            
        </header>
    )
}

export default LearnHeader
