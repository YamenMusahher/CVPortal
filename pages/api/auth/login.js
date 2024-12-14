import crudApiRequest from '../../../app/services/crudapi';
import sessionStore from '../../../app/services/sessionStore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const response = await crudApiRequest('users', 'GET');
      const users = response.items || [];
      const user = users.find((u) => u.email === email && u.password === password);

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      console.log('User object:', user);
      const sessionId = `${user._uuid}-${Date.now()}`;
      console.log('Session ID being set in cookie:', sessionId);

      sessionStore[sessionId] = {
        email: user.email,
        role: user.role,
        uuid: user._uuid,
      };

      res.setHeader(
        'Set-Cookie',
        `sessionId=${sessionId}; Path=/; HttpOnly; SameSite=Strict${
          process.env.NODE_ENV === 'production' ? '; Secure' : ''
        }`
      );

      return res.status(200).json({ email: user.email, role: user.role });
    } catch (error) {
      console.error('[ERROR]: Login failed', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
