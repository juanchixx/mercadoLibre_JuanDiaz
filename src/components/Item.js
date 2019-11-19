import React, {useEffect, useState} from 'react';
import './Item/Item.sass';
import NumberFormat from 'react-number-format';

function Item({ match }) {
  useEffect(()=> {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    pictures: [{}]
  });

  const [descripcion, setDescripcion] = useState({});

  const fetchItem = async () => {
      const dataItem = await fetch(`https://api.mercadolibre.com/items/${match.params.id}`);
      const dataItemDes = await fetch(`https://api.mercadolibre.com/items/${match.params.id}/description`);

      const item = await dataItem.json();
      const descripcion = await dataItemDes.json();
      console.log(item);
      setItem(item);
      setDescripcion(descripcion);
  };

  return (
    <div className="container ">
      <div className="row item">
          <div className="col-8 col-sm-6 col-md-8 fotoProducto">
            <img src={item.pictures[0].secure_url} alt=""/>
          </div>
          <div className="mainInfo col-3 col-md-3">
              <h4>{item.condition === 'new' ? 'Nuevo' : 'Usado' } - {item.sold_quantity} vendidos</h4>
              <h1>{item.title}</h1>
              <NumberFormat className="price" value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$ '} decimalSeparator={','} thousandSeparator={'.'}/>
              <button className="boton">Comprar</button>
          </div>
          <div className="descripcion col-8 col-sm-6 col-md-8 ">
          <h2>Descripción del producto</h2>
          <p>{descripcion.plain_text}</p>

          </div>
      </div>
    </div>
  );
}

export default Item;
