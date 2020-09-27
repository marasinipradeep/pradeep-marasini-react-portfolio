import webDeveloper from "./images/officeWorker.jpeg";
import coffeMaker from "./images/coffeMaker.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      isOnline:true,
      name: "Bryan Hocking",
      slug: "Bryan-Hocking",
      type: "Coffe Maker",
      jobTitle: "Coffe Maker",
      experience: "3-years",
      email: "Bryan-Hocking@gmail.com",
      contactNumber: "0420719902",
      description:
        "Have worked as barista.Can make all the flavaour of coffe.Can work in busy environment",

      skills: [
        "Capacino",
        "Latte",
        "Black short"
      ],
      images: [
        {
          fields: {
            file: {
              url: coffeMaker
            }
          }
        },
      ]
    }
  },

  {
    sys: {
      id: "2"
    },
    fields: {
      isOnline:true,
      name: "Pradeep Marasini",
      slug: "Pradeep-Marasini",
      type: "Full stack web developer",
      jobTitle: "Full Stack Web Developer",
      experience: "3-years",
      email: "marasinipradeep@gmail.com",
      contactNumber: "0420719901",
      description:
        "Full Stack Developer with a background in electronics and communication engineering utilising experience in banking / payment application, embedded system.",

      skills: [
        "Web design",
        "Logo design",
      ],
      images: [
        {
          fields: {
            file: {
              url: webDeveloper
            }
          }
        },
      ]
    }
  }
   
];
