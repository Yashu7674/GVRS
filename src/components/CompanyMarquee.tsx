
const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png?20230620122121",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Intel_logo_%282020%2C_light_blue%29.svg/2560px-Intel_logo_%282020%2C_light_blue%29.svg.png?20211214194140",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png?20180716213716",
  },
  {
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png",
  },
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Accenture_logo.svg/2560px-Accenture_logo.svg.png?20210901032532",
  },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Infosys_Technologies_logo.svg/1200px-Infosys_Technologies_logo.svg.png?20140815041657",
  },
  {
    name: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1920px-Wipro_Primary_Logo_Color_RGB.svg.png?20220321185443",
  },
];

export default function CompanyMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap h-16 flex items-center">
      {/* Custom animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 25s linear infinite;
          }
        `}
      </style>

      <div className="marquee">
        {companies.map((company, index) => (
          <span
            key={index}
            className="mx-8 text-lg font-semibold text-gray-700 inline-block"
          >
            {/* {company} */}
            <img src={company.logo} alt={company.name} className="h-8 inline-block" />
          </span>
        ))}
        {/* Duplicate for smooth loop */}
        {companies.map((company, index) => (
          <span
            key={`dup-${index}`}
            className="mx-8 text-lg font-semibold text-gray-700 inline-block"
          >
            <img src={company.logo} alt={company.name} className="h-8 inline-block" />
          </span>
        ))}
        {companies.map((company, index) => (
          <span
            key={`dup-${index}`}
            className="mx-8 text-lg font-semibold text-gray-700 inline-block"
          >
            <img src={company.logo} alt={company.name} className="h-8 inline-block" />
          </span>
        ))}
        {companies.map((company, index) => (
          <span
            key={`dup-${index}`}
            className="mx-8 text-lg font-semibold text-gray-700 inline-block"
          >
            <img src={company.logo} alt={company.name} className="h-8 inline-block" />
          </span>
        ))}
        
      </div>
    </div>
  );
}
