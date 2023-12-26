import { Link } from "react-router-dom";
import "./Item.scss"

//Vista de card
const Item = ({product}) =>{
    return(
        <div className="products-container">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <Link to={`/detalle/${product.id}`}className="link"> Ver Detalles </Link>
        </div>
    );
};
export default Item;