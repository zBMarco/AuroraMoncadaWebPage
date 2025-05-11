import express from 'express'
import dotenv from 'dotenv'
import router from './Router/index.js'
dotenv.config()

const app = express()
app.use(express.json())

app.use('/api', router)
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server Running ${PORT}:)`)
})