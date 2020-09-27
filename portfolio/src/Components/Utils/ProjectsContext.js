import React, { createContext, useReducer, useContext } from 'react'
import API from "./API"

const ProjectsContext = createContext();
const { Provider } = ProjectsContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "loadAndSet":
            return {
                ...state,
                loading: false
            };
        case "loading":
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }

}

function ProjectsProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, {
        sys:{
            id:0,
        },
        fields:{
            projectName:"",
            description:"",
            githubLink:"",
            liveLink:"",
            demoLink:""
        },
        technoligiesUsed:[],
        images:[
            {
                fields:{
                    file:{
                        url:""
                    }
                }
            }
        ]

    });
    return <Provider value={[state, dispatch]}{...props} />
}

function useProjectsContext() {
    return useContext(ProjectsContext)
}

export { ProjectsProvider, useProjectsContext }


