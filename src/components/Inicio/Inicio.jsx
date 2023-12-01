import "./Inicio.css"

const Inicio = () => {

    return (
        <div>
            <img className="Backimg" src="./public/img/DESTACADO1.png" alt="fondo-contenedor" />
            <h1 className="first-title">Experiencia en el mundo de las bicicletas </h1>
            <h2 className="second-title">Con una amplia variedad para elegir</h2>
            <section className="btn">
                <button href="" className="btn-catalogo">Ver catálogo</button>   
            </section>
            <section className="article-content">
                <article>
                    <img src="../public/img/delivery.png" alt="" />
                    <p className="second-title">Entrega rápida & gratuita</p>
                </article>
                <article>
                    <img src="../public/img/servicio.png" alt="" />
                    <p className="second-title">6 meses de servicio gratuito</p>
                </article>
                <article>
                    <img src="../public/img/componentes.png" alt="" />
                    <p className="second-title">Repuestos disponibles</p>
                </article>
            </section>
            

            
        </div>
    )
}

export default Inicio