import { parse } from 'cookie'; // Import the cookie parser
import sessionStore from '../../../app/services/sessionStore'; // Import shared session store

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Parse the cookies from the request
      const cookies = parse(req.headers.cookie || '');
      const { sessionId } = cookies;

      console.log('Cookies:', cookies); // Debugging cookies
      console.log('Session ID:', sessionId);

      if (!sessionId || !sessionStore[sessionId]) {
        console.log('Invalid sessionId:', sessionId);
        return res.status(401).json({ message: 'Not authenticated' });
      }

      const user = sessionStore[sessionId];
      console.log('Session store in session handler:', sessionStore);

      return res.status(200).json({ email: user.email, role: user.role });
    } catch (error) {
      console.error('[ERROR]: Failed to handle session', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
