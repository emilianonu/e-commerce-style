import React, {useState, useEffect} from "react";
import CardList from "../CardList/CardList";
import productos from "../../utilidades/productsMock";
import { useParams } from "react-router-dom";
import ProductList from "../../pages/ProductList";


const ItemListContainer = () =>{
    
    const {id} = useParams()

    const [products, setProducts] = useState([])
    

    useEffect(() => {
        getProducts()
        .then((response) => {
          setProducts(response)
        })
        .catch((err) => {
          console.log(err)
          })
        .finally(() => {
  
        })
        }, [])

        const getProducts = () => {
            return new Promise ((resolve, reject) => {
              setTimeout(() => {
                resolve(productos)
              }, 4000)
            })
          }

    return (
        <div>
            <CardList productList={productos}/>
        </div>
    )
}

export default ItemListContainer;