// src/types/diary.ts
export interface DiaryEntry {
  id?: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDiaryEntryDTO {
  userId: string;
  title: string;
  content: string;
}

export interface UpdateDiaryEntryDTO {
  title?: string;
  content?: string;
}
