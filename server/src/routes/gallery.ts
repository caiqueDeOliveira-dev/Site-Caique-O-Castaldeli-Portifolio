import { Router } from "express";
import { list, create, remove } from "../controllers/gallery.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.get("/", list);
router.post("/", authenticate, create);
router.delete("/:id", authenticate, remove);

export default router;
