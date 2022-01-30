import { Request, Response, Router } from "express";
import { clubMock } from "../docs/mock-content";

const router = Router()

function fakePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(clubMock), 2000)
  })
}

router.get('/', (_, response: Response) => response.send('Welcome to the API Soccer!'))

router.get('/clubs', async (request: Request, response: Response) => {
  const club = await fakePromise()

  return response.status(200).json({ club: [club], success: true, message: 'Clubs have been loaded successfully.' })
})

router.get('/club/:id', async (request: Request, response: Response) => {
  const { id } = request.params

  if (!id)
    return response.status(401).json({ success: false, message: 'Bad Request: ID should be provided.' })
  if (isNaN(Number(id)))
    return response.status(401).json({ success: false, message: 'Bad Request: ID should be a number.' })

  const club = await fakePromise()

  return response.status(200).json({ club, success: true, message: 'Club has been loaded successfully.' })
})

export { router }
