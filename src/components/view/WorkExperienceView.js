import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

class WorkExperienceView extends Component {
  render() {
    const { data } = this.props;
    return (
      <Stack direction="column" spacing={1}>
        <Typography variant="h3" component="div">
          WORK EXPERIENCE
        </Typography>
        {data.map((details, i) => {
          return (
            <Grid container direction="column" key={`experienceView${i}`}>
              <Grid
                container
                item
                direction="row"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography variant="h4" component="div" fontWeight={600}>
                    {details.Company}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4" component="div">
                    {details.Position} |{" "}
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

export default WorkExperienceView;
