"use client";

import { Box, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { GradientCard } from "../ui/styled-components";

export function BiographySection() {
  const { tByKey } = useLanguage();
  
  const educationItems = [
    {
      period: "2023-2026",
      degree: {
        en: "BSc Philosophy, Politics and Economics",
        zh: "哲学、政治学与经济学学士学位"
      },
      institution: {
        en: "University College London",
        zh: "伦敦大学学院"
      },
      details: {
        en: "Focusing on political economy and quantitative research methods",
        zh: "专注于政治经济学和定量研究方法"
      }
    },
    {
      period: "2022-2023",
      degree: {
        en: "Foundation Year in Social Sciences",
        zh: "社会科学基础课程"
      },
      institution: {
        en: "University College London",
        zh: "伦敦大学学院"
      },
      details: {
        en: "Completed with Distinction",
        zh: "以优异成绩完成"
      }
    }
  ];
  
  const experienceItems = [
    {
      period: "2023-Present",
      role: {
        en: "Research Assistant",
        zh: "研究助理"
      },
      organization: {
        en: "BI Norwegian Business School",
        zh: "BI挪威商学院"
      },
      details: {
        en: "Working on the impact of AI on academic inequality across different regions",
        zh: "研究人工智能对不同地区学术不平等的影响"
      }
    },
    {
      period: "2022-2023",
      role: {
        en: "Student Researcher",
        zh: "学生研究员"
      },
      organization: {
        en: "UCL Department of Political Science",
        zh: "伦敦大学学院政治学系"
      },
      details: {
        en: "Conducted data analysis for a project on voting behaviors in European elections",
        zh: "为欧洲选举投票行为研究项目进行数据分析"
      }
    }
  ];
  
  const awardItems = [
    {
      year: "2024",
      name: {
        en: "Outstanding Undergraduate Research Award",
        zh: "优秀本科生研究奖"
      },
      organization: {
        en: "UCL Department of Political Science",
        zh: "伦敦大学学院政治学系"
      }
    },
    {
      year: "2023",
      name: {
        en: "Academic Excellence Scholarship",
        zh: "学术优秀奖学金"
      },
      organization: {
        en: "University College London",
        zh: "伦敦大学学院"
      }
    }
  ];
  
  return (
    <Box mb={10}>
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        sx={{ 
          mb: 4,
          background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {tByKey("about", "biography")}
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <TimelineSection 
            title={tByKey("about", "education")}
            items={educationItems}
            type="education"
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TimelineSection 
            title={tByKey("about", "experience")}
            items={experienceItems}
            type="experience"
          />
          
          <Box mt={6}>
            <Typography variant="h5" fontWeight="bold" mb={3}>
              {tByKey("about", "awards")}
            </Typography>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {awardItems.map((award, index) => (
                <AwardItem key={index} award={award} />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function TimelineSection({ title, items, type }: { 
  title: string, 
  items: any[],
  type: "education" | "experience" 
}) {
  const { language } = useLanguage();
  
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        {title}
      </Typography>
      
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box 
                sx={{
                  width: 24, 
                  height: 24, 
                  borderRadius: "50%", 
                  bgcolor: "primary.main",
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  flexShrink: 0,
                  mt: 0.5
                }}
              >
                {type === "education" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                )}
              </Box>
              
              <Box sx={{ position: "relative" }}>
                <Typography variant="overline" color="primary.main" fontWeight="bold">
                  {item.period}
                </Typography>
                <Typography variant="h6" fontWeight="medium">
                  {language === "zh" ? item.degree?.zh || item.role?.zh : item.degree?.en || item.role?.en}
                </Typography>
                <Typography variant="subtitle1" fontWeight="medium">
                  {language === "zh" ? item.institution?.zh || item.organization?.zh : item.institution?.en || item.organization?.en}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {language === "zh" ? item.details?.zh : item.details?.en}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

function AwardItem({ award }: { award: any }) {
  const { language } = useLanguage();
  const theme = useTheme();
  
  return (
    <GradientCard sx={{ p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Box>
          <Typography variant="subtitle1" fontWeight="medium">
            {language === "zh" ? award.name.zh : award.name.en}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {language === "zh" ? award.organization.zh : award.organization.en}
          </Typography>
        </Box>
        <Box 
          sx={{ 
            bgcolor: theme.palette.primary.main, 
            color: "white", 
            px: 1.5, 
            py: 0.5,
            borderRadius: 1,
            fontSize: "0.875rem",
            fontWeight: "medium"
          }}
        >
          {award.year}
        </Box>
      </Box>
    </GradientCard>
  );
}
