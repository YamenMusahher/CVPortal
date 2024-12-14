import crudApiRequest from '../../../../app/services/crudapi';

export default async function handler(req, res) {
  const dataType = 'cvs'; // Define your data type for CVs
  const { user } = req.headers; // Assuming user details (role, id) are passed in headers

  try {
    if (req.method === 'GET') {
      if (!user) {
        return res.status(403).json({ message: 'Access denied' });
      }

      const cvs = await crudApiRequest(`${dataType}`, 'GET');

      if (user.role === 'admin') {
        return res.status(200).json(cvs);
      }

      // Filter CVs for regular users to show only their CVs
      const userCvs = cvs.filter((cv) => cv.user === user.id);
      return res.status(200).json(userCvs);
    }

    if (req.method === 'POST') {
      if (!user) {
        return res.status(403).json({ message: 'Unauthorized' });
      }

      const { personalInfo, skills = [], education = [], experience = [], references = [] } = req.body;

      if (!personalInfo || !personalInfo.name || !personalInfo.email || !personalInfo.phone) {
        return res.status(400).json({ message: 'Missing personal information' });
      }

      const newCv = await crudApiRequest(`${dataType}`, 'POST', [
        {
          user: user.id,
          personalInfo,
          skills,
          education,
          experience,
          references,
        },
      ]);

      return res.status(201).json(newCv);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error('Error handling CV API:', error.message);
    return res.status(500).json({ message: error.message });
  }
}
