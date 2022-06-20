import { Box, Container, Grid, Paper, styled, Typography } from "@mui/material";
import Images from "assets";

const HomeHiring = () => {
  const styles = {
    paperContainer: {
      minHeight: 400,
      background: "#ff9f1c"
    }
  };
  const RootStyle = styled("div")(({ theme }) => ({
    padding: theme.spacing(8, 0),
    color: theme.palette.primary.main
  }));

  return (
    <Paper style={styles.paperContainer}>
      <RootStyle>
        <Container maxWidth="md">
          <Grid container columnSpacing={5}>
            <Grid item md={8} pt={0}>
              <Typography variant="h2" color="white" gutterBottom>
                HIRING IS HARD
              </Typography>

              <Grid container item>
                <Typography variant="body1" color="white" mb={2}>
                  It is almost impossible to interview for soft skills like
                  grit, motivation and diligence from psychometric tests or
                  through an interview.
                </Typography>
                <Typography variant="body1" color="white">
                  To hire effectively from developing countries cost
                  efficiently, the ability to assess English skills accurately
                  is important.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={4} xs={12} display="flex" justifyContent="center">
              <Box
                component="img"
                sx={{
                  mt: { xs: 5, md: 0 },
                  width: { md: "100%" },
                  maxHeight: 400,
                  maxWidth: "100%"
                }}
                alt="hiring"
                src={Images.Hiring}
              />
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Paper>
  );
};

export { HomeHiring };
