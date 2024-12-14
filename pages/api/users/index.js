  import crudApiRequest from '../../../app/services/crudapi';

  export default async function handler(req, res) {
    const dataType = 'users'; // Define your data type here
    try {
      console.log(`[INFO]: Incoming request - Method: ${req.method}, Path: /api/${dataType}`);

      if (req.method === 'GET') {
        console.log('[INFO]: Fetching all users...');
        const users = await crudApiRequest(`${dataType}`, 'GET');

        // Check if role filter is applied
        const { role } = req.query;
        if (role) {
          console.log(`[INFO]: Filtering users by role: ${role}`);
          const filteredUsers = users.filter((user) => user.role === role);
          console.log(`[INFO]: Users filtered by role "${role}"`, filteredUsers);
          return res.status(200).json(filteredUsers);
        }

        console.log('[INFO]: Users fetched successfully:', users);
        return res.status(200).json(users);
      }

      if (req.method === 'POST') {
        console.log('[INFO]: Creating a new user...');
        console.log('[INFO]: Request body:', req.body);

        // Extract the first object from the array if req.body is an array
        const { name, email, password, role = 'user' } = Array.isArray(req.body) ? req.body[0] : req.body;

        console.log('[INFO]: User data - Name:', name, ', Email:', email, ', Role:', role);

        // Validate role
        if (!['user', 'admin'].includes(role)) {
          console.error('[ERROR]: Invalid role specified');
          return res.status(400).json({ message: 'Invalid role. Role must be either "user" or "admin".' });
        }

        // For testing purposes: No restrictions for admin creation
        if (role === 'admin') {
          console.log('[INFO]: Admin user is being created (testing mode, no restrictions).');
        }

        // Send POST request
        const newUser = await crudApiRequest(`${dataType}`, 'POST', [{ name, email, password, role }]);
        console.log('[INFO]: User created successfully:', newUser);

        return res.status(201).json(newUser);
      }

      console.log('[WARN]: Method not allowed:', req.method);
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    } catch (error) {
      console.error('[ERROR]: An error occurred:', error.message);
      console.error('[ERROR]: Stack trace:', error.stack);

      if (error.response) {
        // If using Axios or similar, log response details
        console.error('[ERROR]: Response data:', error.response.data);
        console.error('[ERROR]: Response status:', error.response.status);
      }

      return res.status(500).json({ message: error.message, stack: error.stack });
    }
  }
