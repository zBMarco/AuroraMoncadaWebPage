import { Router } from "express";
import routerUser from "./userRoutes.js";
import routerMyth from "./mythRouter.js";
import routerCloth from "./clothRouter.js";

const router = Router()

router.use('/user', routerUser)
router.use('/myth', routerMyth)
router.use('/cloth', routerCloth)


export default router