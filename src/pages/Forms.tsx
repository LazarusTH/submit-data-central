
import { Link } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { FileText, UserCheck, FileBarChart, ClipboardList } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Forms = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-dataBlue mb-8">የማመልከቻ ቅጾች</h1>
          <p className="text-center text-gray-600 mb-12">
            እባክዎን የሚፈልጉትን የአገልግሎት ማመልከቻ ቅጽ ይምረጡ
          </p>
          
          <div className="grid gap-6">
            {/* Abetuta Form */}
            <Card className="border-2 hover:border-dataBlue transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-dataBlue/10 p-2 rounded-full">
                    <FileText className="h-6 w-6 text-dataBlue" />
                  </div>
                  <CardTitle>አበቱታ ቅጽ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  የአበቱታ ማመልከቻ ቅጽን በመሙላት አገልግሎቱን ማግኘት ይችላሉ። እባክዎን ሁሉንም መረጃዎች በትክክል ይሙሉ።
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-dataBlue hover:bg-dataBlue-dark">
                  <Link to="/abetuta-form">ቅጹን ይሙሉ</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Qreta Form */}
            <Card className="border-2 hover:border-dataBlue transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-dataBlue/10 p-2 rounded-full">
                    <ClipboardList className="h-6 w-6 text-dataBlue" />
                  </div>
                  <CardTitle>ቅሬታ ማቅረቢያ ቅጽ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ቅሬታዎን ለመግለጽ ይህንን ቅጽ ይሙሉ። ጥያቄዎ በአስቸኳይ ምላሽ ያገኛል።
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-dataBlue hover:bg-dataBlue-dark">
                  <Link to="/qreta-form">ቅጹን ይሙሉ</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Abalat Mzgeba Form */}
            <Card className="border-2 hover:border-dataBlue transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-dataBlue/10 p-2 rounded-full">
                    <UserCheck className="h-6 w-6 text-dataBlue" />
                  </div>
                  <CardTitle>አባላት ምዝገባ ቅጽ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  አዲስ አባል ለመመዝገብ ይህንን ቅጽ ይሙሉ። የተሟላ መረጃ ማቅረብ ያስፈልጋል።
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-dataBlue hover:bg-dataBlue-dark">
                  <Link to="/abalat-mzgeba-form">ቅጹን ይሙሉ</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Report Form */}
            <Card className="border-2 hover:border-dataBlue transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-dataBlue/10 p-2 rounded-full">
                    <FileBarChart className="h-6 w-6 text-dataBlue" />
                  </div>
                  <CardTitle>ሪፖርት ማቅረቢያ ቅጽ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  አስፈላጊ ሪፖርቶችን እና ጥቆማዎችን ለማቅረብ ይህን ቅጽ ይሙሉ።
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-dataBlue hover:bg-dataBlue-dark">
                  <Link to="/report-form">ቅጹን ይሙሉ</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Forms;
