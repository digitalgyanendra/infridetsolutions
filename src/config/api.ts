
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
    ADMIN_USERS: "/admin-users.php"
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
  
  const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
};
