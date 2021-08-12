import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from '../styles/modalStyle';

// sending props of modal, post and user state from Posts component
export const Modal = ({ showModal, setShowModal, user, post }) => {
  const modalRef = useRef()

  // animation for fade in modal effect
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
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
                <h1>{user && user.name}</h1>
                <h2>with {user && user.company.name}</h2>
                <h3>{user && user.company.catchPhrase}</h3>
                <p>{post.title}: </p>
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
