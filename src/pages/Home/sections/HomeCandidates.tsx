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

const HomeCandidates = () => {
  const styles = {
    paperContainer: {
      background: "#2EC4B6"
    }
  };
  const RootStyle = styled("div")(({ theme }) => ({
    padding: theme.spacing(10, 0),
    color: "white"
  }));
  return (
    <Paper style={styles.paperContainer}>
      <RootStyle>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            sx={{
              fontSize: { md: "3.5rem", sm: "3rem", xs: "2rem" }
            }}
            gutterBottom
          >
            PICK THE BEST CANDIDATES
          </Typography>
          <Grid container rowGap={5}>
            <Grid container item>
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
                    alt="frame-3"
                    src={Images.Candidate1}
                  />
                </Stack>
              </Grid>
              <Grid item md={7}>
                <Typography variant="h6" sx={{ mt: { xs: 4, md: 0 } }}>
                  Based on 3M ddatapoints collected over the last years, we can
                  assess the 6 sub skill of english accuratly:
                  Reading,writting,vocab,grammar, Listenning,speaking.
                </Typography>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item md={3} xs={12}>
                <Box
                  component="img"
                  sx={{
                    maxHeight: 150,
                    minHeight: { xs: 250, md: 100 },
                    width: "100%",
                    objectFit: "contain"
                  }}
                  alt="Candidate2"
                  src={Images.Candidate2}
                />
              </Grid>
              <Grid item md={7}>
                <Typography variant="h6" sx={{ mt: { xs: 4, md: 0 } }}>
                  On top of that, we can identify the most gritty,diligent
                  motivated candidates. These are strong success skills that
                  would help them thrive in your organization.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Paper>
  );
};
export { HomeCandidates };
