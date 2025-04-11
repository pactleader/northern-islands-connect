
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Reports = () => {
  // Sample reports data
  const reports = [
    {
      year: '2023',
      title: 'Citizen Centric Report 2023',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
      description: 'Annual report summarizing the Northern Islands Mayor\'s Office activities, achievements, and financial information for fiscal year 2023.',
      downloadUrl: '#'
    },
    {
      year: '2022',
      title: 'Citizen Centric Report 2022',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      description: 'Annual report summarizing the Northern Islands Mayor\'s Office activities, achievements, and financial information for fiscal year 2022.',
      downloadUrl: '#'
    },
    {
      year: '2021',
      title: 'Citizen Centric Report 2021',
      image: 'https://images.unsplash.com/photo-1586282391129-76a2d92c3a3d',
      description: 'Annual report summarizing the Northern Islands Mayor\'s Office activities, achievements, and financial information for fiscal year 2021.',
      downloadUrl: '#'
    },
    {
      year: '2020',
      title: 'Citizen Centric Report 2020',
      image: 'https://images.unsplash.com/photo-1566207474742-de9244cc5b98',
      description: 'Annual report summarizing the Northern Islands Mayor\'s Office activities, achievements, and financial information for fiscal year 2020.',
      downloadUrl: '#'
    }
  ];

  return (
    <Layout>
      <PageHeader title="Reports">
        <p>
          Access our Citizen Centric Reports and other important publications from the Northern Islands Mayor's Office.
        </p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Citizen Centric Reports</h2>
            <p className="text-gray-600 mt-2">
              These reports provide transparency about our office's activities, achievements, and financial information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report) => (
              <Card key={report.year} className="overflow-hidden">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={report.image} 
                    alt={report.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-ocean-dark text-white py-1 px-3 rounded-bl-lg">
                    <FileText size={16} className="inline mr-1" />
                    {report.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{report.description}</p>
                  <Button asChild className="w-full">
                    <a href={report.downloadUrl}>
                      <Download size={16} className="mr-2" />
                      Download {report.year} CCR
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">About Citizen Centric Reports</h2>
            <p className="mb-4">
              Citizen Centric Reports (CCRs) are designed to provide the public with clear, concise information about government operations. 
              These reports are part of our commitment to transparency and accountability.
            </p>
            <p>
              Each CCR includes information about:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4">
              <li>Our mission and goals</li>
              <li>Key performance metrics</li>
              <li>Financial information</li>
              <li>Challenges and future initiatives</li>
            </ul>
            <p>
              If you have questions about any of our reports, please contact our Administrative Services Manager at admin@nimo.mp.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reports;
