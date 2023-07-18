import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/productReducer/action'
import { ProductCard } from './ProductCard'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'

export const ProductList = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch()
    const foods = useSelector((store)=> store.productReducer.foods)


    let obj = {
        params:{
            category: searchParams.getAll('category'),
            _sort: searchParams.get("order") && "price",
            _order: searchParams.get("order"),
        },
    }

    useEffect(()=>{
        dispatch(getProduct(obj))
    }, [searchParams]);


  return (<DIV>
    {/* {foods.length > 0 && foods.map((el)=>{
        return <ProductCard key={el.id} {...el}/>
    })} */}
    <ProductCard />
    </DIV>)
  
}
const DIV = styled.div`
    /* display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 20px; */
`