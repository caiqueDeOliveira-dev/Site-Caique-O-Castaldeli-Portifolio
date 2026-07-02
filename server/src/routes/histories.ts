import { Router } from "express";
import { list, getPublished, create, update, remove } from "../controllers/histories.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.get("/", list);
router.get("/published", getPublished);
router.post("/", authenticate, create);
router.put("/:id", authenticate, update);
router.delete("/:id", authenticate, remove);

export default router;
