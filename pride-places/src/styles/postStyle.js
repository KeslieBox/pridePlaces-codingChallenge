import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'left',
    height: '100vh',
    marginLeft: '1%',
  },

 li: {
  fontSize: '18px',
  cursor: 'pointer',
  textDecoration: 'underline',
  paddingRight: '50px',
 }
})

export default useStyles;
