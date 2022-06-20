import { Box, Container, Grid, Paper, styled, Typography } from '@mui/material';
import Images from 'assets';

const HomeTalent = () => {
  const styles = {
    paperContainer: {
      minHeight: 400,
      background: '#fff',
    },
  };
  const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(8, 0),
    color: theme.palette.primary.main,
  }));

  return (
    <Paper style={styles.paperContainer}>
      <RootStyle>
        <Container maxWidth='md'>
          <Grid container>
            <Grid item md={6} pt={0}>
              <Box
                component='img'
                sx={{
                  mt: { xs: 5, md: 0 },
                  width: { md: '100%' },
                  maxHeight: 400,
                  maxWidth: '100%',
                }}
                alt='talent'
                src={Images.Talent}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              fontWeight='bold'
              justifyContent='center'
              textAlign='right'
            >
              <Typography variant='h2' color='#005A76' gutterBottom>
                WIN THE TALENT WAR
              </Typography>

              <Grid container item>
                <Typography variant='body1' color='#005A76' mb={2}>
                  Building a strong talent pool is the main competitive
                  advantage in the knowledge based economy.
                </Typography>
                <Typography variant='body1' color='#005A76'>
                  We help you recruit, filter and assess your candidates, so
                  that you can focus on your business
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Paper>
  );
};

export { HomeTalent };
