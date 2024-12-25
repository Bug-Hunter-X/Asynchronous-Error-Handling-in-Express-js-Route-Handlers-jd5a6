const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch the user ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user); // Error: user is not defined outside the database query scope
});

app.listen(3000, () => console.log('Server listening on port 3000'));