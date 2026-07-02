import { Router } from "express";
import { getCurriculo, updateCurriculo } from "../controllers/curriculo.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.get("/", getCurriculo);
router.put("/", authenticate, updateCurriculo);

export default router;
