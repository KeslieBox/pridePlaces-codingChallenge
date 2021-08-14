import { useSpring, animated } from 'react-spring';
import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import isNil from "lodash/fp/isNil";
import useStyles from "../styles/modalStyle";

// sending props of modal, post and user state from Posts component
export default function Modal ({ showModal, setShowModal, user, post, title }){
    const modal = useRef()
    const classes = useStyles();

  // animation for fade in modal effect
    const animation = useSpring({
        config: {duration: 300},
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateX(0%)` : `translateX(-100%)`
    })

  // event handler to close modal if close icon or background is clicked
 

  // if showModal is true, render Modal component, else return null
  return (
    <>
      {showModal ? (
        <div className={classes.background} onClick={() => setShowModal(false)}>
            <div className={classes.modalWrapper}>
                <div className={classes.modal} ref={modal}>
                    <animated.div style={animation}>
                        <h1>{user.name}</h1>
                            <h2>{user.company.name}</h2>
                                <h3>{user.company.catchPhrase}</h3>
                                    <p><b>{title.charAt(0).toUpperCase() + title.slice(1)}:</b></p>
                                        <p>{post.body}</p>
                        <button
                            type="button"
                            className={classes.closeButton}
                            onClick={() => setShowModal(false)}
                        />
                    </animated.div>
                </div>
            </div>
        </div>
      ) : null}
    </>
  )
}


// import React, { useEffect, useRef, useCallback } from "react";
// import PropTypes from "prop-types";
// import isNil from "lodash/fp/isNil";
// import useStyles from "../styles/ModalStyles2";

// const Modal = ({ showModal, setShowModal, user, post, title }) => {
//   const classes = useStyles();
//   const modal = useRef(null);

//   const handleKeyUp = useCallback(
//     e => {
//       const keys = {
//         27: () => {
//           e.preventDefault();
//           onCloseRequest();
//           window.removeEventListener("keyup", handleKeyUp, false);
//         }
//       };

//       if (keys[e.keyCode]) {
//         keys[e.keyCode]();
//       }
//     },
//     [onCloseRequest]
//   );

//   const handleOutsideClick = useCallback(
//     e => {
//       if (!isNil(modal)) {
//         if (!modal.current.contains(e.target)) {
//           onCloseRequest();
//           document.removeEventListener("click", handleOutsideClick, false);
//         }
//       }
//     },
//     [onCloseRequest]
//   );

//   useEffect(() => {
//     window.addEventListener("keyup", handleKeyUp, false);
//     document.addEventListener("click", handleOutsideClick, false);

//     return () => {
//       window.removeEventListener("keyup", handleKeyUp, false);
//       document.removeEventListener("click", handleOutsideClick, false);
//     };
//   }, [handleKeyUp, handleOutsideClick]);

//   return (
//     <div className={classes.modalOverlay}>
//       <div className={classes.modal} ref={modal}>
//         <button
//           type="button"
//           className={classes.closeButton}
//         //   onClick={onCloseRequest}
//         />
//         {/* {children} */}
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {
//   onCloseRequest: PropTypes.func.isRequired,
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node
//   ]).isRequired
// };

// export default Modal;
