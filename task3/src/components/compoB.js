import React, { Component } from 'react';
import ComponentC from './compoC'
import ComponentD from './compoD';
class ComponentB extends Component {
    render() {
        return (
            <div>
               <ComponentC></ComponentC>
            </div>
        )
    }
}

export default ComponentB