import { Router } from "express";
import { getConfig, setConfig, getAllConfigs } from "../controllers/site.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.get("/", getAllConfigs);
router.get("/:chave", getConfig);
router.post("/", authenticate, setConfig);

export default router;
