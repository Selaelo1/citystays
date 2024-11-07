export interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'host' | 'admin';
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Mock users for testing
export const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'client@example.com',
    name: 'John Client',
    role: 'client',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    email: 'host@example.com',
    name: 'Sarah Host',
    role: 'host',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    email: 'admin@example.com',
    name: 'Mike Admin',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80'
  }
];