import { Router } from "express";
import { list, create, update, remove } from "../controllers/messages.js";
import { authenticate } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { messageSchema, messageUpdateSchema } from "../validators/messages.js";

const router = Router();

router.get("/", authenticate, list);
router.post("/", validate(messageSchema), create);
router.patch("/:id", authenticate, validate(messageUpdateSchema), update);
router.delete("/:id", authenticate, remove);

export default router;
