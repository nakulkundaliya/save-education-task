import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  styled,
  Typography
} from "@mui/material";
import Images from "assets";

const HomeFeatures = () => {
  const styles = {
    paperContainer: {
      minHeight: 400,
      background: "#ebeeff"
    }
  };
  const RootStyle = styled("div")(({ theme }) => ({
    padding: theme.spacing(8, 0),
    color: theme.palette.neutral.main
  }));

  return (
    <Paper style={styles.paperContainer}>
      <RootStyle>
        <Container maxWidth="md">
          <Grid container rowSpacing={4}>
            {/* Recruting, Filter and Assessing */}
            <Grid container item md={12} columnSpacing={5}>
              <Grid item md={4}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    maxHeight: 300
                  }}
                  alt="frame-1"
                  src={Images.Recruit}
                />
              </Grid>
              <Grid item md={8} pt={0}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" }
                  }}
                  textAlign={{ xs: "center", md: "left" }}
                  gutterBottom
                >
                  RECRUITING/ FILTERING/ ASSESSING
                </Typography>
                <Typography
                  variant="body1"
                  mb={2}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  We take on heavy lifting of recruiting, filtering and asses
                  sing
                </Typography>
              </Grid>
            </Grid>

            {/* Leverage on Technology */}
            <Grid
              container
              item
              md={12}
              columnSpacing={5}
              direction={{ md: "row-reverse" }}
            >
              <Grid item md={3} xs={12}>
                <Stack>
                  <Box
                    component="img"
                    sx={{
                      maxHeight: 150,
                      minHeight: { xs: 250, md: 100 },
                      width: "100%",
                      objectFit: "contain"
                    }}
                    alt="feature1"
                    src={Images.Technology}
                  />
                </Stack>
              </Grid>
              <Grid item md={8} pt={0} xs={12}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" }
                  }}
                  textAlign={{ xs: "center", md: "left" }}
                  gutterBottom
                >
                  LEVERAGE ON TECHNOLOGY
                </Typography>
                <Typography
                  variant="body1"
                  mb={2}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  We leverage on the technology to make informed decisions
                </Typography>
              </Grid>
            </Grid>

            {/* Time & Cost Savings*/}
            <Grid container item md={12} columnSpacing={5}>
              <Grid item md={4} xs={12}>
                <Box
                  component="img"
                  sx={{
                    maxHeight: 150,
                    minHeight: { xs: 250, md: 100 },
                    width: "100%",
                    objectFit: "contain"
                  }}
                  alt="frame-1"
                  src={Images.TimeCost}
                />
              </Grid>
              <Grid item md={8} pt={0} xs={12}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" }
                  }}
                  textAlign={{ xs: "center", md: "left" }}
                  gutterBottom
                >
                  TIME & COST SAVINGS
                </Typography>
                <Typography
                  variant="body1"
                  mb={2}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  You save on recruitment costs
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Paper>
  );
};

export { HomeFeatures };
