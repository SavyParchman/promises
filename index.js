const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 3000,
  app = express();

var todos = [
  'Create a todo List',
  'Update todo List',
  'Cross out todo List',
  'Remove items from todo List',
  'Create a new todo'
];

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/api/list', (req, res) => res.send(todos));
app.post('/api/list', (req, res) => {
  console.log(req.body);
  todos.push(req.body.todo);
  return res.send(todos);
});
app.put('/api/list/:todo', (req, res) => {
  var index = todos.indexOf(req.params.todo);
  todos[index] = req.body.todo;
  return res.send(todos);
});
app.delete('/api/list/:todo', (req, res) => {
  var index = todos.indexOf(req.params.todo);
  todos.splice(index, 1);
  return res.send(todos);
});

app.listen(port, function() {
  console.log('Server listening on port', port);
});
