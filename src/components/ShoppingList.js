import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectdCatagory, setSelectdCatagory] = useState("ALL")
 const filterItems = items.filter(e=>{
  if(selectdCatagory ==="ALL"){
    return true
  }
  return e.category === selectdCatagory;
 })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(event)=> setSelectdCatagory(event.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
