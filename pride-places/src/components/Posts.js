import React, {useState, useEffect} from 'react'
// import MyModal from './Modal'
import styled from 'styled-components';
import { Modal } from './Modal';

const Container = styled.div`
  display: flex;
//   justify-content: left;
  align-items: left;
  height: 100vh;
`;

const Li = styled.li`
//   min-width: 100px;
//   padding: 16px 32px;
//   border-radius: 4px;
//   border: none;
//   background: #141414;
//   color: #fff;
//   font-size: 24px;
  cursor: pointer;
`;

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState([])
    const [user, setUser] = useState([])
    const [showModal,setShowModal] = useState(false);

    const openModal = async(post) => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const user = await resp.json()
        setUser(user)
        setPost(post)
        setShowModal(prev => !prev)
        
    }

    useEffect(() => {
        (async() => {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await resp.json()
            setPosts(data)
        })()
    }, []) 

    return (
        <>
        <Container>
        {/* <div className='posts'> */}
            <ul id='posts-ul'>
            {posts && posts.map((post, i) => {
                const capitalizePost = post.title.charAt(0).toUpperCase() + post.title.slice(1)
                return (
                    <Li key={i} id={post.userId} onClick={() => openModal(post)}>
                        {capitalizePost}
                    </Li>
                )
            })}
            </ul>
            {/* </div> */}
            </Container>
            <Modal showModal={showModal} setShowModal={setShowModal} user={user} post={post}/>
        </>
    )
    // }

   
}