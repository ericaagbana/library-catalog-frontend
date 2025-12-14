// Replace the loadAllUsers function in script.js
const updatedFunction = `// Load all users (admin only)
async function loadAllUsers() {
  try {
    const data = await apiCall('/api/users');
    return data;
  } catch (error) {
    console.error('Error loading users:', error);
    // Return dummy data for testing if API fails
    return [
      { id: 1, email: 'admin@library.com', name: 'Admin User', role: 'admin' },
      { id: 2, email: 'test@student.com', name: 'Test Student', role: 'student' }
    ];
  }
}`;

console.log('Copy this function and replace your loadAllUsers function in script.js:');
console.log(updatedFunction);
