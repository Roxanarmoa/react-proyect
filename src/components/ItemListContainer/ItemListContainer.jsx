import { useEffect, useState } from "react";

import obtenerProductos from "../utilities/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

//import "./ItemListContainer.scss"

const ItemListContainer = () => {

    const [products, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        obtenerProductos
            .then((respuesta) => {
                if (categoria){
                    const productosFiltrados = respuesta.filter((product)=> product.categoria === categoria)
                    setProductos(productosFiltrados)
                }else{
                    setProductos(respuesta);
                }
            })
            .catch((error) =>{
                console.log(error);
            })
            .finally(() => {
                console.log("finalizo la promesa");
            });
}, [categoria]);

return (
    <div>
        <ItemList products={products}/>
    </div>
);
};

export default ItemListContainer