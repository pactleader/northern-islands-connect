
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Users, Target, Clock, MessageSquare } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Project data - in a real application this would come from an API or database
  const projectData = {
    'conservation': {
      title: 'Northern Islands Conservation Initiative',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      status: 'Active',
      timeline: '2020 - Ongoing',
      partners: 'CNMI DLNR, US Fish & Wildlife Service, Micronesia Conservation Trust',
      coordinator: 'Jane Smith, Environmental Programs Director',
      description: 'The Northern Islands Conservation Initiative is a comprehensive program dedicated to preserving the unique ecosystems and biodiversity of the Northern Islands through monitoring, research, and conservation efforts.',
      goals: [
        'Document and monitor the plant and animal species on each of the Northern Islands',
        'Develop and implement conservation plans for threatened or endangered species',
        'Restore native habitats damaged by invasive species or human activities',
        'Establish marine protected areas around key coral reef ecosystems',
        'Create sustainable management practices for future use of the islands'
      ],
      activities: [
        'Regular biodiversity surveys on each island',
        'Invasive species removal programs on Pagan and Alamagan',
        'Marine ecosystem monitoring around all nine islands',
        'Development of conservation area management plans',
        'Educational programs about the Northern Islands' ecosystems'
      ],
      achievements: [
        'Completed comprehensive species inventories for Pagan, Agrihan, and Alamagan',
        'Successfully removed invasive vine species from 60 hectares on Pagan',
        'Established marine protected area around Maug Islands',
        'Published educational materials about Northern Islands ecosystems',
        'Trained 12 local residents in conservation monitoring techniques'
      ],
      upcoming: [
        'Biodiversity survey of Asuncion Island (Q3 2025)',
        'Launch of coral reef restoration project (Q1 2026)',
        'Community conservation workshop series (Q2 2025)',
        'Release of Northern Islands Conservation Strategy document (Q4 2025)'
      ]
    },
    'resettlement': {
      title: 'Community Resettlement Program',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      status: 'Planning Phase',
      timeline: '2023 - 2030',
      partners: 'CNMI Government, US Department of Interior, Northern Islands Community Association',
      coordinator: 'Robert Lee, Community Development Director',
      description: 'The Community Resettlement Program aims to support families who wish to return and settle in the Northern Islands through infrastructure development, transportation assistance, and community building initiatives that respect both environmental concerns and cultural heritage.',
      goals: [
        'Develop sustainable infrastructure for communities on selected Northern Islands',
        'Create regular transportation routes between Saipan and the Northern Islands',
        'Support economic opportunities for residents through sustainable industries',
        'Preserve and incorporate cultural practices in new settlements',
        'Ensure essential services including healthcare, education, and communications'
      ],
      activities: [
        'Feasibility studies for settlements on Pagan and Agrihan',
        'Community consultations with former residents and descendants',
        'Development of sustainability guidelines for new settlements',
        'Infrastructure planning and design',
        'Training programs for potential settlers'
      ],
      achievements: [
        'Completed preliminary feasibility studies for Pagan settlement',
        'Established Northern Islands Community Advisory Board',
        'Secured initial funding for transportation infrastructure',
        'Developed draft sustainable settlement guidelines',
        'Created registry of families interested in resettlement'
      ],
      upcoming: [
        'Public hearing on Pagan resettlement plan (August 2025)',
        'Pilot transportation program launch (November 2025)',
        'Infrastructure development planning workshop (January 2026)',
        'Sustainable living skills training series (March 2026)'
      ]
    },
    'heritage': {
      title: 'Cultural Heritage Preservation',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      status: 'Active',
      timeline: '2022 - Ongoing',
      partners: 'CNMI Historic Preservation Office, Northern Marianas Humanities Council, Indigenous Affairs Office',
      coordinator: 'Maria Santos, Cultural Affairs Coordinator',
      description: 'The Cultural Heritage Preservation project focuses on documenting and preserving the rich cultural heritage, traditions, languages, and historical sites of the Northern Islands for future generations. This initiative works to ensure that the unique cultural identity of the Northern Islands remains vibrant and accessible.',
      goals: [
        'Document oral histories from elders with connections to the Northern Islands',
        'Map and preserve historical and cultural sites on each island',
        'Record and teach traditional practices, crafts, and knowledge',
        'Create accessible archives of Northern Islands cultural materials',
        'Support cultural revitalization initiatives led by community members'
      ],
      activities: [
        'Oral history recording sessions with elders',
        'Archaeological surveys of historical sites',
        'Cultural workshops teaching traditional skills and practices',
        'Development of educational materials about Northern Islands heritage',
        'Community cultural events celebrating Northern Islands traditions'
      ],
      achievements: [
        'Recorded 45 hours of oral histories from 18 elders',
        'Completed archaeological surveys of Pagan and Agrihan',
        'Published bilingual children's book about Northern Islands legends',
        'Created digital archive of historical photographs and documents',
        'Hosted annual Northern Islands Cultural Festival for three consecutive years'
      ],
      upcoming: [
        'Traditional navigation and seafaring workshop (July 2025)',
        'Launch of Northern Islands cultural mobile app (September 2025)',
        'Cultural site preservation training (October 2025)',
        'Intergenerational knowledge sharing retreat (December 2025)'
      ]
    },
    // Additional projects would be added here
  };

  // Get the current project data or redirect if not found
  const project = id ? projectData[id as keyof typeof projectData] : null;

  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null; // Will redirect in useEffect
  }

  return (
    <Layout>
      <PageHeader 
        title={project.title} 
        background={project.image}
      >
        <p>{project.description.split('.')[0]}.</p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/projects')}
              className="flex items-center"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About this Project</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-6">{project.description}</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center">
                  <Target size={20} className="mr-2 text-ocean-dark" />
                  Project Goals
                </h3>
                <ul className="list-disc pl-5 mb-6">
                  {project.goals.map((goal, index) => (
                    <li key={index} className="mb-2">{goal}</li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center">
                  <Clock size={20} className="mr-2 text-island-dark" />
                  Current Activities
                </h3>
                <ul className="list-disc pl-5 mb-6">
                  {project.activities.map((activity, index) => (
                    <li key={index} className="mb-2">{activity}</li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Achievements to Date</h3>
                <ul className="list-disc pl-5 mb-6">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="mb-2">{achievement}</li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Upcoming Milestones</h3>
                <ul className="list-disc pl-5 mb-6">
                  {project.upcoming.map((milestone, index) => (
                    <li key={index} className="mb-2">{milestone}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-gray-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-ocean flex items-center justify-center mr-2">
                        <span className="w-3 h-3 rounded-full bg-white"></span>
                      </div>
                      Status
                    </div>
                    <p className="ml-8 text-gray-600">{project.status}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-700 font-medium">
                      <Calendar size={18} className="mr-2 text-ocean-dark" />
                      Timeline
                    </div>
                    <p className="ml-7 text-gray-600">{project.timeline}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-700 font-medium">
                      <Users size={18} className="mr-2 text-ocean-dark" />
                      Project Partners
                    </div>
                    <p className="ml-7 text-gray-600">{project.partners}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-700 font-medium">
                      <MessageSquare size={18} className="mr-2 text-ocean-dark" />
                      Contact
                    </div>
                    <p className="ml-7 text-gray-600">{project.coordinator}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              </Card>

              <div className="mt-6">
                <Button asChild className="w-full">
                  <a href="/contact">Get Involved with this Project</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
