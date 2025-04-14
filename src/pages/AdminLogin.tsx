
import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { Lock, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const success = await login(email, password);
      
      if (success) {
        toast({
          title: 'Login successful',
          description: 'Redirecting to dashboard...',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <PageLayout>
      <div className="container flex flex-col items-center justify-center min-h-[80vh]">
        <div className="mx-auto w-full max-w-md">
          <Card className="border-2">
            <CardHeader className="space-y-1 text-center">
              <div className="flex justify-center mb-2">
                <div className="rounded-full bg-dataBlue/10 p-3">
                  <Lock className="h-6 w-6 text-dataBlue" />
                </div>
              </div>
              <CardTitle className="text-2xl">Admin Login</CardTitle>
              <CardDescription>
                Enter your credentials to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-dataBlue hover:bg-dataBlue-dark"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
                <div className="text-center text-sm text-muted-foreground mt-2">
                  <p>Create an account with <Link to="/admin/register" className="text-dataBlue hover:underline">admin@datacentralapp.com</Link> for admin access</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminLogin;
