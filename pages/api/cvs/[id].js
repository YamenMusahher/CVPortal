import crudApiRequest from '../../../../app/services/crudapi';

export default async function handler(req, res) {
  const { id } = req.query;
  const { user } = req.headers; // Assuming user details (role, id) are passed in headers

  if (!user) {
    return res.status(403).json({ message: 'Access denied' });
  }

  try {
    if (req.method === 'PUT') {
      const { personalInfo, skills, education, experience, references } = req.body;

      const updatedCv = await crudApiRequest(`cvs/${id}`, 'PUT', {
        personalInfo,
        skills,
        education,
        experience,
        references,
      });

      return res.status(200).json(updatedCv);
    }

    if (req.method === 'DELETE') {
      await crudApiRequest(`cvs/${id}`, 'DELETE');
      return res.status(200).json({ message: 'CV deleted' });
    }

    res.setHeader('Allow', ['PUT', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error('Error handling CV API:', error.message);
    return res.status(500).json({ message: error.message });
  }
}
