import { Checkbox } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function ConfiguracionExtra(props) {

  const handleChange = (()=> {
    props.setDescansoExtra(!props.descansoExtra);
  });
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked color="default" />}
        onChange={handleChange}
        label="Habilitar descanso doble cada 4 ciclos"
      />
    </FormGroup>
  );
}

export default ConfiguracionExtra;
