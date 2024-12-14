import crudApiRequest from '../../../app/services/crudapi';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    if (!id) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    try {
      const response = await crudApiRequest(`users/${id}`, 'DELETE');

      if (!response || response.error) {
        return res.status(400).json({ message: response?.error || 'Failed to delete user' });
      }

      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to delete user', error: error.message });
    }
  }

  res.setHeader('Allow', ['DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
