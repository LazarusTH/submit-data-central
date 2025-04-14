
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, ClipboardList, UserCheck, FileBarChart, LogOut } from 'lucide-react';
import { SubmissionsTable } from '@/components/admin/SubmissionsTable';
import { SubmissionFilters } from '@/components/admin/SubmissionFilters';
import { useAuth } from '@/context/AuthContext';
import { FormSubmission } from '@/types/forms';
import { getSubmissions, exportAsCsv } from '@/utils/formSubmission';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [activeTab, setActiveTab] = useState('abetuta');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    // Load submissions from storage
    const allSubmissions = getSubmissions();
    setSubmissions(allSubmissions);
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const getFilteredSubmissions = (formType: string) => {
    return submissions.filter((sub) => {
      const matchesFormType = sub.formType === formType;
      const matchesStatus = !statusFilter || sub.status === statusFilter;
      return matchesFormType && matchesStatus;
    });
  };

  const handleExportAll = (formType: string) => {
    const filtered = getFilteredSubmissions(formType);
    if (filtered.length > 0) {
      exportAsCsv(filtered);
    }
  };

  const refreshSubmissions = () => {
    setSubmissions(getSubmissions());
  };

  const countSubmissionsByType = (formType: string) => {
    return submissions.filter(sub => sub.formType === formType).length;
  };

  const countSubmissionsByStatus = (formType: string, status: string) => {
    return submissions.filter(sub => sub.formType === formType && sub.status === status).length;
  };

  return (
    <PageLayout>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-dataBlue">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage and view all submissions</p>
          </div>
          <Button variant="ghost" onClick={logout} className="text-gray-500">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Submission Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Abetuta Forms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{countSubmissionsByType('abetuta')}</div>
                <FileText className="h-5 w-5 text-dataBlue opacity-75" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Qreta Forms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{countSubmissionsByType('qreta')}</div>
                <ClipboardList className="h-5 w-5 text-dataBlue opacity-75" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Abalat Mzgeba</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex items-center gap-4">
                <div>{countSubmissionsByType('abalatMzgeba')}</div>
                <div className="flex gap-1 items-center">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                    {countSubmissionsByStatus('abalatMzgeba', 'accepted')}
                  </span>
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">
                    {countSubmissionsByStatus('abalatMzgeba', 'rejected')}
                  </span>
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
                    {countSubmissionsByStatus('abalatMzgeba', 'pending')}
                  </span>
                </div>
              </div>
              <UserCheck className="h-5 w-5 text-dataBlue opacity-75 mt-1" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Report Forms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{countSubmissionsByType('report')}</div>
                <FileBarChart className="h-5 w-5 text-dataBlue opacity-75" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="abetuta" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>Abetuta</span>
              </TabsTrigger>
              <TabsTrigger value="qreta" className="flex items-center gap-1">
                <ClipboardList className="h-4 w-4" />
                <span>Qreta</span>
              </TabsTrigger>
              <TabsTrigger value="abalatMzgeba" className="flex items-center gap-1">
                <UserCheck className="h-4 w-4" />
                <span>Abalat Mzgeba</span>
              </TabsTrigger>
              <TabsTrigger value="report" className="flex items-center gap-1">
                <FileBarChart className="h-4 w-4" />
                <span>Reports</span>
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              {activeTab === 'abalatMzgeba' && (
                <SubmissionFilters onStatusChange={setStatusFilter} showStatusFilter={true} />
              )}
              <Button 
                variant="outline" 
                className="flex items-center"
                onClick={() => handleExportAll(activeTab)}
              >
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </div>
          </div>

          <TabsContent value="abetuta" className="mt-0">
            <SubmissionsTable 
              submissions={getFilteredSubmissions('abetuta')} 
              formType="abetuta"
              onUpdate={refreshSubmissions}
            />
          </TabsContent>
          
          <TabsContent value="qreta" className="mt-0">
            <SubmissionsTable 
              submissions={getFilteredSubmissions('qreta')} 
              formType="qreta"
              onUpdate={refreshSubmissions}
            />
          </TabsContent>
          
          <TabsContent value="abalatMzgeba" className="mt-0">
            <SubmissionsTable 
              submissions={getFilteredSubmissions('abalatMzgeba')} 
              formType="abalatMzgeba"
              onUpdate={refreshSubmissions}
            />
          </TabsContent>
          
          <TabsContent value="report" className="mt-0">
            <SubmissionsTable 
              submissions={getFilteredSubmissions('report')} 
              formType="report"
              onUpdate={refreshSubmissions}
            />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default AdminDashboard;
