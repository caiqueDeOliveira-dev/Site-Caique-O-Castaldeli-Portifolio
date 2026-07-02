import { Router } from "express";
import { uploadFile, listFiles } from "../controllers/upload.js";
import { authenticate } from "../middlewares/auth.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

const router = Router();

router.post("/", authenticate, upload.single("file"), uploadFile);
router.get("/", listFiles);

export default router;
