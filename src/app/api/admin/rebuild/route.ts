import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';

let rebuilding = false;

function isAuthorized(req: NextRequest) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false;
  return req.headers.get('authorization') === `Bearer ${pw}`;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (rebuilding) {
    return NextResponse.json({ success: false, message: 'Rebuild already in progress' });
  }

  rebuilding = true;
  const cwd = process.cwd();
  const execEnv = { ...process.env };

  exec('npm run build', { cwd, env: execEnv }, (buildErr) => {
    if (buildErr) {
      console.error('[Admin] Build failed:', buildErr.message);
      rebuilding = false;
      return;
    }
    exec('pm2 reload nexus-clinic-malaysia', { cwd, env: execEnv }, (pm2Err) => {
      rebuilding = false;
      if (pm2Err) console.error('[Admin] PM2 reload failed:', pm2Err.message);
    });
  });

  return NextResponse.json({
    success: true,
    message: 'Rebuild started. Site will update in ~30–60 seconds.',
  });
}
