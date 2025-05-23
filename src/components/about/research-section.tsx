"use client";

import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { GradientCard } from "../ui/styled-components";

export function ResearchSection() {
  const { language, tByKey } = useLanguage();
  
  const researchInterests = [
    {
      title: {
        en: "AI Applications in Social Sciences",
        zh: "社会科学中的AI应用"
      },
      description: {
        en: "Exploring how artificial intelligence can enhance research methodologies in social sciences, automate data collection, and provide new analytical frameworks.",
        zh: "探索人工智能如何增强社会科学研究方法，实现数据收集自动化，并提供新的分析框架。"
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 7h.01" />
          <path d="M10 7h7" />
          <path d="M7 12h.01" />
          <path d="M10 12h7" />
          <path d="M7 17h.01" />
          <path d="M10 17h3" />
        </svg>
      )
    },
    {
      title: {
        en: "Political Economy",
        zh: "政治经济学"
      },
      description: {
        en: "Studying the interaction between economic systems and political structures, focusing on how policy decisions affect economic outcomes and vice versa.",
        zh: "研究经济系统与政治结构之间的互动，专注于政策决策如何影响经济结果，反之亦然。"
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: {
        en: "Quantitative Historical Analysis",
        zh: "量化历史分析"
      },
      description: {
        en: "Applying computational methods and statistical techniques to historical data to uncover patterns, trends, and insights that traditional historical methods might miss.",
        zh: "将计算方法和统计技术应用于历史数据，揭示传统历史方法可能忽略的模式、趋势和见解。"
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
        </svg>
      )
    },
    {
      title: {
        en: "Data Science Methods",
        zh: "数据科学方法"
      },
      description: {
        en: "Developing and applying data analysis techniques to extract meaningful insights from complex datasets in social and political contexts.",
        zh: "开发和应用数据分析技术，从社会和政治环境中的复杂数据集提取有意义的见解。"
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5-5-4 4-4-4" />
          <path d="M14 4h5v5" />
        </svg>
      )
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
        {tByKey("about", "researchInterests")}
      </Typography>
      
      <Typography variant="body1" mb={4}>
        {tByKey("about", "researchDescription")}
      </Typography>
      
      <Grid container spacing={3}>
        {researchInterests.map((interest, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ResearchInterestCard
                title={language === "zh" ? interest.title.zh : interest.title.en}
                description={language === "zh" ? interest.description.zh : interest.description.en}
                icon={interest.icon}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function ResearchInterestCard({ title, description, icon }: { 
  title: string, 
  description: string,
  icon: React.ReactNode
}) {
  return (
    <GradientCard sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box sx={{ 
          width: 48, 
          height: 48, 
          borderRadius: 2, 
          bgcolor: "primary.main10", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          color: "primary.main",
          mr: 2
        }}>
          {icon}
        </Box>
        <Typography variant="h6" fontWeight="medium">{title}</Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </GradientCard>
  );
}
