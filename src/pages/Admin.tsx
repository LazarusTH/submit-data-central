
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import AdminLogin from './AdminLogin';

const Admin = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  
  if (isAuthenticated) {
    if (isAdmin) {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return (
        <div className="container mx-auto p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p>Your account does not have administrator privileges.</p>
        </div>
      );
    }
  }
  
  return <AdminLogin />;
};

export default Admin;
