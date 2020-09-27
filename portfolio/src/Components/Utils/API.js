
import reactPortfolio from "../Images/reactPortfolio.png";
import binOut from "../Images/binOut.png";
import musicApp from "../Images/musicApp.png";

export default [
    {
        sys: {
            id: "1"
        },
        fields: {

            date:"September 15 2020",
            projectName: "REACT PORTFOLIO",
            description:
                "This is Simple portfolio which is developed using React,React router, React Hooks and Material UI.",
            githubLink: "https://github.com/marasinipradeep/pradeep-marasini-react-portfolio",
            liveLink: "https://binout.herokuapp.com/",
            demoLink: "https://www.youtube.com/watch?v=KxiwXnkHCB8&feature=youtu.be",

            technoligiesUsed: [
                "React",
                "React Hooks",
                "context API",
                "Reducer",
                "Material UI"
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: reactPortfolio
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

            date:"September 15 2020",
            projectName: "BIN OUT",
            description:
                "Bin-out is an application which allows users to submit a request for their bins to be taken out for collection when they are unable to.",
            githubLink: "https://github.com/benorule/bin-out",
            liveLink: "https://binout.herokuapp.com/",
            demoLink: "https://www.youtube.com/watch?v=KxiwXnkHCB8&feature=youtu.be",

            technoligiesUsed: [
                "Node",
                "Express",
                "Mysql",
                "HandleBar"
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: binOut
                        }
                    }
                },
            ]
        }
    },

    {
        sys: {
            id: "3"
        },
        fields: {

            date:"July 10 2020",
            projectName: "MUSIC APP",
            description:
                "Music app is a music application that plays a song based upon responses to questions.",
            githubLink: "https://github.com/marasinipradeep/music-app",
            liveLink: "https://marasinipradeep.github.io/music-app/",

            technoligiesUsed: [
                "HTML",
                "CSS",
                "Javascript",
                "Jquery",
                "Youtube/GIPHY APIS"
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: musicApp
                        }
                    }
                },
            ]
        }
    },


    
];
