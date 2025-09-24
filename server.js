const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Passwords are stored securely on the server
const passwords = {
  toolkit: 'X̸sH4d0!P_r7$oL0s_Q9',
  adp: 'K̷z!nT#9x$HaD0w_V2q'
};

app.use(cors());
app.use(bodyParser.json());

// Password validation endpoint
app.post('/unlock', (req, res) => {
  const { type, password } = req.body;
  if (!type || !password) return res.status(400).json({ success: false, message: 'Missing fields' });

  if (passwords[type] && passwords[type] === password) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false, message: 'Invalid password' });
  }
});

// Serve front-end files
app.use(express.static(__dirname));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
