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
    DASHBOARD_STATS: "/get-dashboard-stats.php",
  },
};

// Helper for authenticated API calls. No console logging in production.
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem("admin_token");

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  if (token) (headers as any).Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
};
