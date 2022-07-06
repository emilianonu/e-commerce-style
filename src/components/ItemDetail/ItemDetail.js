import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({data}) => {
    console.log("Data desde ItemDetail", data)
    return(
        <div>
            Informacion del producto
            <img src={data.image} alt={data.title} width="400" />
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
            <h3>$ {data.price}</h3>
            <h4>Stock: {data.stock}</h4>
            <ItemCount stock={data.stock} initial={1} />
        </div>
    )
}

export default ItemDetail