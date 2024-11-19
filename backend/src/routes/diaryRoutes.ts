import express from "express";
import * as diaryController from "../controllers/diaryController";

const router = express.Router();

router.post("/entries", diaryController.createEntry as express.RequestHandler);
router.get("/entries/:userId", diaryController.getAllEntries as express.RequestHandler);
router.put("/entries/:id", diaryController.updateEntry as express.RequestHandler);
router.delete("/entries/:id", diaryController.deleteEntry as express.RequestHandler);

export default router;
