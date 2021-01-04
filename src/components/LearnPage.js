import React from 'react'
// import LearnHeader from './LearnHeader'
import Sidebar from './Sidebar'
import LearnContent from './LearnContent'


function LearnPage() {
    return (
        <div>
            <div className="h-screen flex overflow-hidden">
                <Sidebar/>

                <div className="flex flex-col flex-1 min-w-0 bg-white overflow-y-hidden">
                    {/* <LearnHeader/> */}
                   <LearnContent/>
                 
                </div>
               
            </div>
            
            
        </div>
    )
}

export default LearnPage
