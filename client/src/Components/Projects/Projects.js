import React from 'react';
//import { Link } from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';

import { useProjectsContext } from "../Utils/ProjectsContext";


function Photo(props) {

    const [state, dispatch] = useProjectsContext();
    //const { post, i, comments } = props


    return (
        <figure className="grid-figure">
            <div className="grid-photo-wrap">
                {/* <Link to={`/view/${post.code}`}> */}
                {/* <img src={post.display_src} alt={post.caption} className="grid-photo"></img> */}
                <img src="https://picsum.photos/200/300" className="grid-photo"></img>
                {/* </Link> */}

                <CSSTransitionGroup transitionName="like"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {/* <span key={post.likes} className="likes-heart">{post.likes}</span> */}
                    <span className="likes-heart">sdsdsdsd</span>

                </CSSTransitionGroup>
            </div>

            <figcaption>
                {/* <p>{post.caption}</p> */}
                <div className="control-buttons">
                    {/* <button onClick={props.increment.bind(null,i)} className="likes">&hearts; {post.likes}

                    </button> */}
                    <button className="likes">&hearts;</button>

                    {/* <Link className="button" to ={`/view/${post.code}`}> */}

                    <span className="comment-count">
                        <span className="speech-bubble"></span>
                        {/* {comments[post.code]? comments[post.code].length : 0} */}
                            fdfdfdfgfgfgfg
                        </span>
                    {/* </Link> */}
                </div>
            </figcaption>

        </figure>
    )
}

export default Photo;
