import Layout from '../components/Layout';

const Staff = () => {
  // Create a data URL for a placeholder image
  const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%230066B3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='white'%3EStaff Member%3C/text%3E%3C/svg%3E";

  // Separate the mayor from the rest of the team
  const mayor = {
    name: "Ramon \"RB\" Jose Blas Camacho",
    title: "Mayor",
    image: "/images/mayor-camacho.webp"
  };

  const managementTeam = [
    {
      name: "Priscilla Iakopo",
      title: "Chief of Staff",
      image: placeholderImage
    },
    {
      name: "Jojo Attao",
      title: "Operations Director",
      image: placeholderImage
    },
    {
      name: "Juanette Sablan",
      title: "Human Resources Director",
      image: placeholderImage
    },
    {
      name: "Manny Pangelinan",
      title: "Budget Officer",
      image: placeholderImage
    },
    {
      name: "Martin Pangelinan",
      title: "Dog Control Program Manager",
      image: placeholderImage
    },
    {
      name: "Frankie Camacho",
      title: "Marriage Coordinator",
      image: placeholderImage
    },
    {
      name: "Janice Celis",
      title: "Street and Home Numbering Manager",
      image: placeholderImage
    },
    {
      name: "Maria Takai",
      title: "Administrative Supervisor",
      image: placeholderImage
    },
    {
      name: "Hiroko Tenorio",
      title: "International Exchange Program Coordinator",
      image: placeholderImage
    },
    {
      name: "Jeff Cabrera",
      title: "Procurement Manager",
      image: placeholderImage
    },
    {
      name: "Ray Dela Cruz",
      title: "Compliance Officer",
      image: placeholderImage
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Management Team</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          The Saipan Mayor's Office management maintains a resilient stance by collaboratively upholding the Saipan Mayor's mission of fostering a Safe Community, Safe Village, and A Clean Island.
        </p>
        
        {/* Mayor section - single row */}
        <div className="mb-16">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
            <div className="w-full max-w-xs aspect-[3/4] overflow-hidden pt-4">
              <img
                src={mayor.image}
                alt={mayor.name}
                className="w-full h-full object-cover"
                width="400"
                height="533"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{mayor.name}</h3>
              <p className="text-xl text-gray-600">{mayor.title}</p>
            </div>
          </div>
        </div>
        
        {/* Rest of the management team */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Management Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
              <div className="w-full max-w-xs mx-auto aspect-[3/4] overflow-hidden pt-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  width="400"
                  height="533"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">8:00 AM to 4:00 PM (M-F)</p>
              <p className="text-gray-600">Open During Lunch Hours</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">2799 Teer Drive Suite A</p>
              <p className="text-gray-600">Saipan MP, 96950</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">(670) 234-6208</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">saipanmayor@mos.gov.mp</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Staff;
