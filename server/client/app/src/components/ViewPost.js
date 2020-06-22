import React, { Component } from 'react';
import './css/App.css';
import AppNavbar from './AppNavBar';
import { Container} from 'reactstrap';
import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton,
    TwitterIcon,
    FacebookIcon,
    RedditIcon,
    EmailIcon
  } from "react-share";

export default class ViewPost extends Component {

    constructor(props){
        super(props);
        this.state = {post: [], comments: []}
    }
    componentDidMount()
    {
        if (this.props.match.params){
            const slug = this.props.match.params.slug;
            const category = this.props.match.params.category;
            fetch(process.env.REACT_APP_API_URL+ '/GetPost?category=' + category + '&slug=' +slug, {
                method: 'GET',
                cache: 'no-cache', 
                headers: {
                  'Content-Type': 'application/json'
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer'
              }).then(response => response.json())
              .then(data =>  this.setState({post: data}));
        }
    }

    render(){
        const {post} = this.state;
        var {comments} = [];
        if (post.comments != undefined) {
            comments = post.comments.map((comment) => 
                <div className ="comment">
                    <span id="commentBody">{comment.body}</span> <br />
                    <span id="commentAuthor">{comment.author}</span>
                    {comment.replies.map((reply) => 
                        <div className ="reply">
                            <span id="replyBody" >{reply.body}</span> <br />
                            <span id="replyAuthor">{reply.author}</span> 
                            
                        </div>)}

                </div>);
        };

        return (<div className="ViewPostContainer"> 
                <div>
                <AppNavbar/>
                </div>
                <div className="shareButtons">
                    <TwitterShareButton
                        url={window.location.href}
                        title={"Check out this post on CodeCorner, " + post.title}
                    >
                    <TwitterIcon
                    size={32}
                    round />
                    </TwitterShareButton>

                    <FacebookShareButton
                        url={window.location.href}
                        title={post.title}
                    >
                    <FacebookIcon
                    size={32}
                    round />
                    </FacebookShareButton>
                    <EmailShareButton
                        url={window.location.href}
                        title={post.title}
                    >
                    <EmailIcon
                    size={32}
                    round />
                    </EmailShareButton>

                    <RedditShareButton
                        url={window.location.href}
                        title={post.title}
                    >
                    <RedditIcon
                    size={32}
                    round />
                    </RedditShareButton>
                </div>
                <div className="jumbotron">
                    <h1>{post.title}</h1>
                    <p>Written by: {post.author}</p>
                </div>
                <div className="article">
                        <div className="PostBody">
                            <p id="FormattedText" dangerouslySetInnerHTML={{__html: post.body}}></p>
                        </div>


                </div>

                <div className ="commentSection">
                    <hr />
                    <div className="writeComment">
                        <input></input>
                    </div>
                    <div>
                        <ul>{comments}</ul>

                    </div>
                </div>
            </div>
        );
    }
}