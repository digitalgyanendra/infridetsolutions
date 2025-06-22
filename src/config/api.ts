// API Configuration
export const API_CONFIG = {
  BASE_URL: "https://infridetsolutions.com/api",
  ENDPOINTS: {
    LOGIN: "/login.php",
    VERIFY_TOKEN: "/verify-token.php",
    LOGOUT: "/logout.php",
    GET_POSTS: "/get-posts.php",
    CREATE_POST: "/create-post.php",
    GET_COURSES: "/get-courses.php",
    UPLOAD: "/upload.php",
    ADMIN_USERS: "/admin-users.php",
    DASHBOARD_STATS: "/get-dashboard-stats.php"
  }
};

// Helper function to make API calls with authentication
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('admin_token');
  
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }
  
  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  
  console.log(`Making API call to: ${API_CONFIG.BASE_URL}${endpoint}`);
  console.log('Request config:', config);
  
  const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, config);
  
  console.log('Response status:', response.status);
  console.log('Response headers:', response.headers);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  console.log('Response data:', data);
  
  return data;
};

// Test function to check if API is reachable
export const testApiConnection = async () => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/ping.php`);
    console.log('Ping test response:', response.status);
    return response.ok;
  } catch (error) {
    console.error('API connection test failed:', error);
    return false;
  }
};
