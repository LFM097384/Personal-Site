import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { 
  Box, 
  Container, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Menu, 
  MenuItem, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useTracking } from '../hooks/useTracking';
import ConcordChat from '../components/ConcordChat';
import NotificationIcon from '../components/notifications/NotificationIcon';

const themeColors = {
  primary: {
    main: '#4a90e2',
    light: '#69a9e9',
    dark: '#357abd',
    gradient: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)'
  },
  text: {
    navbar: '#2c3e50',        // 导航栏深色文字
    container: '#2c3e50',     // 容器内深色文字
    outside: '#f5f5dc',       // 容器外浅色文字
    secondary: 'rgba(44, 62, 80, 0.7)'
  },
  background: {
    navbar: 'rgba(240, 248, 255, 0.97)',  // 导航栏浅色背景
    content: 'rgba(255, 255, 255, 0.9)',   // 内容区改为浅色背景
    paper: 'rgba(255, 255, 255, 0.85)',    // 卡片改为浅色背景
    gradient: 'linear-gradient(135deg, rgba(44,62,80,0.92) 0%, rgba(52,73,94,0.92) 100%)'
  },
  accent: {  // 添加缺失的 accent 配色
    main: '#2c3e50',
    light: '#f5f5dc',
    transparent: 'rgba(255, 255, 255, 0.9)'
  }
};

const NavButton = ({ children, ...props }) => (
  <Button
    {...props}
    sx={{
      px: 2.5,
      py: 1,
      borderRadius: '10px',
      textTransform: 'none',
      fontSize: '0.95rem',
      fontWeight: 500,
      letterSpacing: '0.5px',
      color: themeColors.text.navbar,  // 改用 text.navbar
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: themeColors.primary.gradient,
        opacity: 0,
        transition: 'opacity 0.3s ease',
        zIndex: 0
      },
      '&:hover': {
        transform: 'translateY(-2px)',
        color: themeColors.text.navbar,
        bgcolor: 'rgba(0,0,0,0.05)',
        '&::before': {
          opacity: 0.15
        }
      },
      '& > *': {
        position: 'relative',
        zIndex: 1
      }
    }}
  >
    {children}
  </Button>
);

const GlobalStyles = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      '& *::-webkit-scrollbar': {
        display: 'none'
      },
      '& *': {
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::before': {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }
      }
    }}
  />
);

