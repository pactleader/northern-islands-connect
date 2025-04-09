
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About Our Office" 
        background="https://images.unsplash.com/photo-1426604966848-d7adac402bff"
      >
        <p>
          Learn about the Northern Islands Mayor's Office - our mission, vision, and commitment to serving 
          the people and preserving the natural beauty of the Northern Islands.
        </p>
      </PageHeader>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <div className="h-1 w-20 bg-ocean mb-6"></div>
              <p className="mb-4 text-gray-700">
                The Northern Islands Mayor's Office is dedicated to representing the interests of the Northern Islands 
                and their people, preserving our cultural heritage, and protecting our natural resources while promoting 
                sustainable development and improving quality of life for all residents and descendants.
              </p>
              <p className="text-gray-700">
                We strive to ensure that the unique beauty, cultural significance, and natural resources of the Northern 
                Islands are preserved for current and future generations, while working to create opportunities for 
                sustainable habitation, visitation, and economic development.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                alt="Northern Islands landscape" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision & Values</h2>
            <div className="h-1 w-20 bg-ocean mx-auto my-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-ocean-dark">Vision</h3>
              <p className="text-gray-700">
                To create a sustainable future for the Northern Islands where cultural heritage thrives, natural 
                resources are protected, and communities are empowered to prosper in harmony with the environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-island-dark">Guiding Principles</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Environmental Stewardship</li>
                <li>• Cultural Preservation</li>
                <li>• Community Empowerment</li>
                <li>• Sustainable Development</li>
                <li>• Transparency & Accountability</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-sand-dark">Goals</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Preservation of natural resources</li>
                <li>• Support for sustainable resettlement</li>
                <li>• Improved accessibility to the islands</li>
                <li>• Documentation of cultural heritage</li>
                <li>• Economic opportunities for residents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">History of the Northern Islands</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              The Northern Islands of the Commonwealth of the Northern Mariana Islands (CNMI) have a rich and complex 
              history spanning thousands of years. These islands were first settled by Chamorro peoples thousands 
              of years ago, as evidenced by archaeological findings throughout the archipelago.
            </p>
            <p className="mb-4">
              Following European contact in the 16th century, the islands came under successive colonial administrations - 
              Spanish, German, and Japanese - before becoming part of the Trust Territory of the Pacific Islands 
              administered by the United States after World War II. In 1978, the Northern Mariana Islands became a 
              Commonwealth in political union with the United States.
            </p>
            <p className="mb-4">
              The Northern Islands have faced various challenges throughout their history, including volcanic 
              eruptions, typhoons, and changing political landscapes. Most notably, the residents of Pagan were 
              evacuated in 1981 following a major volcanic eruption, and Anatahan experienced significant eruptions 
              in the early 2000s.
            </p>
            <p>
              Today, while most of the Northern Islands are currently uninhabited, they remain culturally and 
              historically significant to the people of the CNMI. The Northern Islands Mayor's Office works to 
              maintain connections to these islands, preserve their cultural heritage, and explore possibilities 
              for sustainable future use and potential resettlement.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
