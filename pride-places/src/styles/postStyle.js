import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  // posts container styling
  container: {
    display: 'flex',
    alignItems: 'left',
    height: '100vh',
    marginLeft: '1%',
  },

  // posts list item styling
 li: {
  fontSize: '18px',
  cursor: 'pointer',
  textDecoration: 'underline',
  paddingRight: '50px',
 }
})

export default useStyles;
