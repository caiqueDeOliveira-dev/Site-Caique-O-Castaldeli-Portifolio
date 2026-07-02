import { Router } from "express";
import { getStats, updateStats, syncStats } from "../controllers/stats.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.get("/", getStats);
router.put("/", authenticate, updateStats);
router.post("/sync", authenticate, syncStats);

export default router;
