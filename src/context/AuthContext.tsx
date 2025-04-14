
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// In a real app, this would validate against a backend
const validateCredentials = (username: string, password: string): boolean => {
  // DEMO: Simple admin/admin credentials for demonstration
  return username === 'admin' && password === 'admin';
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if user was previously logged in
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // In a real app, this would call your API
    const isValid = validateCredentials(username, password);
    
    if (isValid) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    }
    
    return isValid;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
