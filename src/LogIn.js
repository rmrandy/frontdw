import React from 'react';
import '../src/App.css';
import { Link } from 'react-router-dom';


function LogIn() {
  return (
    <div className='container'>
      <div className='Registro'>
      </div>
      <div className='Login'>
        <div className='input-group'>
          <label htmlFor='Usuario'>Usuario:</label>
          <input type='text' id='Usuario' name='usuario' />
        </div>
        <div className='input-group'>
          <label htmlFor='Contraseña'>Contraseña:</label>
          <input type='text' id='Contraseña' name='Contraseña' />
        </div>
        <div className='input-group'>
          <Link to='/Inicio'>
            <button>Iniciar Sesión</button>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default LogIn;
