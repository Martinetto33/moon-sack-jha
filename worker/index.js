// Fixed upstream: only the query string is forwarded, so this is not an open proxy.
const HORIZONS_API = 'https://ssd.jpl.nasa.gov/api/horizons.api';

export default {
  async fetch(request) {
    const upstream = await fetch(HORIZONS_API + new URL(request.url).search, {
      // Cache successful answers for 1h at the edge to spare JPL repeated identical queries.
      cf: { cacheEverything: true, cacheTtlByStatus: { '200-299': 3600 } },
    });
    const response = new Response(upstream.body, upstream);
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  },
};
