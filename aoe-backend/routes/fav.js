import { Router } from "express";
const router = Router()

import { check } from "express-validator";
import { updateFav } from "../controllers/fav.js";
import { validateFields } from "../middleware/validateFields.js";


router.put(
    '/:id',
    [
        check('id', 'The Id is required').not().isEmpty(),
        check('fav', 'fav must have less than 4 values').isArray({max:3}),
        check('fav', 'fav is required').not().isEmpty(),
        validateFields
    ],
    updateFav
)

export default router