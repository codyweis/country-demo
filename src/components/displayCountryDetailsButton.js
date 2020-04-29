import React from "react";
import { Button } from "@material-ui/core";

const DisplayCountryDetailsButton = props => {
  const handleClick = () => {
    props.handleCountryButtonClick(props.countryName);
  };
  return (
    <Button
      style={{ marginLeft: "15px" }}
      size="small"
      variant="outlined"
      color="primary"
      onClick={handleClick}
    >
      Show Details
    </Button>
  );
};
export default DisplayCountryDetailsButton;
