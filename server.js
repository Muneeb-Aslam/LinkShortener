import { express } from "express"
const app = express()
const PORT = 3000
app.use(express.JSON({extended:false}))


// eslint-disable-next-line no-undef
app.use("/",require('./routes/index.js'))
app.use("/api/",require('./routes/urls.js'))
app.listen(PORT,()=>console.log(`server running on PORT ${PORT}`))
