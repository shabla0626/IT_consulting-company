# IT Consulting Website - Clean Starter

This is a clean Next.js 16 starter configured to use **Webpack in development** instead of Turbopack.
This is intentional because the previous environment was exiting immediately after Turbopack reported `Ready`.

## Recommended: WSL

Copy/extract this project inside the WSL Linux filesystem, for example:

```bash
mkdir -p ~/projects
cd ~/projects
```

After extracting, enter the folder:

```bash
cd ~/projects/it-consulting-website-clean
```

Then install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

You should see a line similar to:

```text
Local: http://localhost:3000
```

Open that address in your browser.

## Important

The `dev` script intentionally uses:

```json
"dev": "next dev --webpack"
```

Do not change it back to plain `next dev` until the environment issue is resolved.

## If port 3000 is already in use

Run:

```bash
npm run dev -- -p 3001
```

Then open:

```text
http://localhost:3001
```
