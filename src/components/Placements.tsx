import CompanyMarquee from "./CompanyMarquee";
import NavigateButton from "./NavigateButton";

const Placements = () => {
  return (
    <section className="bg-[#e9f1f5] py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 my-10">
          {/* Left Text Block */}
          <div className="md:w-1/2">
            <h2 className="text-6xl font-bold text-teal-900 mb-4">Placements</h2>
            <p className="text-gray-700 leading-relaxed">
              At GVR&S, the commitment to fostering career-ready graduates is evident
              through its robust placement program. The institution boasts a proactive
              Training and Placement Cell that coordinates with leading companies
              across various sectors.
            </p>
          </div>

          {/* Right Stats Block */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start gap-6">
            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row gap-10 text-center md:text-left">
              <div>
                <p className="text-5xl font-bold text-orange-600">₹ 53 LPA</p>
                <p className="text-gray-600">Highest Package</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-teal-900">70%</p>
                <p className="text-gray-600">Placement Percentage</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-teal-900">560</p>
                <p className="text-gray-600">Placed in 2025</p>
              </div>
            </div>

            {/* Button Below Stats */}
            <div className="flex gap-4">
              <NavigateButton text="Placements" />
              <NavigateButton text="Contact Us" />
            </div>
          </div>
        </div>
        <CompanyMarquee />
      </div>
    </section>
  );
};

export default Placements;

