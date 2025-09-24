export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { type, password } = req.body;
  if (!type || !password) return res.status(400).json({ success: false, message: 'Missing fields' });

  const passwords = {
    toolkit: 'X̸sH4d0!P_r7$oL0s_Q9',
    adp: 'K̷z!nT#9x$HaD0w_V2q'
  };

  if (passwords[type] && passwords[type] === password) {
    return res.json({ success: true, message: 'Access granted' });
  } else {
    return res.json({ success: false, message: 'Invalid password' });
  }
}
