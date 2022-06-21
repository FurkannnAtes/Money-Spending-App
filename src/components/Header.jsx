import React from 'react'
import styled from 'styled-components'



function Header({money ,total}) {

    
  return (
    
     <HeaderStill>
          {total > 0 && money-total !== 0 &&(
            <div className='heaeder-box'>You have $ {money -total}  left to spend</div>
          )}
          {total === 0 && (
            <div className='heaeder-box'>You have $ {money} to spend</div>
          )}
          {money -total  ===  0 &&(
             <div className='heaeder-box'>You're out of money now you're poor</div>
          )
          
          }
     </HeaderStill>
    
  )
}

export default Header


const HeaderStill = styled.div`

  text-align:center;
  padding:2rem 0 2rem 0;
  background:rgb(1, 217, 0);
`