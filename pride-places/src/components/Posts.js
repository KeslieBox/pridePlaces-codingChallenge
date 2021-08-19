import React, {useState, useEffect} from 'react'
import Modal  from './Modal'
import useStyles from "../styles/postStyle";

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState([])
    const [user, setUser] = useState([])
    const [showModal, setShowModal] = useState(false)
    const classes = useStyles();

    // click event fetches user with user id of author of clicked post
    const openModal = async(userId, post) => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const user = await resp.json()
        // sets current user and post after author of current post is fetched
        setUser(user)
        setPost(post)
        // setShowModal to true and open modal
        setShowModal(prev => !prev)    
    }

    // fetches all posts on ComponentDidMount and setPosts to response object from fetch Promise
    useEffect(() => {
        (async() => {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await resp.json()
            setPosts(posts)
        })()
    }, []) 

    return (
        <>
            <div classeName={classes.container}>
                <ul id='posts-ul'>
                    {/* iterates through all posts and display as li */}
                    {posts && posts.map((post, i) => {
                        const capitalizedTitle = post.title.charAt(0).toUpperCase() + post.title.slice(1)
                        return (
                            <li className={classes.li} key={i} id={post.userId} onClick={() => openModal(post.userId, post)}>
                                {capitalizedTitle}
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* displays modal content if showModal is set to true */}
            <Modal showModal={showModal} setShowModal={setShowModal} user={user} post={post} title={post.title}/>
        </>
    )  
}