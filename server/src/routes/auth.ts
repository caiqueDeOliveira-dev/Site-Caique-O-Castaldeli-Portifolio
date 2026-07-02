import { Router } from "express";
import { login, refresh, me, updateProfile } from "../controllers/auth.js";
import { authenticate } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { loginSchema, userUpdateSchema } from "../validators/auth.js";

const router = Router();

router.post("/login", validate(loginSchema), login);
router.post("/refresh", refresh);
router.get("/me", authenticate, me);
router.patch("/me", authenticate, validate(userUpdateSchema), updateProfile);

export default router;
