import React from 'react';
import Aux from '../hoc/Aux'

const navbar  = (props) => {

  return (
    <Aux>
      <nav 
          className="navbar is-dark is-flex tile is-parent has-text-centered" 
          style={{justifyContent : "center"}} 
          role="navigation" 
          aria-label="main navigation">
        <div className="navbar-brand">
          {props.NavbarName}
        </div>
      </nav>
    </Aux>
  );
}

export default navbar;