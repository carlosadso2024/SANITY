// src/models/DiaryEntry.ts
import mongoose from "mongoose";
import { DiaryEntry } from "../types/diary";

const DiaryEntrySchema = new mongoose.Schema<DiaryEntry>({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<DiaryEntry>("DiaryEntry", DiaryEntrySchema);
