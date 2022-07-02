import { useState, useEffect } from "react";
import CardAll from "../Card/Card"
import { Grid } from "@mui/material";

const CardList = ({title}) => {
    const [products, setProducts] = useState([])
    const productos = [
      {
        title : 'jean azul ',
        price: 3000,
        image : 'jean-1.jpeg',
        descripcion: 'jean',
        id: 1
      },
      {
        title : 'jean con roturas',
        price: 3000,
        image : 'jean-2.jpeg',
        descripcion: 'jean',
        id: 2
      },
      {
        title : 'jean white',
        price: 3000,
        image : 'jean-3.jpeg',
        descripcion: 'jean',
        id: 3
      },
    ]

    const getProducts = () => {
      return new Promise ((resolve, reject) => {
        resolve(productos)
      })
    }
    useEffect(() => {
      getProducts()
      .then((res) => {
        console.log("Respuesta Promesa: ", res)
        setProducts(res)
      })
      .catch((err) => {
        console.log("Fallo la llamada")
        })
      }, [])

    

    return(
        <>
        <h2>{title}</h2>
        {console.log("state products: ", products)}
        <Grid container spacing={2}>
          {
            products.map((producto) => {
              const {title, price, image, id} = producto
              return(
                <Grid item md={3} key={id}>
                  <CardAll title={title} price={price} image={image}/>
                </Grid>
              )
            })
          }
        </Grid>
        </>
    )
    
}

export default CardList