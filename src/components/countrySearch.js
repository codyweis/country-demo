import React from "react";
import { TextField } from "@material-ui/core";

const CountrySearch = props => {
  return (
    <div>
      <TextField
        inputProps={{ pattern: "[a-z]{1,15}" }}
        label="find countries"
        onChange={props.handleFilterValueChange}
        value={props.filterValue}
      />
    </div>
  );
};

export default CountrySearch;
