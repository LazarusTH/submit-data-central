
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import AdminLogin from './AdminLogin';

const Admin = () => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  
  return <AdminLogin />;
};

export default Admin;
