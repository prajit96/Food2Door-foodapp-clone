import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const SideBar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll('category')
    const initialOrder = searchParams.get('order')
    const [category, setCategory] = useState(initialCategory || []);
    const [order, setOrder] = useState(initialOrder || "")

    useEffect(()=>{
        let params = {
            category,
        }

        order && (params.order = order)

        setSearchParams(params)
    },[category,order]);

    const handleCategory = (e) => {
        const {value} = e.target
        let newCategory = [...category]
        if(newCategory.includes(value)){
            newCategory = newCategory.filter(el => el !== value)
        }else{
            newCategory.push(value)
        }
        setCategory(newCategory)
    }

    const handleSort = (e) => {
        const {value} = e.target
        setOrder(value)
    }

  return <div>
    <br />
    <h3 style={{fontWeight:"600"}}>Fliter by Category</h3>
    <div>
        <input type="checkbox" value={"chicken"} onChange={handleCategory} checked={category.includes("chicken")}/>
        <label>Chicken</label>
    </div>
    <div>
        <input type="checkbox" value={"rice"} onChange={handleCategory} checked={category.includes("rice")}/>
        <label>Rice</label>
    </div>
    <div>
        <input type="checkbox" value={"fish"} onChange={handleCategory} checked={category.includes("fish")}/>
        <label>Fish</label>
    </div>
    <div>
        <input type="checkbox" value={"frouit"} onChange={handleCategory} checked={category.includes("frouit")}/>
        <label>Fruit</label>
    </div>
    <div>
        <input type="checkbox" value={"icecream"} onChange={handleCategory} checked={category.includes("icecream")}/>
        <label>Ice Cream</label>
    </div>
    <div>
        <input type="checkbox" value={"softdrink"} onChange={handleCategory} checked={category.includes("softdrink")}/>
        <label>Soft Drink</label>
    </div>
    <br />
    <h3 style={{fontWeight:"600"}}>Sort by Price</h3>
    <div onChange={handleSort}>
    <input type="radio" name='order' value={"asc"} defaultChecked={order === "asc"}/>
    <label>Ascending</label>
    <br />
    <input type="radio" name='order' value={"desc"} defaultChecked={order === "desc"}/>
    <label>Descending</label>
    </div>
    </div>
  
}