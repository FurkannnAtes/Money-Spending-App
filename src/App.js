import React, { useEffect, useState } from 'react'
import Header from "./components/Header";
import products from "./api/products.json"
import Product from "./components/Product"
import Basket from "./components/Basket"
import styled from 'styled-components';



function App() {
  const [money, setMoney] = useState(1000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)


  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(products => products.id === item.id).price))
    }, 0))

  }, [basket])

  const resetBasket = () => {
    setBasket([])

  }

  return (

    <AppStill>
      <Header
        money={money}
        setMoney={setMoney}
        total={total}
      />


      {products.map(product => (
        <Product
          product={product}
          basket={basket}
          setBasket={setBasket}
          key={product.id}
          total={total}
          money={money}
        />
      ))}
      {total > 0 && (
        <Basket
          basket={basket}
          products={products}
          total={total}
          resetBasket={resetBasket}
        />

      )}

    </AppStill>

  );
}

export default App;

const AppStill = styled.div`



font-size:2rem;
user-select:none;


}
`



