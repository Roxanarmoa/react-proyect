const products = [
    {
        id: "cube-nuroad",
        title: "CUBE NUROAD EX R29",
        thumbnail:"/public/img/CUBEruta_nuroadpro-r29m-aluminio.png",
        span: "NUEVO",
        price: 800000,
        categoria:"ruta",
        detalles:"todo",
        description:"La Nuroad Pro es un mix de bicicletas de carreras y ciclocross al que se le sumó un poco de ADN de bicicleta de montaña a la mezcla. Hay mucho espacio libre para neumáticos grandes, adherentes y cómodos de 45 mm, o 40 mm si corres guardabarros al mismo tiempo. Hay una abrazadera de asiento integrada y soporte excepcionalmente ordenados para todo tipo de accesorios. ademas de un enrutamiento de cables interno ordenado para mantener los cambios de marcha libres de arena y barro durante más tiempo. Las ruedas de eje pasante mejoran la precisión de la dirección, incluso en las carreteras más difíciles. Y la horquilla Full Carbon no solo es ligera, sino que también ayuda a reducir la vibración de la carretera y cuenta con soportes de rack lowrider."
    },
    {
        id: "merida-bignine",
        title: "MÉRIDA BIG NINE 400 R29",
        thumbnail:"/public/img/MERIDA_bignine15-r29l-aluminio-verde.png",
        span: "NUEVO",
        price: 389000,
        categoria:"mountain",
        detalles:"todo",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit gravida pretium condimentum, senectus aenean inceptos vehicula parturient ultricies sodales lacinia praesent, etiam malesuada placerat potenti pulvinar blandit lobortis aliquam dignissim. Mus eget bibendum ac facilisis auctor ridiculus ante montes scelerisque in penatibus, blandit congue augue hendrerit dis praesent non pulvinar nisl litora, integer nisi neque sodales accumsan malesuada et porttitor ultricies purus. Augue malesuada sed tortor hac sodales class aliquet cursus cum platea diam nisi, ad luctus inceptos quam nec enim parturient nostra felis est lacus."
    },
    {
        id: "topmega-sunshine",
        title: "TOPMEGA SUNSHINE R29",
        thumbnail:"/public/img/TOPMEGA_sunshine-r29s-aluminio.png",
        span: "NUEVO",
        price: 372500,
        categoria:"mountain",
        detalles:"todo",
        description:"Sociosqu aliquam venenatis mus primis torquent praesent at, ligula malesuada diam ante penatibus proin maecenas tortor, nulla vehicula placerat iaculis aliquet blandit. Cursus ligula odio taciti maecenas blandit parturient inceptos curae, ullamcorper sagittis etiam integer fringilla volutpat varius, ad suscipit nullam phasellus nisl gravida pellentesque. Rutrum euismod mus molestie mi curae, litora curabitur nunc aptent, pulvinar tortor leo quisque. Fusce dignissim fringilla sapien quam penatibus senectus tortor, sociosqu laoreet ultrices mauris praesent neque mollis, mi ad dictum arcu sem viverra, dui semper pulvinar ullamcorper nunc euismod."
    },
    {
        id: "venzo-skyline",
        title: "VENZO SKYLINE EVO R26",
        thumbnail:"/public/img/VENZO_skyline-evo-r26s-aluminio.png",
        span: "NUEVO",
        price: 420000,
        categoria:"mountain",
        detalles:"todo",
        description:"Nunc dictum consequat enim ultricies nam non faucibus vitae habitasse luctus parturient, in laoreet nibh accumsan sed augue dignissim convallis diam condimentum. Habitant turpis vulputate lobortis at vehicula inceptos pulvinar, convallis ultrices a porttitor aliquam tortor ultricies, massa molestie venenatis ligula bibendum fermentum. Diam semper fringilla mi dignissim nascetur primis malesuada tempor, enim placerat conubia dui feugiat aenean cum ante, litora tincidunt molestie inceptos habitant interdum montes."
    }
]


//simulacion   2 segundos devuelve los productos


const obetenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    },2000);
});

export default obetenerProductos