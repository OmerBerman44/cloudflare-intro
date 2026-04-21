# cloudflare-intro

Cloudflare Workers intro project with a public **POST** endpoint for the workshop “Hello World” feature.

## Endpoint behavior

- **POST**: returns JSON `{ ok, feature, reply }`
- **Non-POST**: `405 Method Not Allowed`

Example response:

```json
{ "ok": true, "feature": "hello_world", "reply": "Hello World! You said: hi" }
```

## Run locally (requires Wrangler)

Wrangler is installed via npm, but **your current network can’t reach npm registries** (so `npm install` fails) — fix that first (VPN / firewall), then:

```bash
npm i -D wrangler
npm run dev
```

Test:

```bash
curl -s -X POST "http://localhost:8787" \
  -H "content-type: application/json" \
  -d '{"query":"hi there"}'
```

## Deploy (requires Wrangler + Cloudflare login)

```bash
npm run deploy
```

Use the printed `https://...workers.dev` URL as **Settings → Endpoint URL** in the workshop UI.

