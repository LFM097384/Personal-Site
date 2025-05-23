import { 
  Box, 
  Card, 
  IconButton, 
  Typography, 
  styled, 
  Button 
} from "@mui/material";

// 渐变背景卡片
export const GradientCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(21, 29, 36, 0.85)'
    : 'rgba(255, 255, 255, 0.85)',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
  backdropFilter: 'blur(8px)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
    : '0 10px 30px -10px rgba(0, 0, 0, 0.15)',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 15px 40px -10px rgba(0, 0, 0, 0.6)'
      : '0 15px 40px -10px rgba(0, 0, 0, 0.2)'
  }
}));

// 图标容器
export const IconContainer = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)'
      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)',
    transform: 'scale(1.05)',
  }
}));

// 社交媒体图标
export const SocialIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
  margin: theme.spacing(0.5),
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)'
      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)',
    transform: 'scale(1.1)',
  }
}));

// 渐变标题
export const GradientTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #4a90e2 0%, #357abd 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  fontWeight: 600,
  letterSpacing: '-0.015em',
  textShadow: theme.palette.mode === 'dark' 
    ? '0 2px 4px rgba(0, 0, 0, 0.3)' 
    : '0 1px 2px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -4,
    left: 0,
    width: '40%',
    height: 2,
    background: 'linear-gradient(90deg, #4a90e2 0%, rgba(53, 122, 189, 0) 100%)',
    borderRadius: '2px'
  }
}));

// 渐变按钮
export const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
  color: '#ffffff',
  textTransform: 'none',
  padding: '10px 20px',
  borderRadius: '10px',
  fontSize: '0.95rem',
  fontWeight: 500,
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 4px 14px -4px rgba(74, 144, 226, 0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #69a9e9 0%, #4a90e2 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 0
  },
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 20px -6px rgba(74, 144, 226, 0.4)',
    '&::before': {
      opacity: 1
    }
  },
  '& > *': {
    position: 'relative',
    zIndex: 1
  }
}));
