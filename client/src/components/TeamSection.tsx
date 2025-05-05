import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Award, Trophy, Phone, Mail, ExternalLink } from "lucide-react";

export default function TeamSection() {
  const executives = [
    {
      name: "Sanjeev Kumar",
      position: "Founder & CEO",
      photo: "/ceo.jpg",
      initials: "SK",
      phone: "7678400486",
      email: "aggroupsanjeev@gmail.com",
      qualification: "20+ years of security experience",
      achievements: [
        "Established AG MANPOWER Service in 2016",
        "Built a team of 100+ security professionals",
        "Secured contracts with major institutions and corporations"
      ]
    },
    {
      name: "Savita",
      position: "Managing Director",
      photo: "/director.jpg",
      initials: "AG",
      phone: "9871489437",
      email: "info@agsecurityservice.com",
      qualification: "MBA in Business Management",
      achievements: [
        "Led business expansion across the Delhi NCR region",
        "Implemented operational excellence initiatives",
        "Achieved 40% year-on-year company growth"
      ]
    },
    {
      name: "Nandini",
      position: "Customer Relationship Manager",
      photo: "/crm.jpg",
      initials: "RS",
      phone: "9876543210",
      email: "operations@agsecurityservice.com",
      qualification: "7+ years of Customer Relationship",
      achievements: [
        "Oversees security operations across all client locations",
        "Developed staff training and certification programs",
        "Implemented security audit and compliance protocols"
      ]
    }
  ];

  return (
    <section id="team" className="py-16 bg-slate-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-primary dark:text-[#2fc265]  mb-4">
            Our Leadership Team
          </h2>
          <p className="max-w-2xl mx-auto">
            Meet the experienced professionals who lead AG MANPOWER Service with dedication and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((executive, index) => (
            <Card key={index} className="bg-light overflow-hidden transition-all duration-300 hover:shadow-lg hover:dark:shadow-[0_4px_20px_rgba(255,255,255,0.2)] ">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="w-28 h-28 mb-4 border-2 border-primary">
                    <AvatarImage src={executive.photo} alt={executive.name} />
                    <AvatarFallback className="bg-primary text-white text-xl">
                      {executive.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold font-heading text-primary dark:text-white">{executive.name}</h3>
                  <p className="text-secondary dark:text-[#d89f2c] font-medium">{executive.position}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-primary dark:text-[#f7389a] " />
                    <span>{executive.qualification}</span>
                  </p>
                  {/* <p className="text-sm mb-2 flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary dark:text-[#f7389a] " />
                    <a href={`tel:${executive.phone}`} className="hover:text-secondary transition-colors">
                      {executive.phone}
                    </a>
                  </p> */}
                  <p className="text-sm flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-primary dark:text-[#f7389a]" />
                    <a href={`mailto:${executive.email}`} className="hover:text-secondary transition-colors truncate">
                      {executive.email}
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium flex items-center mb-2">
                    <Trophy className="h-4 w-4 mr-2 text-secondary" />
                    Key Achievements:
                  </p>
                  <ul className="text-sm space-y-1">
                    {executive.achievements.map((achievement, idx) => (
                      <li key={idx} className="pl-6 relative">
                        <span className="absolute left-0 top-2 w-2 h-2 bg-secondary rounded-full"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg">
            Our leadership team is backed by dedicated professionals committed to providing excellent security services.
          </p>
          <div className="mt-6 flex justify-center items-center">
            <div className="flex items-center text-primary">
              <Users className="h-6 w-6 mr-2 dark:text-[#f24a38] " />
              <span className="font-bold text-lg dark:text-[#2fc265] ">100+ Security Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}