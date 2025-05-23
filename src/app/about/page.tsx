"use client";

import { PageLayout } from "@/components/page-layout";
import { ProfileSection } from "@/components/about/profile-section";
import { BiographySection } from "@/components/about/biography-section";
import { ResearchSection } from "@/components/about/research-section";
import { useLanguage } from "@/components/language-provider";
import { Typography, Box } from "@mui/material";

export default function AboutPage() {
  const { tByKey } = useLanguage();
  
  return (
    <PageLayout>
      <Box sx={{ maxWidth: "4xl", mx: "auto" }}>
        <Typography 
          variant="h2" 
          fontWeight="bold" 
          sx={{ 
            mb: 6,
            background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {tByKey("about", "aboutMe")}
        </Typography>
        
        <ProfileSection />
        <BiographySection />
        <ResearchSection />
      </Box>
    </PageLayout>
  );
}
