import { Router } from "express";
import { list, create, update, remove } from "../controllers/negaocaos.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.get("/", list);
router.post("/", authenticate, create);
router.put("/:id", authenticate, update);
router.delete("/:id", authenticate, remove);

export default router;
