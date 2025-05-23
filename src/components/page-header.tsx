"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { GradientTypography } from "../ui/styled-components";
import { useLanguage } from "../language-provider";

interface PageHeaderProps {
  titleKey: string;
  titleZh: string;
  titleEn: string;
  subtitleKey: string;
  subtitleZh: string;
  subtitleEn: string;
  descriptionKey: string;
  descriptionZh: string;
  descriptionEn: string;
}

export function PageHeader({
  titleKey,
  titleZh,
  titleEn,
  subtitleKey,
  subtitleZh,
  subtitleEn,
  descriptionKey,
  descriptionZh,
  descriptionEn
}: PageHeaderProps) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box 
        sx={{ 
          textAlign: 'center', 
          mb: { xs: 5, md: 7 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: '50%',
            top: '-30px',
            transform: 'translateX(-50%)',
            width: '150px',
            height: '150px',
            background: (theme) => theme.palette.mode === 'dark' 
              ? 'radial-gradient(circle, rgba(74, 144, 226, 0.15) 0%, rgba(0,0,0,0) 70%)' 
              : 'radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, rgba(255,255,255,0) 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: -1
          }
        }}
      >        <Typography
          variant="overline"
          component="div"
          color="primary"
          sx={{ 
            mb: 1.5, 
            fontWeight: 700, 
            letterSpacing: 3,
            display: 'inline-block',
            background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            padding: '0.25rem 1.5rem',
            border: '2px solid',
            borderColor: 'rgba(74, 144, 226, 0.4)',
            borderRadius: '999px',
            fontSize: '0.75rem',
            boxShadow: '0 2px 10px -2px rgba(74, 144, 226, 0.3)',
            backdropFilter: 'blur(8px)',
            position: 'relative',
            zIndex: 1,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 4px 15px -2px rgba(74, 144, 226, 0.4)',
              transform: 'translateY(-1px)'
            }
          }}
        >
          {t(subtitleKey, subtitleZh, subtitleEn)}
        </Typography>
          <GradientTypography 
          variant="h2" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 3,
            fontSize: { xs: '2.25rem', md: '3rem' },
            letterSpacing: '-0.025em',
            position: 'relative',
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4a90e2 0%, #357abd 100%)',
            textShadow: '0 2px 8px rgba(74, 144, 226, 0.2)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #4a90e2 0%, #357abd 100%)',
              borderRadius: '2px'
            }
          }}
        >
          {t(titleKey, titleZh, titleEn)}
        </GradientTypography>
        
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            maxWidth: 800, 
            mx: 'auto', 
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.7,
            mt: 4,
            padding: { xs: '0 1rem', md: '0' }
          }}
        >
          {t(descriptionKey, descriptionZh, descriptionEn)}
        </Typography>
      </Box>
    </motion.div>
  );
}
