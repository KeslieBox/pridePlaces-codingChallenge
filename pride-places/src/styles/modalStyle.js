import { createUseStyles } from 'react-jss'

const useModalStyle = createUseStyles({
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

  // adjustable modal for all size screens
  modal: {
      justifyContent: 'center',
      alignItems: 'center',
      border: '10px solid black',
      borderRadius: '10px',
      textAlign: 'center',
      maxWidth: 'calc(500px)',
      height: 'auto',
      backgroundColor: "#add8e6",
      boxShadow: [0, 0, "0.625rem", "rgba(0, 0, 0, 0.2)"],
      position: "relative",
      padding: "1rem",

      "@media (min-width: 576px)": {
          width: "32rem",
      },
  },

  closeButton: {
      position: "absolute",
      zIndex: 1,
      top: '-24px',
      right: 0,
      backgroundColor: "lightblue",
      width: "1.5rem",
      height: "1.5rem",
      padding: 0,
      border: 0,
      cursor: "pointer",
      outline: 0,
  
      "&:hover": {
        backgroundColor: "#424f63"
      },
  
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "12px",
        left: "0.25rem",
        width: "1rem",
        height: "0.1rem",
        backgroundColor: "black"
      },
  
      // don't think I need this??
      "&:before": {
        transform: "rotate(45deg)"
      },
  
      "&:after": {
        transform: "rotate(-45deg)"
      }
    }
  })

    export default useModalStyle;