// api/unlock.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { type, password } = req.body;

    if (!type || !password) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    // Server-side stored passwords
    const passwords = {
      toolkit: 'X̸sH4d0!P_r7$oL0s_Q9',
      adp: 'K̷z!nT#9x$HaD0w_V2q'
    };

    if (passwords[type] && passwords[type] === password) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(200).json({ success: false, message: 'Invalid password' });
    }

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}
