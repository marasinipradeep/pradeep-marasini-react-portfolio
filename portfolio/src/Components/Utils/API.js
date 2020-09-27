
import coffeMaker from "../Images/pradeepPhoto.jpg";

export default [
    {
        sys: {
            id: "1"
        },
        fields: {

            date:"September 15 2020",
            projectName: "Portfolio",
            description:
                "This is Simple portfolio which is developed using React,React router, React Hooks and Material UI",
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
                            url: coffeMaker
                        }
                    }
                },
            ]
        }
    },

    {
        sys: {
            id: "1"
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
                            url: coffeMaker
                        }
                    }
                },
            ]
        }
    },


    
];
