"use client";

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material";

interface PageLayoutProps {
  children: ReactNode;
  withGradientBackground?: boolean;
}

export function PageLayout({ 
  children, 
  withGradientBackground = true 
}: PageLayoutProps) {
  const theme = useTheme();
  
  return (
    <>
      <Box 
        sx={{ 
          minHeight: '100vh',
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
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
            zIndex: -2
          },
          '&::after': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(18, 26, 34, 0.92) 0%, rgba(30, 40, 50, 0.92) 100%)'
              : 'linear-gradient(135deg, rgba(247, 249, 251, 0.92) 0%, rgba(240, 242, 245, 0.88) 100%)',
            zIndex: -1
          }
        }}
      >
        <MainNav />        <Box 
          component="main"
          sx={{
            py: { xs: 8, md: 12 },
            px: { xs: 2, sm: 4 },
            flexGrow: 1,
            position: 'relative',
            zIndex: 1
          }}
        >
          <Container 
            maxWidth="lg"
            sx={{
              position: 'relative',
              zIndex: 2,
              boxShadow: theme.palette.mode === 'dark' 
                ? '0 15px 35px -15px rgba(0,0,0,0.5)' 
                : '0 15px 35px -15px rgba(0,0,0,0.1)',
              borderRadius: 3,
              overflow: 'hidden',
              bgcolor: theme.palette.mode === 'dark' 
                ? 'rgba(21, 29, 36, 0.85)' 
                : 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid',
              borderColor: theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,0.05)'
                : 'rgba(0,0,0,0.05)',
              p: { xs: 3, md: 5 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
