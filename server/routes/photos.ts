import express, { Request, Response} from 'express'
import dotenv, { DotenvConfigOutput } from 'dotenv'
import axios, { AxiosBasicCredentials } from 'axios'

type GetHomePageProps = {
    req: Request
    res: Response
  } 

const router = express.Router();

const { parsed: config }: DotenvConfigOutput = dotenv.config()

const BASE_URL = `https://api.cloudinary.com/v1_1/${config!.CLOUD_NAME}/resources/image`
const auth = {
    username: config!.API_KEY,
    password: config!.API_SECRET,
}

router.get('/', async({req, res}: GetHomePageProps) => {
    const response = await axios.get(BASE_URL, {
        auth,
        params: {
            next_cursor: req.query.next_cursor
        }
    })
    return res.send(response.data)
})

module.exports = router;