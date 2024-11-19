import { Request, Response } from "express";
import DiaryEntry from "../models/DiaryEntry";

export const createEntry = async (req: Request, res: Response) => {
  try {
    const { userId, title, content } = req.body;

    const newEntry = new DiaryEntry({
      userId,
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: "Error creating diary entry", error });
  }
};

export const getAllEntries = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const entries = await DiaryEntry.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching diary entries", error });
  }
};

export const updateEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedEntry = await DiaryEntry.findByIdAndUpdate(
      id,
      { title, content, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({ message: "Error updating diary entry", error });
  }
};

export const deleteEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedEntry = await DiaryEntry.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.status(200).json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting diary entry", error });
  }
};
