import { Slide, Zoom } from "react-awesome-reveal";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaSchool,
  FaMapMarkerAlt,
  FaCertificate,
} from "react-icons/fa";

const educationData = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2014 – 2018",
    program: "Regular Program",
    result: "CGPA: 3.08 / 4.00",
  },
  {
    title: "Higher Secondary Certificate (HSC) - Science",
    institution: "Bogura Cantonment Public School and College",
    location: "Bogura, Bangladesh",
    period: "2010 – 2012",
    program: "National Curriculum (Science)",
    result: "GPA: 5.00 / 5.00",
  },
  {
    title: "Secondary School Certificate (SSC) - Science",
    institution: "Bogura Cantonment Board High School",
    location: "Bogura, Bangladesh",
    period: "2008 – 2010",
    program: "National Curriculum (Science)",
    result: "GPA: 5.00 / 5.00",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-base-300 py-20 px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 space-y-3 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-serif">
            Education
          </h2>

          <p className="text-primary text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto tracking-wide font-sans">
            A strong academic foundation, built with passion and precision.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {educationData.map((edu, i) => {
            const cardContent = (
              <div className="w-full bg-base-200 rounded-3xl p-8 border-2 border-secondary shadow-lg shadow-secondary/30 transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_25px_#d6a553cc] cursor-default flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-secondary mb-6">
                    <FaGraduationCap className="text-accent text-3xl" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary font-serif tracking-tight">
                      {edu.title}
                    </h3>
                  </div>

                  <p className="flex items-center gap-2 text-secondary text-sm font-semibold font-sans mb-1">
                    <FaSchool className="text-accent" />
                    {edu.institution}
                  </p>

                  <p className="flex items-center gap-2 text-primary text-sm font-normal font-sans mb-1">
                    <FaMapMarkerAlt className="text-accent" />
                    {edu.location}
                  </p>

                  <p className="flex items-center gap-2 text-secondary text-sm font-semibold font-sans mb-1">
                    <FaCalendarAlt className="text-accent" />
                    {edu.period}
                  </p>

                  <p className="flex items-center gap-2 text-primary text-sm font-normal font-sans">
                    <FaCertificate className="text-accent" />
                    {edu.program}
                  </p>
                </div>

                <div className="mt-6 self-start bg-accent/20 text-accent font-semibold text-sm sm:text-base py-1.5 px-6 rounded-full tracking-wide select-none font-sans shadow-md">
                  {edu.result}
                </div>
              </div>
            );

            // Apply different animations to each card
            if (i === 0) {
              return (
                <Slide key={i} direction="left" triggerOnce>
                  {cardContent}
                </Slide>
              );
            } else if (i === 1) {
              return (
                <Zoom key={i} triggerOnce>
                  {cardContent}
                </Zoom>
              );
            } else {
              return (
                <Slide key={i} direction="right" triggerOnce>
                  {cardContent}
                </Slide>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
