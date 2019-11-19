import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.sass';
import logo from '../Assets/Logo_ML.png';

export function NavBar(props) {
  const [buscar, setBuscar] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(buscar);
};

  return (
    <div className="NavBar ">
        <div className="container">

                <form className="search-box-container " onSubmit={(event) => handleSubmit(event)}  >
                      <Link to="/">
                          <img className="logo" src={logo} alt=""/>
                      </Link>
                    <input className="NavBar-input" type="text" placeholder="Nunca dejes de buscar"
                    onKeyUp={(e) => setBuscar(e.target.value)}/>
                    <button type="submit" className="search-box-btn" data-testid="search-box-icon"/>
                </form>

        </div>
    </div>
  );
};
