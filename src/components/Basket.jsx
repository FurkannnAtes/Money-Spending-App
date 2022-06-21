import React from 'react'
import BasketItem from './BasketItem';
import styled from 'styled-components';

function Basket({basket,products,total,resetBasket}) {
  return (
    <BasketStill>
        <div>
      {basket.map(item => (
        <BasketItem
        item={item}
        product={products.find(p => p.id === item.id)}
        />
      ))}
      <div className='totalMoney'>Total amount : $ {total} </div>
      <button onClick={resetBasket}>Reset basket</button>
     </div>
    </BasketStill>
  )
}

export default Basket;

const BasketStill = styled.div`
    
    width:1000px;
    padding-left:5px;
    position:absolute;
    background:white;
    top:75vh;
    left:50%;
    transform:translate(-50%);
    font-size:20px;

    button{
        background:red;
        border:none;
        width:100px;
        height:30px;
        margin-bottom:10px;
        border:none;
    }
    .totalMoney{
        color:rgb(60, 179, 113);
    }
`