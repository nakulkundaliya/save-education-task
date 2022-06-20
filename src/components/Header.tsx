import {
  Box,
  List,
  Menu,
  AppBar,
  Button,
  Toolbar,
  Tooltip,
  MenuItem,
  ListItem,
  Container,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import Images from 'assets';
import { SignIn } from 'pages/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { cloneElement, useState } from 'react';
import { logout } from 'redux/action';
import { countries, flags } from 'utils';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

interface Props {
  children?: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children!, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? '#005a76' : 'transparent',
      color: trigger ? '#fff' : '#fff',
    },
  });
}

const Header = (props: Props) => {
  const dispatch = useDispatch<any>();
  const [isOpenCloseSignIn, setIsOpenCloseSignIn] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const signInUserData = useSelector((state: any) => state.userData.user);
  const signUpUserData = useSelector((state: any) => state.signupUserData.user);

  const open = Boolean(anchorEl);
  const getLanguage = i18next.language || window.localStorage.i18nextLng;

  const { i18n } = useTranslation();

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleLang = (lang: string) => {
    i18n.changeLanguage(lang);
    handleClose();
  };
  const handleOpenSignIn = () => setIsOpenCloseSignIn(true);

  const handleCloseSignIn = () => setIsOpenCloseSignIn(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Container maxWidth='md' sx={{ px: { xs: 0, md: 2 } }}>
              <Box display='flex' justifyContent='space-between'>
                <Box
                  component='img'
                  sx={{
                    width: 100,
                    maxHeight: 50,
                  }}
                  alt='frame-1'
                  src={Images.Logo}
                />
                <Box display='flex'>
                  {signInUserData || signUpUserData ? (
                    <Box display='flex' alignItems='center'>
                      <Typography sx={{ mt: 0 }}>
                        Welcome,
                        <Box sx={{ display: { xs: 'inline', md: 'none' } }}>
                          <br />
                        </Box>
                        {(signInUserData || signUpUserData)?.data?.name}
                      </Typography>
                      <Button
                        onClick={handleLogout}
                        variant='text'
                        sx={{
                          px: 2,
                          py: 0,
                          display: { sm: 'flex' },
                          color: '#fff',
                          mr: 1,
                          fontSize: 16,
                        }}
                      >
                        Logout
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      onClick={handleOpenSignIn}
                      variant='text'
                      sx={{
                        px: 2,
                        py: 0,
                        display: { sm: 'flex' },
                        color: '#fff',
                        mr: 1,
                        fontSize: 16,
                      }}
                    >
                      Sign In
                    </Button>
                  )}

                  <Tooltip title='Change Language'>
                    <List component='nav' aria-label='Device settings'>
                      <ListItem
                        sx={{ p: { xs: 0, md: 2 } }}
                        button
                        id='lock-button'
                        aria-haspopup='listbox'
                        aria-controls='lock-menu'
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                      >
                        <img
                          //@ts-ignore
                          src={flags[getLanguage]}
                          alt={getLanguage}
                          style={{ width: 20 }}
                        />
                        <Typography
                          sx={{
                            ml: 2,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                          }}
                        >
                          {getLanguage}
                        </Typography>
                      </ListItem>
                    </List>
                  </Tooltip>
                  <Menu
                    id='lock-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'lock-button',
                      role: 'listbox',
                    }}
                  >
                    {countries.map(({ code, name, language: lng }) => (
                      <MenuItem
                        key={code}
                        onClick={() => handleLang(lng)}
                        selected={lng === getLanguage}
                      >
                        <img
                          // @ts-ignore
                          src={flags[lng]}
                          alt={name}
                          style={{ width: 20 }}
                        />
                        <Typography sx={{ ml: 2, textAlign: 'center' }}>
                          {code}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <SignIn
        setIsOpenCloseSignIn={setIsOpenCloseSignIn}
        onClickClose={handleCloseSignIn}
        modalOpen={isOpenCloseSignIn}
      />
    </>
  );
};

export { Header };
