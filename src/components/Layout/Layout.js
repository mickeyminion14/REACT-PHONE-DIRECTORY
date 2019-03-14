import React from 'react';
import Aux from '../hoc/Aux';
import Navbar from '../Navbar/navbar'
const layout = ( props ) => (
    <Aux>
        <div><Navbar NavbarName = {props.NavbarName}/></div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;