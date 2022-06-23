import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import phoneIcon from "../../img/phone-square-solid.svg";
import emailIcon from "../../img/envelope-square-solid.svg";
import locationIcon from "../../img/map-marker-alt-solid.svg";

class PersonalDetailsView extends Component {
  render() {
    const { data } = this.props;
    return (
      <Stack spacing={1} direction="column">
        <Grid container spacing={0} direction="row">
          <Grid container item spacing={0} direction="column" xs={8}>
            <Grid item>
              <Typography variant="h1" component="div">
                {data[0].Name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" component="div">
                {data[0].Title}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            spacing={0}
            direction="column"
            alignItems="center"
            justify="flex-end"
            xs={4}
          >
            <Grid container direction="row" item>
              <Box
                component="img"
                sx={{
                  width: "14px",
                  marginRight: "5px",
                }}
                alt="phone"
                src={phoneIcon}
              />
              <Typography variant="h4" component="div">
                {data[0].Phone}
              </Typography>
            </Grid>
            <Grid container direction="row" item>
              <Box
                component="img"
                sx={{
                  width: "14px",
                  marginRight: "5px",
                }}
                alt="email"
                src={emailIcon}
              />
              <Typography variant="h4" component="div">
                {data[0].Email}
              </Typography>
            </Grid>
            <Grid container direction="row" item>
              <Box
                component="img"
                sx={{
                  width: "14px",
                  marginRight: "5px",
                }}
                alt="location"
                src={locationIcon}
              />
              <Typography variant="h4" component="div">
                {data[0].Location}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider
          sx={{ backgroundColor: "secondary.main", borderBottomWidth: 2 }}
        />
        <Typography variant="h4" component="div">
          {data[0].Description}
        </Typography>
      </Stack>
    );
  }
}

export default PersonalDetailsView;
