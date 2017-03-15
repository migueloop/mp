export function post(req, res) {
  console.log(JSON.stringify(req.body, null, 2));
  res.json({
    test: 'test',
    body: req.body,
  });
}
