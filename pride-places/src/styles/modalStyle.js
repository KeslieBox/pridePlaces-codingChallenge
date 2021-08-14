import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { createUseStyles } from 'react-jss'

// export const Background = styled.div`
//     width: 100%;
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-top: calc(-530px);
// `

// export const ModalWrapper = styled.div`
//     box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//     background: lightblue;
//     z-index: 10;
//     border: 10px solid black;
//     border-radius: 10px;
//     padding: 40px;
//     position: relative;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%,-50%);
//     width: 500px;
//     height: auto;
// `

// export const ModalContent = styled.div`
//     justify-content: center;
//     align-items: center;
//     line-height: 1.2;
//     max-height: calc(100vh - 125px);
//     text-align: center;
//     p {
//         font-size: 17px
//     }
// `

// export const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
// `


const modalStyle = createUseStyles({

    background: {
        width: '100%',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'calc(-530px)',
    },


    modalWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        padding: "1rem",
        backgroundColor: "rgb(0 0 0 / 46%);",
        zIndex: "9999",
        opacity: 1,
        overflowX: "hidden",
        overflowY: "auto"
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        border: '10px solid black',
        borderRadius: '10px',
        lineHeight: 1.2,
        textAlign: 'center',
        p: {
            fontSize: '17px',
        },
        maxWidth: 'calc(500px)',
        height: 'auto',
        backgroundColor: "#add8e6",
        boxShadow: [0, 0, "0.625rem", "rgba(0, 0, 0, 0.2)"],
        position: "relative",
        padding: "1rem",

        "@media (min-width: 576px)": {
            width: "32rem"
        },

        "& p:last-of-type": {
            marginBottom: 0
        }
    },

    closeButton: {
        position: "absolute",
        zIndex: 1,
        top: 0,
        right: 0,
        backgroundColor: "#34363a",
        width: "2.5rem",
        height: "2.5rem",
        padding: 0,
        border: 0,
        cursor: "pointer",
        outline: 0,
        boxShadow: [0, 0, "0.625rem", "rgba(0, 0, 0, 0.1)"],
    
        "&:hover": {
          backgroundColor: "#424f63"
        },
    
        "&:before, &:after": {
          content: '""',
          position: "absolute",
          top: "1.2rem",
          left: "0.25rem",
          width: "2rem",
          height: "0.1rem",
          backgroundColor: "#fff"
        },
    
        "&:before": {
          transform: "rotate(45deg)"
        },
    
        "&:after": {
          transform: "rotate(-45deg)"
        }
      }
    })

    export default modalStyle;