import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Activity, Users, TreePine, History } from 'lucide-react';

const IslandDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Island data - in a real application this would come from an API or database
  const islandData = {
    'agrihan': {
      name: 'Agrihan',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      location: '18°46′N 145°40′E',
      area: '44 sq km',
      population: 'Currently uninhabited (historically up to 100 residents)',
      highestPoint: 'Mount Agrihan (965 m) - highest point in Micronesia',
      description: 'Agrihan, also known as Agrigan, is a large volcanic island with the highest peak in Micronesia. Its volcanic cone dominates the landscape, surrounded by lush forests and coastal areas. The island has been uninhabited since its evacuation in 1990 due to volcanic activity, though it has historical significance as a home to Chamorro and Carolinian communities.',
      history: 'Agrihan has been inhabited intermittently throughout history by Chamorro and Carolinian peoples. It came under Spanish control in the 16th century, then German administration, Japanese mandate, and finally became part of the CNMI. The island was evacuated in 1990 due to volcanic activity, though some former residents hope to return one day.',
      nature: 'The island features diverse ecosystems from coastal strand vegetation to cloud forests near the summit. It hosts numerous endemic plant and bird species, as well as introduced deer and feral pigs. The surrounding waters are home to coral reefs and diverse marine life.',
      landmarks: [
        'Mount Agrihan - the highest point in Micronesia',
        'Black sand beaches on the eastern shore',
        'Ancient Chamorro archaeological sites',
        'The abandoned village site at the southwestern coast'
      ]
    },
    'pagan': {
      name: 'Pagan',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      location: '18°08′N 145°47′E',
      area: '47.7 sq km',
      population: 'Currently uninhabited (evacuated in 1981)',
      highestPoint: 'Mount Pagan (570 m)',
      description: 'Pagan consists of two volcanoes connected by a narrow isthmus, creating a distinctive figure-eight shape. The island is known for its active northern volcano, black sand beaches, and freshwater lakes. It was evacuated after a major eruption in 1981, though it has historical significance and natural beauty that continue to draw interest from researchers and former residents.',
      history: 'Pagan has evidence of Chamorro settlements dating back thousands of years. It came under successive colonial administrations (Spanish, German, Japanese) before becoming part of the CNMI. The island was evacuated following a major volcanic eruption in 1981, displacing all residents. There have been ongoing discussions about potential resettlement.',
      nature: 'The island features stark volcanic landscapes, black sand beaches, hot springs, and freshwater lakes. Despite volcanic activity, it supports various plant species and provides habitat for seabirds. The surrounding marine environment is rich with coral reefs and diverse sea life.',
      landmarks: [
        'Mount Pagan - active volcano with regular emissions',
        'Inner caldera lakes',
        'Black sand beaches',
        'World War II Japanese military installations',
        'Abandoned village sites with remaining structures'
      ]
    },
    'alamagan': {
      name: 'Alamagan',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      location: '17°36′N 145°50′E',
      area: '11.2 sq km',
      population: 'Currently uninhabited (historically up to 35 residents)',
      highestPoint: 'Mount Alamagan (744 m)',
      description: 'Alamagan is a small but steep volcanic island with dramatic cliffs and a rugged coastline. The island is densely vegetated and features a volcanic crater at its summit. Though currently uninhabited, it has historical significance as a residence for Chamorro and Carolinian families and is occasionally visited by former residents and researchers.',
      history: 'Alamagan has a history of intermittent habitation by Chamorro and Carolinian peoples. Like other Northern Islands, it passed through Spanish, German, and Japanese control before becoming part of the CNMI. The last permanent residents left in the late 20th century due to limited resources and facilities.',
      nature: 'The island features steep volcanic slopes covered with dense vegetation, including coconut groves and native forest. It supports various bird species and has intact coastal ecosystems. The difficult terrain has limited human impact on much of the island.',
      landmarks: [
        'Mount Alamagan and its crater',
        'Coastal cliff formations',
        'Traditional settlement sites',
        'Natural freshwater springs'
      ]
    },
    'anatahan': {
      name: 'Anatahan',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      location: '16°22′N 145°40′E',
      area: '32.3 sq km',
      population: 'Currently uninhabited',
      highestPoint: 'East Crater (788 m)',
      description: 'Anatahan is known for its dramatic volcanic activity, most notably the major eruption in 2003. The island features a large caldera with two crater lakes when not active. Its eastern side was significantly altered by recent eruptions, creating a stark landscape of volcanic ash and new formations.',
      history: 'Anatahan has archaeological evidence of early Chamorro presence but was not continuously inhabited historically. It gained fame as the site where Japanese holdouts lived after World War II until 1951, unaware the war had ended. The island experienced major volcanic eruptions beginning in 2003, changing its landscape significantly.',
      nature: 'The ecology of Anatahan has been dramatically altered by volcanic activity, with areas covered in ash and new volcanic material. However, parts of the island retain vegetation, and the surrounding waters support marine ecosystems.',
      landmarks: [
        'East Crater - site of 2003 eruption',
        'Caldera with crater lakes (when inactive)',
        'WWII Japanese holdout sites',
        'Dynamic volcanic landscapes'
      ]
    },
    'farallon-de-pajaros': {
      name: 'Farallon de Pajaros',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      location: '20°33′N 144°54′E',
      area: '2.6 sq km',
      population: 'Uninhabited',
      highestPoint: 'Farallon de Pajaros (360 m)',
      description: 'Farallon de Pajaros, also known as Uracas, is the northernmost island of the CNMI. This small volcanic island is known for its active volcano and rich bird population, particularly seabirds that nest on its cliffs.',
      history: 'The island has never been permanently inhabited due to its small size and active volcanic nature. It was first documented by European explorers in the 16th century and has since been recognized for its ecological importance as a bird sanctuary.',
      nature: 'The island is dominated by its active volcano and steep cliffs that provide ideal nesting sites for seabirds. The surrounding waters are rich in marine life, and the island\'s isolation has helped preserve its natural ecosystems.',
      landmarks: [
        'Active volcano crater',
        'Seabird nesting colonies',
        'Steep coastal cliffs',
        'Marine protected area'
      ]
    },
    'guguan': {
      name: 'Guguan',
      image: 'https://images.unsplash.com/photo-1542259009477-d6258e8c8e2d',
      location: '17°18′N 145°50′E',
      area: '3.9 sq km',
      population: 'Uninhabited',
      highestPoint: 'Mount Guguan (287 m)',
      description: 'Guguan is a small volcanic island known for its pristine beaches and clear waters. The island is uninhabited and serves as an important wildlife conservation area, particularly for seabirds and marine life.',
      history: 'Guguan has archaeological evidence of early Chamorro presence but has not been permanently inhabited in modern times. The island was recognized for its ecological importance and designated as a wildlife sanctuary to protect its unique ecosystems.',
      nature: 'The island features diverse vegetation, from coastal strand to forested slopes. Its isolation and protected status have helped maintain healthy populations of seabirds and marine life in the surrounding waters.',
      landmarks: [
        'Mount Guguan',
        'Pristine beaches',
        'Seabird nesting sites',
        'Coral reef ecosystems'
      ]
    },
    'maug': {
      name: 'Maug',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      location: '20°02′N 145°13′E',
      area: '2.1 sq km',
      population: 'Uninhabited',
      highestPoint: 'North Island (227 m)',
      description: 'Maug consists of three small islands that form the rim of a submerged volcano crater. The islands are known for their unique geological formation and rich marine life in the central lagoon.',
      history: 'Maug has never been permanently inhabited due to its small size and lack of freshwater sources. The island was first documented by European explorers and has since been recognized for its geological significance and marine biodiversity.',
      nature: 'The three islands of Maug form a natural harbor that protects a rich marine ecosystem. The central lagoon is home to diverse coral reefs and marine life, while the islands themselves support various seabird species.',
      landmarks: [
        'Three islands forming a volcanic rim',
        'Central lagoon with marine life',
        'Seabird nesting colonies',
        'Underwater volcanic features'
      ]
    },
    'sarigan': {
      name: 'Sarigan',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206',
      location: '16°42′N 145°47′E',
      area: '4.9 sq km',
      population: 'Uninhabited',
      highestPoint: 'Mount Sarigan (538 m)',
      description: 'Sarigan is a wildlife sanctuary known for its lush forests and successful conservation efforts. The island has recovered from past environmental impacts and now supports diverse plant and animal species.',
      history: 'Sarigan has evidence of early Chamorro presence but was not continuously inhabited. The island was impacted by introduced species and human activities but has seen significant recovery through conservation efforts.',
      nature: 'The island features dense forests and diverse vegetation. Conservation efforts have helped restore native species and control invasive plants and animals, making Sarigan a success story in island ecosystem restoration.',
      landmarks: [
        'Mount Sarigan',
        'Restored native forests',
        'Seabird nesting sites',
        'Marine protected area'
      ]
    },
    'asuncion': {
      name: 'Asuncion',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      location: '19°41′N 145°24′E',
      area: '7.4 sq km',
      population: 'Uninhabited',
      highestPoint: 'Mount Asuncion (857 m)',
      description: 'Asuncion is a remote volcanic island with steep slopes and important seabird nesting sites. The island\'s dramatic landscape and isolation have helped preserve its natural ecosystems.',
      history: 'Asuncion has never been permanently inhabited due to its remote location and challenging terrain. The island was first documented by European explorers and has since been recognized for its ecological importance.',
      nature: 'The island features steep volcanic slopes and diverse vegetation. Its isolation and protected status have helped maintain healthy populations of seabirds and preserve its natural ecosystems.',
      landmarks: [
        'Mount Asuncion',
        'Steep volcanic slopes',
        'Seabird nesting colonies',
        'Marine protected area'
      ]
    }
    // Additional islands would be added here
  };

  // Get the current island data or redirect if not found
  const island = id ? islandData[id as keyof typeof islandData] : null;

  useEffect(() => {
    if (!island) {
      navigate('/islands', { replace: true });
    }
  }, [island, navigate]);

  if (!island) {
    return null; // Will redirect in useEffect
  }

  return (
    <Layout>
      <PageHeader 
        title={island.name} 
        background={island.image}
      >
        <p>{island.description.split('.')[0]}.</p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/islands')}
              className="flex items-center"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Islands
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About {island.name} Island</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">{island.description}</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center">
                  <History size={20} className="mr-2 text-ocean-dark" />
                  History
                </h3>
                <p className="mb-4">{island.history}</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center">
                  <TreePine size={20} className="mr-2 text-island-dark" />
                  Natural Features
                </h3>
                <p className="mb-4">{island.nature}</p>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Notable Landmarks</h3>
                <ul className="list-disc pl-5 mb-4">
                  {island.landmarks.map((landmark, index) => (
                    <li key={index} className="mb-1">{landmark}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">{island.name} Island Facts</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-gray-700 font-medium">
                      <MapPin size={18} className="mr-2 text-ocean-dark" />
                      Location
                    </div>
                    <p className="ml-7 text-gray-600">{island.location}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-700 font-medium">
                      <Activity size={18} className="mr-2 text-ocean-dark" />
                      Highest Point
                    </div>
                    <p className="ml-7 text-gray-600">{island.highestPoint}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-700 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] mr-2 text-ocean-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Land Area
                    </div>
                    <p className="ml-7 text-gray-600">{island.area}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-700 font-medium">
                      <Users size={18} className="mr-2 text-ocean-dark" />
                      Population
                    </div>
                    <p className="ml-7 text-gray-600">{island.population}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <img 
                    src={island.image} 
                    alt={island.name} 
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">View of {island.name} Island</p>
                </div>
              </Card>

              <div className="mt-6">
                <Button asChild className="w-full">
                  <a href="/contact">Register for Island Visit</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IslandDetail;
