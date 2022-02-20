export const products = [
    {
        id: 1,
        name: 'Doritos BBQ',
        stock: 10,
        price: 350,
        description: '400 gr',
        img: 'https://res.cloudinary.com/franlodice/image/upload/v1644719365/Products_Mesa_de_trabajo_1_mgs1vi.png',
        category: 'snacks',
    },
    {
        id: 2,
        name: 'CocaCola Light',
        stock: 3,
        price: 120,
        img: 'https://res.cloudinary.com/franlodice/image/upload/v1644719365/Products-02_wjeinn.png',
        category: 'bebidas',
    },
    {
        id: 3,
        name: 'Chocolate Milka',
        stock: 7,
        price: 200,
        img: 'https://res.cloudinary.com/franlodice/image/upload/v1644719364/Products-03_l55kic.png',
        category: 'golosinas',
    },
    {
        id: 4,
        name: 'Cheetos Crunchy',
        stock: 14,
        price: 300,
        img: 'https://res.cloudinary.com/franlodice/image/upload/v1644719365/Products-04_hi3xj9.png',
        category: 'snacks',
    },
];

//export const mostrarProductos = (category) => {
//    return new Promise((resolve) => {
//           setTimeout(() => {
//                resolve(products)
//            }, 2000)
//    })
//}

export const mostrarProductosPorCategoria = (categoryId) => {
    return new Promise((resolve) => {
        const prodFiltrado = products.filter(p => p.category === categoryId)
        setTimeout(() => {
            categoryId ? resolve (prodFiltrado) : resolve (products)
        }, 1000)
    })
}

export const mostrarProducto = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 2000)
    })
}


