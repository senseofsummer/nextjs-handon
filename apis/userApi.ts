import axios from 'axios';

// Create an Axios instance for API calls
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Your backend API URL or Firebase emulator URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to log in a user
export const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await apiClient.post('/login', credentials);
    return response.data; // Return user data
  } catch (error: unknown) {
    console.log("Q error:", error)
    if (error instanceof Error) {
      throw new Error(error.message); // Type-safe error handling
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

// Function to update user data
export const updateUser = async (userData: any) => {
  try {
    const response = await apiClient.post('/update-user-data', userData);
    return response.data; // Return updated data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message); // Type-safe error handling
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

// Function to fetch user data
export const fetchUserData = async () => {
  try {
    const response = await apiClient.get('/fetch-user-data');
    return response.data; // Return fetched data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message); // Type-safe error handling
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
