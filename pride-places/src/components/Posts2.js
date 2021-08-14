import React, {useState, useEffect} from 'react'
import { Container, Li } from '../styles/postStyle'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import modalStyle from '../styles/modalStyle2';

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState([])
    const [user, setUser] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // click event fetches user with user id of clicked post
    const openModal = async(userId, post) => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const user = await resp.json()
        // set current user and post
        setUser(user)
        setPost(post)
        // setShowModal to true and open modal
        setShowModal(prev => !prev)    
    }

    // fetch all posts on ComponentDidMount and setPosts to response object from fetch Promise
    useEffect(() => {
        (async() => {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await resp.json()
            setPosts(posts)
        })()
    }, []) 

    return (
        <>
            <Container>
                <ul id='posts-ul'>
                    {/* iterate through all posts and display as li */}
                {posts && posts.map((post, i) => {
                    const capitalizedTitle = post.title.charAt(0).toUpperCase() + post.title.slice(1)
                    return (
                        <Li key={i} id={post.userId} onClick={() => onOpenModal(post.userId, post)}>
                            {capitalizedTitle}
                        </Li>
                    )
                })}
                </ul>
            </Container>
            {/* <button onClick={onOpenModal}>Open modal</button> */}
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Simple centered modal</h2>
            </Modal>
        </>
    )  
}