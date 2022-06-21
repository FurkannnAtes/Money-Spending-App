import React from 'react'
import styled from 'styled-components'

function Product({product,basket,setBasket,money,total}) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
       const checkBasket = basket.find(item => item.id === product.id)
       //already added
       if(checkBasket){
        checkBasket.amount+=1
        setBasket([...basket.filter(item => item.id !== product.id),checkBasket])
       }else{
        setBasket([...basket,{
            id:product.id,
            amount: 1
        }])
       }
    }

    const removeBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        checkBasket.amount-=1
        //no product
        if(checkBasket.amount === 0){
            setBasket([...basket.filter(item =>item.id !== product.id)])
        }else{
          setBasket([...basket.filter(item=> item.id !== product.id),checkBasket])
        }
        
     }
  return (
    <ProductStill >
         <img src={product.imgURL} style={{width: "200px" ,height:"200px"}} alt=".."/>
        <h6>{product.title}</h6>
        <div className='price'>{product.price}</div>
        <button type='button' className='sell' disabled={!basketItem} onClick={removeBasket}>Sell</button>
        <span className='amaount'>{(basketItem && basketItem.amount) || 0}</span>
        <button type='button' className='buy' disabled={money - total < product.price} onClick={addBasket}>Buy</button>
    </ProductStill>
  )
}

export default Product;

const ProductStill = styled.div`

  height:350px;
  float:left;
  background:white;
  margin-left:120px;
  margin-top:30px;
  text-align:center;

  button{
    width:70px;
    height:30px;
    border:none;
    font-size:16px,
  }
 .amaount{
    font-size:20px;
   
  }
  
  .sell{
    background:red;
    margin-right:5px;

  }
  .buy{
    background:aqua;
    margin-left:5px;
  }
  
`