import React from "react";
import { Paper, TextField, Button, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

function SearchPost() {
  return (
    <Paper
      className="post"
      style={{
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextField
        fullWidth
        id="standard-basic"
        label="write posts..."
        variant="standard"
        style={{ marginRight: 20 }} // Provide margin only right side for spacing
      />
      <div style={{ display: "flex" }}>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          style={{
            marginRight: 10, // Reduce margin
          }}
        >
          Upload Media
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Post
        </Button>
      </div>
    </Paper>
  );
}

export default SearchPost;
