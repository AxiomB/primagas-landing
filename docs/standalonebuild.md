## Deployment Process

### 1. Preparation (On your local machine)
Before you zip everything up, you need to ensure the paths are "portable."

**A. The Database (`payload.db`)**
In your `src/payload.config.ts`, ensure your SQLite path is relative so it works both locally and on the server:
```typescript
db: sqliteAdapter({
  client: {
    url: 'file:./payload.db', 
  },
}),
```

**B. Check host Node Modules**
Since you are likely building on a Mac or Windows machine but the production server is almost certainly **Linux**, the "native" parts of the code (the database driver and the image processor) will break if you just copy your local `node_modules`.

You need to ensure the `node_modules` inside the `standalone` folder contains the **Linux** versions of these libraries:

**B. The Build**
Run `npm run build`. This creates the `.next/standalone` folder.

**C. The Manual Merge**
Next.js "standalone" mode does not include the `public` folder or the `static` assets automatically. You must move them manually:
1. Copy your **`public`** folder into `.next/standalone/public`.
2. Copy **`.next/static`** into `.next/standalone/.next/static`.
3. Copy your **`payload.db`** file into `.next/standalone/`.
4. Copy your **`media`** folder (if you stored images locally) into `.next/standalone/`.
5. Change .env file URL parameter to final URL



### 2. The Deployment Bundle
Your final FTP folder structure inside the server's root should look like this:

```text
/ (Server Root)
├── .next/
│   └── static/ (from your local build)
├── public/     (from your project root)
├── media/      (your uploaded images)
├── node_modules/ (the minimal ones from 'standalone')
├── server.js   (the entry point from 'standalone')
├── payload.db  (your pre-filled database)
└── .env        (manually created on server)
```
