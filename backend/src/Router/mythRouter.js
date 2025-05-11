import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Todo oki myths' })
})

export default router;