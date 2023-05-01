export const registerUser = (req, res) => {
  const body = req.body;
  res.json({ ok: 'register', body });
};

export const loginUser = (req, res) => {
  res.json({ ok: 'login' });
};

export const updateUser = (req, res) => {
  res.json({ ok: 'updadte' });
};

export const deleteUser = (req, res) => {
  res.json({ ok: 'delete' });
};
