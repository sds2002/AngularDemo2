const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Simulate server error for POST requests
server.post('/posts', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  // Randomly simulate server error
  if (Math.random() < 0.3) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
  // Otherwise proceed normally
  const newPost = { id: Date.now(), ...req.body };
  router.db.get('posts').push(newPost).write();
  res.status(201).json(newPost);
});

// Simulate 404 for a certain ID
server.get('/posts/:id', (req, res, next) => {
  const post = router.db.get('posts').find({ id: Number(req.params.id) }).value();
  if (!post) return res.status(404).json({ error: 'Post not found' });
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running with error simulation on port 3000');
});
