import { useEffect, useState } from "react";

import obetenerProductos from "../utilities/data";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const{ id } = useParams()

    useEffect(()=>{
        obetenerProductos
        .then((respuesta)=>{
            const productoEncontrado = respuesta.find ( (prod)=> prod.id === id) //encuentra 1 producto por ID
            setProduct(productoEncontrado)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    
    return (
        <div> 
            <ItemDetail product={product}/>
        </div>
    )//muestra el producto seleccionado "ver detalles"
}
export default ItemDetailContainer