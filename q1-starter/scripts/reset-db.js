import { rmSync, existsSync } from 'node:fs';

for (const file of ['app.db', 'app.db-wal', 'app.db-shm']) {
  if (existsSync(file)) {
    rmSync(file);
  }
}

console.log('Existing database files removed.');