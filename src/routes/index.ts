import productRouter from "./product"
import authRouter from "./auth";

export function routes(app) {
   
    app.use('/products', productRouter)
    app.use('/', authRouter)

    // app.use('/', (req, res) => {
    //     return res.send('home');
    // })

    
}