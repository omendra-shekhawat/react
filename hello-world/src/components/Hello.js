import React from 'react'
const Hello=() =>{
//using jsx

    // return (
    //     <div>
    //         <h1>with jsx</h1>
    //     </div>
    // )

// without jsx
    return React.createElement('div', {id: 'hello', className:'dummy'}, React.createElement('h1', null, 'without jsx'))
}
export default Hello