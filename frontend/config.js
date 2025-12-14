// Backend API Configuration
const API_BASE_URL = 'http://localhost:5000';
const API_ENDPOINTS = {
  REGISTER: API_BASE_URL + '/api/auth/register',
  LOGIN: API_BASE_URL + '/api/auth/login',
  BOOKS: API_BASE_URL + '/api/books',
  BORROW: API_BASE_URL + '/api/borrow'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  // Node.js environment
  module.exports = { API_BASE_URL, API_ENDPOINTS };
} else {
  // Browser environment
  window.API_BASE_URL = API_BASE_URL;
  window.API_ENDPOINTS = API_ENDPOINTS;
}
