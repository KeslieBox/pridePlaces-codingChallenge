import React, { useState } from 'react';
import styled from 'styled-components';
import Posts from './components/Posts'

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  height: 100vh;
`;

function App() {
  return (
    <>
      {/* <Container> */}
        {/* <Button onClick={openModal}>I'm a modal</Button> */}
        {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
        {/* <Posts openModal={openModal} showModal={showModal} setShowModal={setShowModal}/> */}
        <Posts />
      {/* </Container> */}
    </>
  );
}

export default App;
