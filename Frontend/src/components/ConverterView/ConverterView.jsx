import { Autocomplete, TextField, Button } from "@mui/material";
import { currencyData } from "../../constants/CurrencyData";
import { maxHeight } from "@mui/system";
import { left } from "@popperjs/core";
import "./ConverterView.css";
const ConverterView = (props) => {
  return (
    <div className="main-converter-view ">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={currencyData.map((data) => data.code)}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Crypto Currency" />
        )}
      ></Autocomplete>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={currencyData.map((data) => data.code)}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Crypto Currency" />
        )}
      ></Autocomplete>
      <Button variant="contained" color="success" sx={{ height: maxHeight }}>
        Success
      </Button>
      <div>=Result</div>
    </div>
  );
};

export default ConverterView;
