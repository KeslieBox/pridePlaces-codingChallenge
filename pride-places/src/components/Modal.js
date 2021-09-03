import { useSpring, animated } from 'react-spring';
import React, { useRef } from "react";
import useModalStyle from "../styles/modalStyle";

// sending props of showModal, post, post title and user state from Posts component, as well as setShowModal callback function
export default function Modal ({ showModal, setShowModal, user, post, title }){
  // creates a reference point to the modal div to control animation
  const modal = useRef()
  const classes = useModalStyle();

  // animation for fade in modal effect
  const animation = useSpring({
    config: {duration: 300},
    // if showModal is true, it toggles the opacity from 0 to 1
    opacity: showModal ? 1 : 0,
    // toggles modal from the beyond the page margin if showModal is true
    transform: showModal ? `translateX(0%)` : `translateX(-100%)`
  }) 

  return (
    <>
      {/* displays modal content if showModal is set to true */}
      {showModal ? (
        // closes modal on click event on the background div by setting showModal to false
        <div className={classes.background} onClick={() => setShowModal(false)}>
          <div className={classes.modalWrapper}>
            <div className={classes.modal} ref={modal}>
              <animated.div style={animation}>
              {/* closes modal on click event on the close button by setting showModal to false */}
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


