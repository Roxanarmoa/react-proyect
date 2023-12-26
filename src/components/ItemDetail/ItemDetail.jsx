import "./ItemDetail.scss"


//muestra de busqueda
const ItemDetail = ({ product }) => {

    return(
        <div className="product-detail">
            <img src={product.thumbnail} alt={product.title} />
            <div>
                <h2>{product.title}</h2>
                <p className="description">{product.description}</p>
                <p>${product.price}</p>
                <button>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;