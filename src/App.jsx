import { useEffect, useState } from "react";
import Container from "@mui/material/Box";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
function App() {
  const [gridColumns, setGridColumns] = useState(1);

  const options = [
    {
      value: 1,
      label: "1x1",
    },
    {
      value: 2,
      label: "2x2",
    },
    {
      value: 3,
      label: "3x3",
    },
  ];

  return (
    <Container
      sx={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Box for option to change grid value */}
      <Box
        sx={{
          width: "100%",
          height: "20vh",
          p: 2,
          alignContent: "center",
        }}
      >
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue={1}
          helperText="Please select grid value"
          onChange={(e) => setGridColumns(parseInt(e.target.value, 10))}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {/* Box for image grid*/}
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          p: 2,
          alignContent: "center",
        }}
      >
        <ImageList
          sx={{ height: "100%" }}
          cols={gridColumns}
          rowHeight={"100%"}
        >
          {[img1, img2, img3, img4].map((img, index) => (
            <ImageListItem key={index}>
              <img src={img} alt="" loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
}

export default App;
