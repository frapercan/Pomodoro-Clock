import Typography from "@mui/material/Typography";

function Estado(props) {
  return (
    <Typography variant="h2" gutterBottom>
      {props.estado ? "Dale Caña" : "Descanso"}
    </Typography>
  );
}

export default Estado;
