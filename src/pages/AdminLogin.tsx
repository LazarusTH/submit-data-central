
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { Lock } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(username, password);
      
      if (!success) {
        toast({
          title: 'Login failed',
          description: 'Invalid username or password',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Login error',
        description: 'An unexpected error occurred',
        variant: 'destructive',
      });
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                  <p>Demo credentials: admin / admin</p>
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
