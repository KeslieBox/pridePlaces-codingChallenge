import { useSpring, animated } from 'react-spring';
import React, { useRef } from "react";
import useModalStyle from "../styles/modalStyle";

// sending props of modal, post and user state from Posts component
export default function Modal ({ showModal, setShowModal, user, post, title }){
  const modal = useRef()
  const classes = useModalStyle();

  // animation for fade in modal effect
  const animation = useSpring({
    config: {duration: 300},
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateX(0%)` : `translateX(-100%)`
  }) 

  // if showModal is set to true, render Modal component, else return null
  return (
    <>
      {showModal ? (
        <div className={classes.background} onClick={() => setShowModal(false)}>
          <div className={classes.modalWrapper}>
            <div className={classes.modal} ref={modal}>
              <animated.div style={animation}>
                <button className={classes.closeButton} onClick={() => setShowModal(false)} />
                <h1>{user.name}</h1>
                  <h2>{user.company.name}</h2>
                    <h3>{user.company.catchPhrase}</h3>
                      <p><b>{title.charAt(0).toUpperCase() + title.slice(1)}:</b></p>
                      <p>{post.body}</p>
              </animated.div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}


