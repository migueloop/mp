export default function ensureLogin(req, res, next) {
  const err = new Error('Unauthorized');
  err.code = 401;
  err.url = req.originalUrl;
  return req.user ? next() : res.status(401).end('Unauthorized');
}
