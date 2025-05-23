"use client";

import { Box, Typography, Grid, Divider, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { GradientTypography } from "../ui/styled-components";

interface CitationStatsProps {
  publications: any[];
}

export function CitationStats({ publications }: CitationStatsProps) {
  const { language, tByKey } = useLanguage();
  const theme = useTheme();
  
  // 在实际项目中，这些可以是从API获取的真实数据
  // 这里我们假设论文的引用总量、h指数和最近一年的引用量
  const [stats, setStats] = useState({
    totalPublications: publications.length,
    totalCitations: 127,
    hIndex: 5,
    citationsThisYear: 34
  });
  
  useEffect(() => {
    setStats(prev => ({ 
      ...prev,
      totalPublications: publications.length 
    }));
  }, [publications]);
  
  const statItems = [
    {
      value: stats.totalPublications,
      label: tByKey("publications", "totalPublications")
    },
    {
      value: stats.totalCitations,
      label: tByKey("publications", "totalCitations")
    },
    {
      value: stats.hIndex,
      label: tByKey("publications", "hIndex")
    },
    {
      value: stats.citationsThisYear,
      label: tByKey("publications", "citationsThisYear")
    }
  ];
  
  return (
    <Box sx={{ mb: 6 }}>
      <GradientTypography variant="h6" fontWeight="medium" sx={{ mb: 3 }}>
        {tByKey("publications", "citationMetrics")}
      </GradientTypography>
      
      <Box 
        sx={{
          p: 2,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.01)'
        }}
      >
        <Grid container spacing={2}>
          {statItems.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Box 
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    height: '100%'
                  }}
                >
                  <Typography 
                    variant="h3" 
                    fontWeight="bold" 
                    sx={{ 
                      color: 'primary.main', 
                      mb: 0.5,
                      background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {item.label}
                  </Typography>
                </Box>
              </motion.div>
              
              {/* 每项之间的分隔线，除了最后一项或每行最后一项 */}
              {(index < statItems.length - 1 && (index + 1) % 4 !== 0) && (
                <Divider orientation="vertical" flexItem sx={{ 
                  position: 'absolute', 
                  right: 0, 
                  top: '20%', 
                  height: '60%',
                  display: { xs: (index % 2 === 0) ? 'block' : 'none', md: 'block' }
                }} />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
