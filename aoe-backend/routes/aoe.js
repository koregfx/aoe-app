import { Router } from "express";
import { civilizations } from "../controllers/aoe.js";
const router = Router()




router.get(
    '/',
    civilizations
)


export default router