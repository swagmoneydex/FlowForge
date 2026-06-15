import fs from "fs/promises";
import path from "path";

export interface Submission {
  name: string;
  email: string;
  company: string;
  message: string;
  submittedAt: string;
}

const FILE_PATH = path.join(process.cwd(), "submissions.json");

export async function saveSubmission(data: Submission): Promise<void> {
  let submissions: Submission[] = [];

  try {
    const existing = await fs.readFile(FILE_PATH, "utf-8");
    submissions = JSON.parse(existing);
  } catch {
    // File doesn't exist yet — start fresh
  }

  submissions.push(data);
  await fs.writeFile(FILE_PATH, JSON.stringify(submissions, null, 2), "utf-8");
}
