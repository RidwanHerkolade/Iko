import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const MAX = 100000;
const MIN = 100;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];
export default function CustomMarks() {
    const defaultValue = (MAX + MIN) / 2;
  const [val, setVal] = React.useState(defaultValue);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        marks={marks}
        // step={10}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
        sx={{
          "& .MuiSlider-rail": {
            color: "rgb(33,34,52)",
            height: "1rem",
          },
          "& .MuiSlider-track": {
            background:
              "linear-gradient(to left, rgb(223, 134, 170), rgb(24,18,83))",
            height: "0.5rem",
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "rgb(223, 134, 170)", // Thumb color
          },
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body2"
          onClick={() => setVal(MIN)}
          sx={{
            cursor: "pointer",
            fontFamily: "Outfit",
            fontWeight: "700",
            fontSize: "1.2rem",
          }}
        >
          {MIN} $
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal(MAX)}
          sx={{
            cursor: "pointer",
            fontFamily: "Outfit",
            fontWeight: "700",
            fontSize: "1.2rem",
          }}
        >
          {MAX} $
        </Typography>
      </Box>
    </Box>
  );
}
