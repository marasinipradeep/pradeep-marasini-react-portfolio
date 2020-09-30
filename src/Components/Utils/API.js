
import reactPortfolio from "../Images/reactPortfolio.png";
import binOut from "../Images/binOut.png";
import musicApp from "../Images/musicApp.png";
import weatherDashboard from "../Images/weatherDashboard.png";
import blb from "../Images/blb.jpeg";
import employeeDirectory from "../Images/employeeDirectory.png"

export default [
    {
        sys: {
            id: "1"
        },
        fields: {

            date:"September 27 2020",
            projectName: "REACT PORTFOLIO",
            description:
                "This is a portfolio which is developed using React,React router, React Hooks and Material UI.It is fully mobile responsive and fits on small screen.",
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

            date:"September 10 2020",
            projectName: "Employee Directory",
            description:
                "This is an app which allows an users to view entire employee directory at once so that they can  have quick access to their information. This app List all the employees and renders on table view. It also allows to filter an employee by input, filter an employee by  gender only and sort by Name in an ascending or descending order",
            githubLink: "https://github.com/marasinipradeep/employee-directory",
            liveLink: "https://marasinipradeep.github.io/employee-directory/",

            technoligiesUsed: [
                "React",
                "React Components",
                "React class based state",
                "Bootstrap"
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: employeeDirectory
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

            date:"August 15 2020",
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
            id: "4"
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

    {
        sys: {
            id: "5"
        },
        fields: {

            date:"June 01 2020",
            projectName: "WEATHER-DASHBOARD",
            description:
                "This is a weather application's. It is using third-party APIs to access weather data and weather dashboard functionality is build by dynamically updated HTML, CSS, JAVASCRIPT and JQUERY.",
            githubLink: "https://github.com/marasinipradeep/weather_dashboard",
            liveLink: "https://marasinipradeep.github.io/weather_dashboard/",

            technoligiesUsed: [
                "HTML",
                "CSS",
                "Javascript",
                "Jquery",
                "Weather API"
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: weatherDashboard
                        }
                    }
                },
            ]
        }
    },

    {
        sys: {
            id: "6"
        },
        fields: {

            date:"June 01 2016",
            projectName: "BRANCHLESS BANKING",
            description:
                "Branchless Banking enables a number of banking partners to offer their product and services to far flung districts of Nepal where traditional bank branches are not established.",
                githubLink:"https://citytech.global/",
                liveLink: "https://citytech.global/",

            technoligiesUsed: [
                "C/C++",
                "SqlLight",
                "Java",
                "Postgresql",
                ""
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: blb
                        }
                    }
                },
            ]
        }
    },


    
];
