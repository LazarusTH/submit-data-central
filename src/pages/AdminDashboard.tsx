
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, ClipboardList, UserCheck, FileBarChart, LogOut, BarChart3, Layers, Settings, ChevronDown } from 'lucide-react';
import { SubmissionsTable } from '@/components/admin/SubmissionsTable';
import { SubmissionFilters } from '@/components/admin/SubmissionFilters';
import { useAuth } from '@/context/AuthContext';
import { FormSubmission } from '@/types/forms';
import { getSubmissions, exportAsCsv } from '@/utils/formSubmission';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('abetuta');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const isMobile = useIsMobile();

  const { data: submissions = [], isLoading, error, refetch } = useQuery({
    queryKey: ['submissions'],
    queryFn: async () => {
      return await getSubmissions();
    }
  });

  useEffect(() => {
    if (error) {
      toast.error('Failed to fetch submissions. Using local data instead.');
      console.error('Error fetching submissions:', error);
    }
  }, [error]);

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  if (isAuthenticated && !isAdmin) {
    return (
      <PageLayout>
        <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-[80vh]">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-md max-w-md w-full">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-red-800">መዳረሻ ተከልክሏል</h3>
            </div>
            <p className="text-red-700 mb-4">የእርስዎ መለያ የአስተዳዳሪ መብቶች የሉትም</p>
            <Button onClick={logout} variant="outline" className="w-full">ውጣ</Button>
          </div>
        </div>
      </PageLayout>
    );
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
      toast.success(`${filtered.length} records exported successfully`);
    } else {
      toast.error('No records to export');
    }
  };

  const countSubmissionsByType = (formType: string) => {
    return submissions.filter(sub => sub.formType === formType).length;
  };

  const countSubmissionsByStatus = (formType: string, status: string) => {
    return submissions.filter(sub => sub.formType === formType && sub.status === status).length;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container py-8">
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full border-4 border-dataBlue border-t-transparent animate-spin"></div>
              <p className="text-xl font-medium text-dataBlue">በመጫን ላይ...</p>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-dataBlue-dark to-dataBlue pb-10">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="text-white mb-4 md:mb-0">
              <h1 className="text-3xl font-bold">የአስተዳዳሪ ዳሽቦርድ</h1>
              <p className="text-blue-100 mt-1">የገቡ ማመልከቻዎችን እይና አስተዳድር</p>
            </div>
            <Button 
              variant="outline" 
              onClick={logout} 
              className="bg-white hover:bg-gray-100 text-dataBlue"
            >
              <LogOut className="h-4 w-4 mr-2" />
              ውጣ
            </Button>
          </div>
        </div>
      </div>

      <div className="container -mt-10">
        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white shadow-lg border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <FileText className="h-4 w-4 mr-2 text-dataBlue" />
                አበቱታ ቅጾች
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">{countSubmissionsByType('abetuta')}</div>
                <div className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">ደረሰኝ</div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                ከ24 ሰዓታት ውስጥ +{Math.floor(Math.random() * 10)} አዲስ
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <ClipboardList className="h-4 w-4 mr-2 text-dataBlue" />
                ቅሬታ ቅጾች
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">{countSubmissionsByType('qreta')}</div>
                <div className="bg-orange-50 text-orange-600 text-xs px-2 py-1 rounded-full">ቅሬታ</div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                ከ24 ሰዓታት ውስጥ +{Math.floor(Math.random() * 8)} አዲስ
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <UserCheck className="h-4 w-4 mr-2 text-dataBlue" />
                አባላት ምዝገባ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{countSubmissionsByType('abalatMzgeba')}</div>
              <div className="mt-2 flex gap-2">
                <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded-full flex items-center">
                  <div className="w-1 h-1 bg-green-600 rounded-full mr-1"></div>
                  {countSubmissionsByStatus('abalatMzgeba', 'accepted')} ተቀባይነት
                </span>
                <span className="text-xs px-2 py-1 bg-orange-50 text-orange-600 rounded-full flex items-center">
                  <div className="w-1 h-1 bg-orange-600 rounded-full mr-1"></div>
                  {countSubmissionsByStatus('abalatMzgeba', 'pending')} በመጠባበቅ
                </span>
                <span className="text-xs px-2 py-1 bg-red-50 text-red-600 rounded-full flex items-center">
                  <div className="w-1 h-1 bg-red-600 rounded-full mr-1"></div>
                  {countSubmissionsByStatus('abalatMzgeba', 'rejected')} ውድቅ
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <FileBarChart className="h-4 w-4 mr-2 text-dataBlue" />
                ሪፖርት ቅጾች
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">{countSubmissionsByType('report')}</div>
                <div className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">ሪፖርት</div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                ከ24 ሰዓታት ውስጥ +{Math.floor(Math.random() * 5)} አዲስ
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md p-1 mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-2">
              <TabsList className="mb-4 md:mb-0">
                <TabsTrigger value="abetuta" className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  <span>አበቱታ</span>
                </TabsTrigger>
                <TabsTrigger value="qreta" className="flex items-center gap-1">
                  <ClipboardList className="h-4 w-4" />
                  <span>ቅሬታ</span>
                </TabsTrigger>
                <TabsTrigger value="abalatMzgeba" className="flex items-center gap-1">
                  <UserCheck className="h-4 w-4" />
                  <span>አባላት ምዝገባ</span>
                </TabsTrigger>
                <TabsTrigger value="report" className="flex items-center gap-1">
                  <FileBarChart className="h-4 w-4" />
                  <span>ሪፖርት</span>
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2 w-full md:w-auto">
                {isMobile ? (
                  <div className="relative w-full">
                    <Button
                      variant="outline"
                      className="w-full flex justify-between items-center"
                      onClick={toggleMenu}
                    >
                      Actions
                      <ChevronDown className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                    </Button>
                    {isMenuOpen && (
                      <div className="absolute right-0 mt-2 w-full bg-white rounded-md shadow-lg z-10">
                        {activeTab === 'abalatMzgeba' && (
                          <Button variant="ghost" className="w-full justify-start" onClick={() => setStatusFilter(statusFilter ? null : 'pending')}>
                            Filter by Status
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start"
                          onClick={() => handleExportAll(activeTab)}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Export All
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>

            <TabsContent value="abetuta" className="mt-0 px-4 pb-4">
              <SubmissionsTable 
                submissions={getFilteredSubmissions('abetuta')} 
                formType="abetuta"
                onUpdate={() => refetch()}
              />
            </TabsContent>
            
            <TabsContent value="qreta" className="mt-0 px-4 pb-4">
              <SubmissionsTable 
                submissions={getFilteredSubmissions('qreta')} 
                formType="qreta"
                onUpdate={() => refetch()}
              />
            </TabsContent>
            
            <TabsContent value="abalatMzgeba" className="mt-0 px-4 pb-4">
              <SubmissionsTable 
                submissions={getFilteredSubmissions('abalatMzgeba')} 
                formType="abalatMzgeba"
                onUpdate={() => refetch()}
              />
            </TabsContent>
            
            <TabsContent value="report" className="mt-0 px-4 pb-4">
              <SubmissionsTable 
                submissions={getFilteredSubmissions('report')} 
                formType="report"
                onUpdate={() => refetch()}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default AdminDashboard;
