import Posts from './components/Posts'

// function App() {
 
//   return (
//     <div className="App">
//       <Posts />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './components/Modal';
import { GlobalStyle } from './globalStyles';

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

function App() {
  // const [showModal, setShowModal] = useState(false);

  // const openModal = (userId) => {
  //   setShowModal(prev => !prev);
  // };

  return (
    <>
      <Container>
        {/* <Button onClick={openModal}>I'm a modal</Button> */}
        {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
        {/* <Posts openModal={openModal} showModal={showModal} setShowModal={setShowModal}/> */}
        <Posts />
        {/* <GlobalStyle /> */}
      </Container>
    </>
  );
}

export default App;
