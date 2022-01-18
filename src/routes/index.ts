import { Request, Response, Router } from "express";

const router = Router()

router.get('/', (request: Request, response: Response) => response.status(200).send('Rrrota na rrrua!'))

export { router }