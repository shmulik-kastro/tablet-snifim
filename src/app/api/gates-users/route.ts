import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

function parseCsv(content: string): Map<string, string> {
  const map = new Map<string, string>();
  const lines = content.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const commaIndex = line.indexOf(',');
    if (commaIndex === -1) continue;

    const user = line.slice(0, commaIndex).trim();
    const link = line.slice(commaIndex + 1).trim();

    // Skip header and blank user rows
    if (!user || user.toLowerCase() === 'user') continue;
    if (!link) continue;

    map.set(user, link);
  }

  return map;
}

export async function GET(request: NextRequest) {
  const user = request.nextUrl.searchParams.get('user')?.trim();

  if (!user) {
    return NextResponse.json(
      { error: 'יש להזין קוד משתמש' },
      { status: 400 }
    );
  }

  try {
    const csvPath = path.join(process.cwd(), 'Input_files', 'users_for_gates_app.csv');
    const content = await readFile(csvPath, 'utf-8');
    const users = parseCsv(content);
    const link = users.get(user);

    if (!link) {
      return NextResponse.json(
        { error: 'קוד משתמש לא נמצא' },
        { status: 404 }
      );
    }

    return NextResponse.json({ link });
  } catch {
    return NextResponse.json(
      { error: 'שגיאה בקריאת קובץ המשתמשים' },
      { status: 500 }
    );
  }
}
