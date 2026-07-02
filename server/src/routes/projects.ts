import { Router } from "express";
import { list, getById, create, update, remove, listCategories } from "../controllers/projects.js";
import { authenticate } from "../middlewares/auth.js";
import { validate } from "../middlewares/validate.js";
import { projectSchema, projectUpdateSchema } from "../validators/projects.js";

const router = Router();

router.get("/", list);
router.get("/categories", listCategories);
router.get("/:id", getById);
router.post("/", authenticate, validate(projectSchema), create);
router.put("/:id", authenticate, validate(projectUpdateSchema), update);
router.delete("/:id", authenticate, remove);

export default router;
