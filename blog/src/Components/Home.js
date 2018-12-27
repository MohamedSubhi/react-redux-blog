import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import pokeball from'../pokeball.png'

class Home extends Component{
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            });
    }
    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <img src={pokeball} alt="poke"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}><span className="card-title red-text">{post.title}</span></Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Posts yet</div>
        );
        return(
            <div className="container">
                {postList}
            </div>
        )
    }
}

export default Home;