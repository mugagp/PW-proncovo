import { Router, Request, Response } from 'express';
const router = Router();
//note que podemos tipar (typescript): req e do tipo "Request" e res é do tipo
"Response"
router.get('/teste', (req: Request, res: Response) => {
 return res.json({ ok: true })
})
export { router }