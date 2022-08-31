const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const axios = require('axios')
const { json } = require('body-parser')

const app = express()
const PORT = 7000
app.listen(PORT, console.log(`Server running on ${PORT}`))

app.use(cors())
app.use(json())

const { parsed: config } = dotenv.config()

const BASE_URL = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`
const auth = {
    username: config.API_KEY,
    password: config.API_SECRET,
}

app.get('/photos', async(req, res) => {
    const response = await axios.get(BASE_URL, {
        auth,
        params: {
            next_cursor: req.query.next_cursor
        }
    })
    return res.send(response.data)
})