import { useState } from "react";
import {
  Autocomplete,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { currencyData } from "../../constants/CurrencyData";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import "./ConverterView.css";
import axios from "axios";
import { ConvertPrice } from "../../config/api";
const ConverterView = (props) => {
  const [currency, setCurrency] = useState("");
  const [amount, setamount] = useState(0);
  const [cryptoCoin, setcryptoCoin] = useState("");
  const [result, setResult] = useState(0);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const currencySymbol =
    currencyData.find((data) => {
      return data.code == currency;
    })?.symbol ?? "";
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const fetchAmount = async () => {
    const { data } = await axios.get(
      ConvertPrice(cryptoCoin, currency, amount)
    );
    let valueOfCoin = numberWithCommas(`${data?.amount.toFixed(2) ?? 0}`);
    setResult(`${currencySymbol} ${valueOfCoin}`);
  };
  const convertButtonClicked = (e) => {
    e.preventDefault();
    if (currency != "" && cryptoCoin != "") {
      fetchAmount();
    }
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="container-view">
        <Typography
          variant="h5"
          sx={{
            fontWeight: "semi-bold",
            color: "#fff",
            paddingTop: 5,
            paddingLeft: 5,
          }}
        >
          Convert Crypto Prices to desired currency
        </Typography>
        <div className="main-converter-view ">
          <Autocomplete
            disablePortal
            id="combo-box-select-coin"
            options={props.coins.map((data) => data.id)}
            sx={{ width: 300 }}
            onChange={(e) => {
              setcryptoCoin(e.target.innerHTML);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select Coin" />
            )}
          ></Autocomplete>
          <Autocomplete
            disablePortal
            id="combo-box-select-currency"
            options={currencyData.map((data) => data.code)}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Currency" />
            )}
            onChange={(e) => {
              setCurrency(e.target.innerHTML);
            }}
          ></Autocomplete>
          <FormControl
            onChange={(e) => {
              setamount(e.target.value);
            }}
          >
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  {currencySymbol}
                </InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
          <Button
            variant="contained"
            color="success"
            sx={{ height: "50px" }}
            onClick={convertButtonClicked}
          >
            Convert
          </Button>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            =
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {`${result}`}
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ConverterView;
