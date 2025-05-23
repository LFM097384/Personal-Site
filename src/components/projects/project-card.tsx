"use client";

import { Box, Typography, Chip, Button, Collapse, useTheme } from "@mui/material";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: number;
    title: { zh: string; en: string } | string;
    description: { zh: string; en: string } | string;
    longDescription: { zh: string; en: string } | string;
    image: string;
    timeline: { zh: string; en: string } | string;
    funding: { zh: string; en: string } | string;
    members: { zh: string[]; en: string[] } | string[];
    keywords: { zh: string[]; en: string[] } | string[];
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { language, tByKey } = useLanguage();
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  
  // 辅助函数，处理多语言内容
  const getLocalizedContent = (content: any): string => {
    if (typeof content === "string") {
      return content;
    }
    return language === "zh" ? content.zh : content.en;
  };
  
  // 处理关键词数组 - 改进的类型处理
  const getKeywords = (): string[] => {
    if (Array.isArray(project.keywords)) {
      return project.keywords as string[];
    }
    return language === "zh" 
      ? (project.keywords as {zh: string[], en: string[]}).zh 
      : (project.keywords as {zh: string[], en: string[]}).en;
  };
  
  // 处理成员数组 - 改进的类型处理
  const getMembers = (): string[] => {
    if (Array.isArray(project.members)) {
      return project.members as string[];
    }
    return language === "zh" 
      ? (project.members as {zh: string[], en: string[]}).zh 
      : (project.members as {zh: string[], en: string[]}).en;
  };
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // 图片加载错误处理
  const handleImageError = (e: any) => {
    e.target.src = '/project-placeholder.jpg'; // 可以替换为项目的默认占位图
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Box sx={{ 
        mb: 4,
        boxShadow: theme.palette.mode === 'dark'
          ? '0 10px 30px -10px rgba(0,0,0,0.5)'
          : '0 10px 30px -10px rgba(0,0,0,0.15)',
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark'
          ? 'rgba(255,255,255,0.05)'
          : 'rgba(0,0,0,0.05)',
        background: theme.palette.mode === 'dark'
          ? 'rgba(21, 29, 36, 0.85)'
          : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(8px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 15px 40px -10px rgba(0,0,0,0.6)'
            : '0 15px 40px -10px rgba(0,0,0,0.2)'
        }
      }}>        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'} }}>
          <Box sx={{ 
            width: { xs: '100%', md: '33%' },
            position: 'relative', 
            height: { xs: 200, md: '100%' },
            minHeight: { md: 250 },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.4) 0%, rgba(0, 0, 0, 0) 100%)',
              pointerEvents: 'none'
            }
          }}>
            <Image
              src={project.image}
              alt={getLocalizedContent(project.title)}
              fill
              style={{ objectFit: 'cover' }}
              onError={handleImageError}
            />
          </Box>
          
          <Box sx={{ width: { xs: '100%', md: '67%' } }}
            <Box sx={{ p: { xs: 3, md: 4 } }}>
              <Box sx={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "flex-start", 
                flexWrap: "wrap", 
                mb: 2,
                pb: 2,
                borderBottom: '1px solid',
                borderColor: theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.1)'
                  : 'rgba(0,0,0,0.05)'
              }}>
                <Typography 
                  variant="h5" 
                  fontWeight="600"
                  sx={{
                    backgroundImage: 'linear-gradient(90deg, #4a90e2, #357abd)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: theme.palette.mode === 'dark'
                      ? '0 2px 4px rgba(0,0,0,0.3)'
                      : '0 1px 2px rgba(0,0,0,0.1)',
                    mb: 1
                  }}
                >
                  {getLocalizedContent(project.title)}
                </Typography>
                
                <Chip 
                  label={getLocalizedContent(project.timeline)} 
                  size="small"
                  sx={{ 
                    background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
                    color: 'white',
                    fontWeight: 'medium',
                    px: 1,
                    '& .MuiChip-label': {
                      px: 1
                    }
                  }}
                />
              </Box>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3, 
                  color: theme.palette.text.secondary,
                  lineHeight: 1.7
                }}
              >
                {getLocalizedContent(project.description)}
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 0.8, 
                mb: 3 
              }}>
                {getKeywords().map((keyword, i) => (
                  <Chip
                    key={i}
                    label={keyword}
                    size="small"
                    sx={{
                      bgcolor: theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.08)'
                        : 'rgba(0,0,0,0.05)',
                      color: theme.palette.text.secondary,
                      borderRadius: 1.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.15)'
                          : 'rgba(0,0,0,0.08)',
                      }
                    }}
                  />
                ))}
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: theme.palette.text.secondary,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}
                >
                  <Box component="span" sx={{ 
                    fontWeight: 'medium', 
                    color: theme.palette.text.primary 
                  }}>
                    {language === 'zh' ? '资助: ' : 'Funding: '}
                  </Box> 
                  {getLocalizedContent(project.funding)}
                </Typography>
                
                <Button
                  onClick={toggleExpand}
                  sx={{
                    textTransform: 'none',
                    px: 2.5,
                    py: 0.8,
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: theme.palette.mode === 'dark' ? '#f5f5dc' : '#2c3e50',
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
                      background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0
                    },
                    '&:hover': {
                      transform: 'translateY(-2px)',
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
                  {expanded 
                    ? (language === "zh" ? "收起详情" : "Collapse") 
                    : (language === "zh" ? "查看详情" : "View Details")}
                </Button>
              </Box>
              
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box sx={{ 
                  mt: 3, 
                  pt: 3, 
                  borderTop: '1px solid',
                  borderColor: theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(0,0,0,0.05)'
                }}>
                  <Typography 
                    variant="subtitle1" 
                    fontWeight="medium" 
                    gutterBottom
                    sx={{ 
                      color: theme.palette.primary.main 
                    }}
                  >
                    {language === "zh" ? "项目详情" : "Project Details"}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    component="div" 
                    sx={{ 
                      mb: 3,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      '& p': { mb: 2 }
                    }}
                  >
                    {getLocalizedContent(project.longDescription)}
                  </Typography>
                  
                  {getMembers().length > 0 && (
                    <>
                      <Typography 
                        variant="subtitle1" 
                        fontWeight="medium" 
                        gutterBottom
                        sx={{ 
                          color: theme.palette.primary.main 
                        }}
                      >
                        {language === "zh" ? "项目成员" : "Project Members"}
                      </Typography>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1, 
                        mb: 2 
                      }}>
                        {getMembers().map((member, i) => (
                          <Chip
                            key={i}
                            label={member}
                            size="small"
                            sx={{
                              bgcolor: theme.palette.primary.main + '20',
                              color: theme.palette.text.primary,
                              borderRadius: 1.5,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                bgcolor: theme.palette.primary.main + '30',
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </>
                  )}
                </Box>
              </Collapse>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}
