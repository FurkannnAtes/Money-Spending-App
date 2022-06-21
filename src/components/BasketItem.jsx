import React from 'react'
import styled from 'styled-components'

function BasketItem({item,product}) {
  return (
    <BasketITemStill>
        {product.title} x {item.amount}
    </BasketITemStill>
  )
}

export default BasketItem


const BasketITemStill = styled.div`
  
    span{
      
     
       
    }
`
