import React, {useState, useEffect} from 'react'
// import MyModal from './Modal'
import GlobalStyle from '../globalStyles'
import styled from 'styled-components';
import { Modal } from './Modal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Li = styled.li`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState([])
    const [user, setUser] = useState([])
    const [showModal,setShowModal] = useState(false);
    // const fetchData = async (url) => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setData(data)
    //     debugger
    // }
    const openModal = async(post) => {
        // setShowModal(prev => !prev)
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const user = await resp.json()
        setUser(user)
        setPost(post)
        setShowModal(prev => !prev)
        // send user with userId to a modal
        debugger

    }

    useEffect(() => {
        (async() => {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await resp.json()
            setPosts(data)
        })()
    }, [])

    
     

    return (
        <div className='posts'>
            <ul id='posts-ul'>
            {posts && posts.map((post, i) => {
                debugger
                return (
                    <Li key={i} id={post.userId} onClick={() => openModal(post)}>
                        {post.title}
                    </Li>
                )
            })}
            </ul>
            {/* need to send current post to modal */}
            <Modal showModal={showModal} setShowModal={setShowModal} user={user} post={post}/>
            <GlobalStyle />
        </div>
    )
    // }

   
}