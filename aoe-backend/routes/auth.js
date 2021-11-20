import { Router } from "express";
const router = Router()

import { check } from "express-validator";
import { login } from "../controllers/auth.js";
import { validateFields } from "../middleware/validateFields.js";


router.post(
    '/',
    [
        check('name', 'The name is required').not().isEmpty(),
        validateFields
    ],
    login
)


export default router