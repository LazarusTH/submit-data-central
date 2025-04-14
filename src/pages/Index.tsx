
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { FileText, UserCheck, FileBarChart, ClipboardList } from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dataBlue mb-6">Data Central Platform</h1>
            <p className="text-xl text-gray-600 mb-10">
              The secure platform for data submission and management.
              Submit forms easily without requiring registration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-dataBlue hover:bg-dataBlue-dark">
                <Link to="/admin">Admin Dashboard</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-dataBlue text-dataBlue hover:bg-dataBlue/5">
                <a href="#forms">Submit a Form</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section id="forms" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-dataBlue">Submit Your Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Abetuta Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Abetuta Form</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Submit your Abetuta information securely through our platform.
              </p>
              <Button asChild variant="outline" className="w-full border-dataBlue text-dataBlue hover:bg-dataBlue/5">
                <Link to="/abetuta-form">Open Form</Link>
              </Button>
            </div>
            
            {/* Qreta Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ClipboardList className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qreta Form</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Complete and submit your Qreta documentation quickly and easily.
              </p>
              <Button asChild variant="outline" className="w-full border-dataBlue text-dataBlue hover:bg-dataBlue/5">
                <Link to="/qreta-form">Open Form</Link>
              </Button>
            </div>
            
            {/* Abalat Mzgeba Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <UserCheck className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Abalat Mzgeba Form</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Register for Abalat Mzgeba services through our secure registration form.
              </p>
              <Button asChild variant="outline" className="w-full border-dataBlue text-dataBlue hover:bg-dataBlue/5">
                <Link to="/abalat-mzgeba-form">Open Form</Link>
              </Button>
            </div>
            
            {/* Report Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:border-dataBlue/30 transition-all hover:shadow-xl">
              <div className="bg-dataBlue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileBarChart className="text-dataBlue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Report Submission</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Submit reports and incidents through our anonymous reporting system.
              </p>
              <Button asChild variant="outline" className="w-full border-dataBlue text-dataBlue hover:bg-dataBlue/5">
                <Link to="/report-form">Open Form</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dataBlue mb-6">About Data Central</h2>
            <p className="text-lg text-gray-600 mb-6">
              Data Central is a secure platform for submitting and managing important information. 
              Our system ensures your data is handled with the utmost security and confidentiality.
            </p>
            <p className="text-lg text-gray-600">
              Administrators have access to powerful tools for data management, 
              while users can submit forms anonymously without creating an account.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
