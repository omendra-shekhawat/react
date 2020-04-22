

import React, { Component } from 'react';
import ComponentB from './compoB';
import {UserProvider} from  './Context';


class ComponentA extends Component {
    render() {
        return (   
        <div>
            <UserProvider value="from Component A">
            <ComponentB></ComponentB>
            </UserProvider>
            
        </div> 
            
        )
    }
}

export default ComponentA