# Horizons proxy

The [JPL Horizons API](https://ssd-api.jpl.nasa.gov/doc/horizons.html) sends no CORS headers, so a page on GitHub Pages cannot call it from the browser.
`worker/` is a Cloudflare Worker that forwards the query string to `https://ssd.jpl.nasa.gov/api/horizons.api`, adds `Access-Control-Allow-Origin: *` and caches successful responses for 1 hour.

## Deploy

Requires Node.js and a free [Cloudflare account](https://dash.cloudflare.com/sign-up).

```bash
cd worker
npx wrangler login
npx wrangler deploy
```

`deploy` prints the URL: `https://horizons-proxy.<your-subdomain>.workers.dev`.
Run `npx wrangler deploy` again after every change to `worker/index.js`.

## Test

Same parameters as the Horizons API. Example: Mars position vectors relative to the Sun.

```bash
curl "https://horizons-proxy.<your-subdomain>.workers.dev/?format=json&COMMAND='499'&EPHEM_TYPE='VECTORS'&CENTER='500@10'&START_TIME='2026-11-14'&STOP_TIME='2026-11-15'&STEP_SIZE='1d'"
```

On Windows PowerShell use `curl.exe` instead of `curl`.
To run it locally: `npx wrangler dev`, then use `http://localhost:8787/?...`.
