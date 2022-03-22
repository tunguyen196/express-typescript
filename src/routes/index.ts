import productRouter from "./product"

export function routes(app) {
   
    app.use('/products', productRouter)
    app.use('/', (req, res) => {
        res.send('Home')
    })

    
}