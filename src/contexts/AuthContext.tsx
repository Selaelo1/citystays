import { createContext, useContext, ReactNode } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import type { User, AuthContextType } from "../types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, setUser, logout } = useAuthStore();

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUser = MOCK_USERS.find((u) => u.email === email);
      if (!mockUser || password !== "password") {
        throw new Error("Invalid credentials");
      }

      setUser(mockUser);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Mock users for testing
const MOCK_USERS: User[] = [
  {
    id: "1",
    email: "client@example.com",
    name: "John Client",
    role: "client",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    email: "host@example.com",
    name: "Sarah Host",
    role: "host",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    email: "admin@example.com",
    name: "Mike Admin",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80",
  },
];