import React, { useState } from "react";
import Product from "../Product.json";
import'../App.css'

export default function ProductFilter() {
  const [items, setItems] = useState(Product);

  console.log(items);

  const filterItems=(catItem)=>{
    const updateItems=Product.filter((curItem)=>{
        return curItem.category === catItem
    });
    setItems(updateItems);
  }
  return (
    <div className="container mt-5">
      <h1>All Product</h1>
      <div class="row justify-content-center">
    <div class="col-12">
      <button type="button" class="btn btn-danger me-3 mb-3" onClick={()=>setItems(Product)}>
        All Product
      </button>
      <button type="button" class="btn btn-danger me-3 mb-3" onClick={()=>filterItems("men's clothing")}>
        Men's Clothing
      </button>
      <button type="button" class="btn btn-danger me-3 mb-3" onClick={()=>filterItems("jewelery")}>
        Jewelry
      </button>
      <button type="button" class="btn btn-danger me-3 mb-3" onClick={()=>filterItems("electronics")}>
        Electronics
      </button>

      <button type="button" class="btn btn-danger me-3 mb-3" onClick={()=>filterItems("custom")}>
        Custom
      </button>
      <button type="button" class="btn btn-danger me-3 mb-3" onClick={()=>filterItems("women's clothing")}>
        Women's Clothing
      </button>
    </div>
  </div>
<hr></hr>
      <div className="row">
        {items.map((val) => (
          <div className="col-md-3">
            <div class="card">
              <img src={val.image} class="card-img-top img-fluid p-3" alt="..." />
              <div class="card-body">
              <div className="d-flex justify-content-between">

                <p>{val.title.substring(0, 15)}</p>
                  <p class="badge bg-primary">{val.category}</p>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
