import { Button } from "@mui/material";


function Boton(props) {
  return (
    <Button
      variant="contained"
      style={{
        borderRadius: 35,
        backgroundColor: "#bdbdbd",
        padding: "18px 36px",
        fontSize: "18px",
      }}
      onClick={() => {
        props.setPausa(!props.pausa )}}
    >
      {props.pausa ? 'Comenzar':'Parar'}
    </Button>
  );
}

export default Boton;
