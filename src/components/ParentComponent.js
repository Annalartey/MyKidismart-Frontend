import React from 'react'
import ChildComponent from "./ChildComponent";

function ParentComponent() {
    return (
        <div>
            <h1><center>I am the Parent Component</center></h1>
      <h1>I know you. your name is <ChildComponent name={'component'} /></h1>
      </div>
  
    )
}

export default ParentComponent
