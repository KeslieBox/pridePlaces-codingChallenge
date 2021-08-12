import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from '../styles/modalStyle';

// sending props of modal, post and user state from Posts component
export function Modal ({ showModal, setShowModal, user, post, title }){
  const modalRef = useRef()

  // animation for fade in modal effect
  const animation = useSpring({
    config: {
      duration: 300
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateX(0%)` : `translateX(-100%)`
  })

  // event handler to close modal if close icon is clicked
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  // if showModal is true, render Modal component, else return null
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>{user.name}</h1>
                <h2>{user.company.name}</h2>
                <h3>{user.company.catchPhrase}</h3>
                <p><b>{title.charAt(0).toUpperCase() + title.slice(1)}: </b></p>
                <p>{post.body}</p>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}
