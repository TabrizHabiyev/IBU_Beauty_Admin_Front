import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

const ImageInputWrapper = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px dashed gray",
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
});

const ImageInputPreview = styled("img")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
});

const ImageInputLabel = styled("label")({
  position: "absolute",
  bottom: "16px",
  color: "gray",
  fontSize: "0.875rem",
  fontWeight: "bold",
  cursor: "pointer",
});

const DeleteButtonWrapper = styled("div")({
  position: "absolute",
  top: "8px",
  right: "8px",
});

const ImageInput = ({ label, onChange }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setImagePreview(imageUrl);
      onChange(imageFile);
    } else {
      setImagePreview(null);
      onChange(null);
    }
  };

  const handleDeleteClick = () => {
    setImagePreview(null);
    onChange(null);
  };

  return (
    <Box position="relative" height="140px">
      <ImageInputWrapper>
        {imagePreview ? (
          <>
            <ImageInputPreview src={imagePreview} alt="Preview" />
            <DeleteButtonWrapper>
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={handleDeleteClick}
              >
                <DeleteIcon />
              </IconButton>
            </DeleteButtonWrapper>
          </>
        ) : (
          <ImageInputLabel htmlFor="image-upload">
            {label || "Choose an image"}
          </ImageInputLabel>
        )}
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </ImageInputWrapper>
    </Box>
  );
};

export default ImageInput;
