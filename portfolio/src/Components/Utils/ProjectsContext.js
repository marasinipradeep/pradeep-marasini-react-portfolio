import React, { createContext, useReducer, useContext } from 'react'
import API from "./API"

const ProjectsContext = createContext();
const { Provider } = ProjectsContext;

const reducer = (state, action) => {
   console.log("API");
   console.log(API)
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

    const [state, dispatch] = useReducer(reducer,API )
        
    return <Provider value={[state, dispatch]}{...props} />
}

function useProjectsContext() {
    return useContext(ProjectsContext)
}

export { ProjectsProvider, useProjectsContext }