const MainLayout = ({ children }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const token = localStorage.getItem('token');
  
  useTracking();

  const getUsername = () => {
    if (!token) return null;
    try {
      const decoded = jwtDecode(token);
      return decoded.sub;
    } catch (error) {
      console.error('Invalid token:', error);
      localStorage.removeItem('token');
      return null;
    }
  };

  const username = getUsername();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    handleClose();
    navigate('/login');
  };

  const menuItems = [
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.research'), path: '/research' },
    { label: t('nav.privacy'), path: '/privacy-policy' },
    ...(username ? [{ label: t('nav.projects'), path: '/projects' }] : [])
  ];

  const renderMobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <Box sx={{ width: 250, pt: 2 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem 
              key={item.label}
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
              }}
              sx={{ cursor: 'pointer' }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          {!username ? (
            <>
              <ListItem 
                onClick={() => {
                  navigate('/login');
                  setMobileMenuOpen(false);
                }}
                sx={{ cursor: 'pointer' }}
              >
                <ListItemText primary={t('nav.login')} />
              </ListItem>
              <ListItem 
                onClick={() => {
                  navigate('/register');
                  setMobileMenuOpen(false);
                }}
                sx={{ cursor: 'pointer' }}
              >
                <ListItemText primary={t('nav.register')} />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem 
                onClick={() => {
                  navigate('/profile');
                  setMobileMenuOpen(false);
                }}
                sx={{ cursor: 'pointer' }}
              >
                <ListItemText primary={t('nav.profile')} />
              </ListItem>
              <ListItem 
                onClick={() => {
                  navigate('/notifications');
                  setMobileMenuOpen(false);
                }}
                sx={{ cursor: 'pointer' }}
              >
                <ListItemText primary={t('nav.notifications')} />
              </ListItem>
              <ListItem 
                onClick={() => {
                  navigate('/recharge');
                  setMobileMenuOpen(false);
                }}
                sx={{ cursor: 'pointer' }}
              >
                <ListItemText primary={t('nav.recharge')} />
              </ListItem>
              <ListItem 
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                sx={{ cursor: 'pointer' }}
              >
                <ListItemText primary={t('nav.logout')} />
              </ListItem>
            </>
          )}
          <ListItem>
            <LanguageSwitcher />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
      <GlobalStyles />
      <Box 
        sx={{ 
          minHeight: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: 'auto',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/image/features-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            zIndex: 0
          },
          '&::after': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(18, 26, 34, 0.73) 0%, rgba(21, 29, 36, 0.73) 100%)',
            zIndex: 1
          },
          '& .MuiTypography-root': {  // 默认所有文字为浅色
            color: themeColors.text.outside
          }
        }}
      >
        <Box 
          sx={{ 
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 2
          }}
        >
          <ConcordChat />
          <AppBar 
            elevation={0}
            sx={{ 
              bgcolor: themeColors.background.navbar,
              backdropFilter: 'blur(5px)',
              borderBottom: '1px solid rgba(0,0,0,0.05)',  // 更淡的边框
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)',    // 更淡的阴影
              '& *': {  // 为所有子元素设置统一颜色
                color: `${themeColors.text.navbar} !important`
              },
              '& .MuiButton-root': {
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.03)'  // 更淡的悬停效果
                }
              }
            }}
          >
            <Toolbar sx={{ px: { xs: 2, sm: 4 }, height: 70 }}>
              <Box
                component={Link}
                to="/home"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  flexGrow: 1,
                  transition: 'opacity 0.2s',
                  '&:hover': {
                    opacity: 0.85
                  }
                }}
              >
                <img
                  src="/logo512.png"
                  alt="Logo"
                  style={{
                    height: '42px',
                    marginRight: '12px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                    transition: 'transform 0.3s ease',
                  }}
                />
                <Typography 
                  variant="h6" 
                  noWrap
                  sx={{
                    fontWeight: 600,
                    letterSpacing: '0.5px'
                  }}
                >
                  {t('nav.home')}
                </Typography>
              </Box>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {menuItems.map((item) => (
                    <NavButton 
                      key={item.label}
                      component={Link} 
                      to={item.path}
                      sx={{
                        mx: 1,
                        px: 2,
                        py: 1,
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        transition: 'all 0.2s',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.1)',
                          transform: 'translateY(-1px)'
                        }
                      }}
                    >
                      {item.label}
                    </NavButton>
                  ))}
                  
                  {username ? (
                    <>
                      {/* 添加通知图标 */}
                      {username && <NotificationIcon />}
                      
                      <IconButton
                        color="inherit"
                        onClick={handleMenu}
                      >
                        <AccountCircleIcon />
                        <Typography variant="subtitle1" sx={{ ml: 1 }}>
                          {username}
                        </Typography>
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => {
                          handleClose();
                          navigate('/profile');
                        }}>
                          {t('nav.profile')}
                        </MenuItem>
                        <MenuItem onClick={() => {
                          handleClose();
                          navigate('/recharge');
                        }}>
                          {t('nav.recharge')}
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                          {t('nav.logout')}
                        </MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <>
                      <Button 
                        color="inherit" 
                        component={Link} 
                        to="/login"
                        sx={{ mr: 1 }}
                      >
                        {t('nav.login')}
                      </Button>
                      <Button 
                        color="inherit" 
                        component={Link} 
                        to="/register"
                        sx={{ mr: 1 }}
                      >
                        {t('nav.register')}
                      </Button>
                    </>
                  )}
                  <LanguageSwitcher />
                </Box>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  onClick={() => setMobileMenuOpen(true)}
                  edge="end"
                  sx={{
                    width: 40,
                    height: 40,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </AppBar>

          {renderMobileMenu()}

          <Container 
            component="main" 
            sx={{ 
              mt: 10, 
              mb: 4, 
              flexGrow: 1,
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& .MuiPaper-root': {
                bgcolor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                '& .MuiTypography-root': {
                  color: themeColors.text.container  // 容器内文字使用深色
                }
              },
              '& > .MuiTypography-root': {  // 容器直接子元素的文字使用深色
                color: themeColors.text.container
              },
              '& .MuiTextField-root': {
                '& .MuiInputLabel-root': {
                  color: themeColors.text.secondary
                },
                '& .MuiOutlinedInput-root': {
                  color: themeColors.text.container,
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                  }
                }
              },
              '& .MuiButton-contained': {
                background: themeColors.primary.gradient,
                color: '#ffffff'
              },
              '& .MuiButton-outlined': {
                borderColor: themeColors.text.content,
                color: themeColors.text.content
              }
            }}
          >
            {children}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;