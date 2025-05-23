"use client";

import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

export function ProfileSection() {
  const { language, tByKey } = useLanguage();
  const theme = useTheme();
  
  return (
    <Grid container spacing={4} mb={8}>
      <Grid item xs={12} md={4}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: 4,
              overflow: "hidden",
              border: `4px solid ${theme.palette.primary.main}20`,
              boxShadow: (theme) => theme.shadows[5],
              background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
              }}
            />
            <Typography variant="h2" fontWeight="bold" sx={{ position: "relative", zIndex: 10 }}>
              {language === "zh" ? "刘丰铭" : "Leo Liu"}
            </Typography>
          </Box>
        </motion.div>
      </Grid>
      
      <Grid item xs={12} md={8}>
        <Typography variant="h3" fontWeight="semibold" color="primary.main" mb={2}>
          {language === "zh" ? "刘丰铭，PPE本科生" : "Fengming Liu, PPE Undergraduate"}
        </Typography>
        
        <Typography variant="body1" color="text.secondary" mb={4} fontSize="lg">
          {language === "zh" ? (
            <>
              政治学系<br />
              伦敦大学学院<br />
              BI挪威商学院研究助理
            </>
          ) : (
            <>
              Department of Political Science<br />
              University College London<br />
              Research Assistant at BI Norwegian Business School
            </>
          )}
        </Typography>
        
        <ContactInfoGrid />
        
        <Box sx={{ mt: 4 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <SkillTag text={tByKey("about", "aiApplications")} />
            <SkillTag text={tByKey("about", "politicalEconomy")} />
            <SkillTag text={tByKey("about", "socialScience")} />
            <SkillTag text={tByKey("about", "quantitativeHistory")} />
            <SkillTag text={tByKey("about", "dataScience")} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

function ContactInfoGrid() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: {xs: "1fr", sm: "1fr 1fr"}, gap: 2, mb: 4 }}>
      <ContactItem 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        }
        text="leo.liu.23@ucl.ac.uk"
      />
      <ContactItem 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        }
        text="+44 7436241983"
      />
      <ContactItem 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <circle cx="17.5" cy="6.5" r="1.5"></circle>
          </svg>
        }
        text="@leoliu_ucl"
      />
      <ContactItem 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        }
        text="linkedin.com/in/fengming-liu"
      />
    </Box>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 1.5, 
        "&:hover": { 
          color: "primary.main", 
          transition: "color 0.2s ease" 
        }
      }}
    >
      <Box 
        sx={{ 
          width: 40, 
          height: 40, 
          borderRadius: "50%", 
          bgcolor: "primary.main10",
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          color: "primary.main",
          "&:hover": { 
            bgcolor: "primary.main20", 
            transition: "background-color 0.2s ease" 
          }
        }}
      >
        {icon}
      </Box>
      <Typography>{text}</Typography>
    </Box>
  );
}

function SkillTag({ text }: { text: string }) {
  const theme = useTheme();
  
  return (
    <Box 
      component="span"
      sx={{
        bgcolor: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
        color: "primary.main",
        px: 2,
        py: 1,
        borderRadius: "full",
        fontSize: "0.875rem",
        fontWeight: 500,
        boxShadow: 1,
      }}
    >
      {text}
    </Box>
  );
}
