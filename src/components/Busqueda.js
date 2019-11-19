import React from 'react';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import './Busqueda/Busqueda.sass';
import envioGratis from '../Assets/ic_shipping.png';

function Busqueda (props) {
  const prods = props.items;

  return (
    <div className="buscador-container container">
    {prods.slice(0,4).map((item) =>(
            <Link to={`/items/${item.id}`}>
            <div key={item.id} className="row item">
                <div className="col-3">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="col-6">
                <NumberFormat className="price" value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$ '} decimalSeparator={','} thousandSeparator={'.'}/>
                {item.shipping.free_shipping ? <img src={envioGratis} className="envioIcon" alt="Envio gratuito"/> : '' }
                  <h4>{item.title}</h4>
                </div>
                <div className="col-3">
                  <p className="ubicacion">{item.address.state_name}</p>
                </div>
                </div>
            </Link>
      ))}
    </div>
  );
}

export default Busqueda;
