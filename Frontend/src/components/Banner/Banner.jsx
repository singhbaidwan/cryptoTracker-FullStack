import { Typography, Container } from "@mui/material";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <Container
        sx={{
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <div>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontFamily: "Montserrat",
              color: "#fff",
            }}
          >
            Crypto Tracker
          </Typography>
        </div>
        <div>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "light",
              fontFamily: "Montserrat",
              color: "#fff",
            }}
          >
            Track Prices of crypto currency
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
