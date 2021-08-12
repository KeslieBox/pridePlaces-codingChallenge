import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const Background = styled.div`
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: calc(-530px);
`

export const ModalWrapper = styled.div`
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: lightblue;
    z-index: 10;
    border: 10px solid black;
    border-radius: 10px;
    padding: 40px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 500px;
    height: auto;
`

export const ModalContent = styled.div`
    justify-content: center;
    align-items: center;
    line-height: 1.2;
    max-height: calc(100vh - 125px);
    text-align: center;
    p {
        font-size: 17px
    }
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
`
