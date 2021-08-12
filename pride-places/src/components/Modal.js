import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100%;
    height: -10%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20%;
`;

const ModalWrapper = styled.div`
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: lightblue;
    color: #000;
    z-index: 10;
    border: 10px solid black;
    border-radius: 10px;
    padding: 40px;
    position:relative;
    top:50%;
    left:50%;
    transform:translate(-50%,-90%);
    width:500px;
    height: auto
    // max-height:calc(100vh - 100px);
    // margin-top: calc(100vh - 1000px);
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    // overflow:auto;
    max-height:calc(100vh - 125px);
    p {
        margin-bottom: 1rem;
    }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal, user, post }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {/* <ModalImg src={require('./modal.jpg')} alt='camera' /> */}
              <ModalContent>
                <h1>{user && user.name}</h1>
                <h2>with {user && user.company.name}</h2>
                <h3>{user && user.company.catchPhrase}</h3><br/>
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
  );
};
