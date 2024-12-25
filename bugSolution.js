const express = require('express');
const app = express();

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... some database query to fetch the user ...
    const user = await db.query(`SELECT * FROM users WHERE id = ${userId}`);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Server error');
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));