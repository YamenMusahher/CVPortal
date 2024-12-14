const BASE_URL = 'https://crudapi.co.uk/api/v1';
const API_KEY = 'w-hOkx8YhZXaAfqjRVzDtBgAZ4-0gI8iHUwyV8l5iTDpjn-p-A';

async function crudApiRequest(endpoint, method = 'GET', body = null) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  };

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}/${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
}

export default crudApiRequest;
