
import cispWebsite from "../Images/cispWebsite.png";
import cispCleaning from "../Images/cispCleaning.png"
import binOut from "../Images/binOut.png";
import musicApp from "../Images/musicApp.png";
import weatherDashboard from "../Images/weatherDashboard.png";
import blb from "../Images/blb.jpeg";
import employeeDirectory from "../Images/employeeDirectory.png";
import goemployee from "../Images/goemployee.png"


export default [

    {
        sys: {
            id: "1"
        },
        fields: {

            date: "September 27 2020",
            projectName: "CISP-Website",
            description:
                "This website is a collection of web pages that helps to inform its user related to their products and services offered",
            githubLink: "",
            liveLink: "https://cisp.com.au/",
            demoLink: "",

            technoligiesUsed: [
                "Front End: HTML5, CSS3, Javascript, GatsbyJs, React, Firebase"
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: cispWebsite
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

            date: "September 27 2020",
            projectName: "CISP-Cleaning-Website",
            description:
                "This website helps to find your local cleaning company near your area which helps to make connection between service provider and service seeker.",
            githubLink: "",
            liveLink: "https://cispcleaning.com.au/",
            demoLink: "",

            technoligiesUsed: [
                "NextJs, React, Firebase"
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: cispCleaning
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
            date: "October 20 2020",
            projectName: "Go Employee",
            description:
                "This application helps to establish a connection between industry owner and job seeker. This is useful for business owner to find workers instantly in busy time.",
            githubLink: "https://github.com/marasinipradeep/Go-Employee",
            liveLink: "https://goemployees.herokuapp.com/",
            demoLink: "https://www.youtube.com/watch?v=BXcqKEGlIlA&feature=youtu.be&ab_channel=PradeepMarasini",

            technoligiesUsed: [
                "React Hooks, Context API, Material UI, Node JS, Express, Mongo DB, Mongoose, JWT, Heroku, Github"
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: goemployee
                        }
                    }
                },
            ]
        }
    },


    // {
    //     sys: {
    //         id: "3"
    //     },
    //     fields: {

    //         date: "September 10 2020",
    //         projectName: "EMPLOYEE DIRECTORY",
    //         description:
    //             "This is an app which allows an users to view entire employee directory at once so that they can  have quick access to their information. This app List all the employees and renders on table view. It also allows to filter an employee by input, filter an employee by  gender only and sort by Name in an ascending or descending order",
    //         githubLink: "https://github.com/marasinipradeep/employee-directory",
    //         liveLink: "https://marasinipradeep.github.io/employee-directory/",

    //         technoligiesUsed: [
    //             "Front End: HTML5, CSS3, Javascript, React, Reducer, Bootstrap",
    //             "Deployment/ Others : Heroku, Github"
    //         ],
    //         images: [
    //             {
    //                 fields: {
    //                     file: {
    //                         url: employeeDirectory
    //                     }
    //                 }
    //             },
    //         ]
    //     }
    // },

    // {
    //     sys: {
    //         id: "4"
    //     },
    //     fields: {

    //         date: "August 15 2020",
    //         projectName: "BIN OUT",
    //         description:
    //             "Bin-out is an application which allows users to submit a request for their bins to be taken out for collection when they are unable to. Once a request is sent, a local employee can choose to accept and fulfil the request. This application is useful for people who are unable to put their bins out, potentially due to be- ing away from their property, having a physical condition or being elderly.",
    //         githubLink: "https://github.com/benorule/bin-out",
    //         liveLink: "https://binout.herokuapp.com/",
    //         demoLink: "https://www.youtube.com/watch?v=KxiwXnkHCB8&feature=youtu.be",

    //         technoligiesUsed: [
    //             "Front End: HTML5, CSS3, Javascript, Handlebars JS, Bootstrap ",
    //             "Back End :Node JS, Express JS, MySQL, Sequelize, Nexmo API ",
    //             "Deployment/ Others : Heroku, Github"
    //         ],
    //         images: [
    //             {
    //                 fields: {
    //                     file: {
    //                         url: binOut
    //                     }
    //                 }
    //             },
    //         ]
    //     }
    // },


    {
        sys: {
            id: "7"
        },
        fields: {

            date: "June 01 2016",
            projectName: "BRANCHLESS BANKING",
            description:
                "This application make easy for non-banking customers to be a part of the financial fabric using technology. BLB enables a number of banking partners to offer their services to remote districts of Nepal where modern bank branches are not established. This innovative solution provide features to deposit, with- draw, fund transfer and pay bills without establishment of physical branch saving huge amount.",
            githubLink: "https://citytech.global/",
            liveLink: "https://citytech.global/",

            technoligiesUsed: [
                "QT, C, C++, Linux "
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
