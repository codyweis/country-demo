import React, { useState } from "react";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

const DisplayCountriesTable = props => {
  const [hoveredRow, setHoveredRow] = useState(-1);

  let tooMuchData = props.countryData.length > 20;

  const handleClick = param => () => {
    props.setClickedCountryState(param);
  };

  const handleMouseEnter = param => () => {
    setHoveredRow(param);
  };
  return (
    <div style={{ margin: 25 }}>
      {!tooMuchData ? (
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell width="300px">Countries</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.countryData.map((row, index) => (
              <TableRow
                onMouseEnter={handleMouseEnter(index)}
                hover={true}
                key={index}
              >
                <TableCell align="left">{row.name}</TableCell>
                <TableCell>
                  {hoveredRow === index && (
                    <Button
                      style={{ alignItems: "right" }}
                      size="small"
                      variant="outlined"
                      color="primary"
                      onClick={handleClick(row.name)}
                    >
                      Show Details
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <label>
          {props.countryData.length} entries. Will only show when less than 20.
          Filter more!
        </label>
      )}
    </div>
  );
};

export default DisplayCountriesTable;
