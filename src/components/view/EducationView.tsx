import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { EducationModel } from "../../models/interface-models";

interface IProps {
  data: Array<EducationModel>;
}

class EducationView extends Component<IProps> {
  render() {
    const { data } = this.props;
    return (
      <Stack direction="column" spacing={1}>
        <Typography variant="h3" component="div">
          EDUCATION
        </Typography>
        {data.map((details, i) => {
          return (
            <Grid container direction="column" key={`educationView${i}`}>
              <Grid
                container
                item
                direction="row"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography variant="h4" component="div" fontWeight={600}>
                    {details.Course}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4" component="div">
                    {details.University} |{" "}
                    <strong>
                      {details["Start Date"]} – {details["End Date"]}
                    </strong>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h4" component="div">
                  {details.Description}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    );
  }
}

export default EducationView;
