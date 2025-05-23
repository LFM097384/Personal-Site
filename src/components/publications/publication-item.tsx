"use client";

import { Box, Typography, Chip, Button, IconButton, Collapse, useTheme } from "@mui/material";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

interface PublicationProps {
  publication: {
    id: number;
    title: {
      zh: string;
      en: string;
    } | string;
    authors: {
      zh: string;
      en: string;
    } | string;
    journal: {
      zh: string;
      en: string;
    } | string;
    year: number;
    doi: string;
    abstract: {
      zh: string;
      en: string;
    } | string;
    tags: {
      zh: string[];
      en: string[];
    } | string[];
  };
}

export function PublicationItem({ publication }: PublicationProps) {
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
  
  // 处理标签数组
  const getTags = (): string[] => {
    if (Array.isArray(publication.tags)) {
      return publication.tags as string[];
    }
    return language === "zh" 
      ? (publication.tags as {zh: string[], en: string[]}).zh 
      : (publication.tags as {zh: string[], en: string[]}).en;
  };
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  return (    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ 
        mb: 3, 
        p: 3,
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
          transform: 'translateY(-3px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 15px 40px -10px rgba(0,0,0,0.6)'
            : '0 15px 40px -10px rgba(0,0,0,0.2)'
        }
      }}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>            <Typography 
              variant="h5" 
              fontWeight="600" 
              sx={{ 
                flex: 1,
                backgroundImage: 'linear-gradient(90deg, #4a90e2, #357abd)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: theme.palette.mode === 'dark'
                  ? '0 2px 4px rgba(0,0,0,0.3)'
                  : '0 1px 2px rgba(0,0,0,0.1)'
              }}>
              {getLocalizedContent(publication.title)}
            </Typography>            <Box 
              sx={{ 
                background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
                color: 'white',
                px: 2,
                py: 0.5,
                borderRadius: 1,
                fontSize: '0.875rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                ml: 2,
                boxShadow: '0 2px 8px rgba(53, 122, 189, 0.25)',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(53, 122, 189, 0.35)'
                }
              }}
            >
              {publication.year}
            </Box>
          </Box>
          
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {getLocalizedContent(publication.authors)}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
            {getLocalizedContent(publication.journal)}
          </Typography>
          
          {publication.doi && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              DOI: <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                {publication.doi}
              </a>
            </Typography>
          )}
        </Box>
        
        <Collapse in={expanded} timeout="auto">
          <Box sx={{ mt: 2, mb: 3, py: 2, px: 3, bgcolor: 'background.paper', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="body2">
              {getLocalizedContent(publication.abstract)}
            </Typography>
          </Box>
        </Collapse>
        
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {getTags().map((tag, index) => (
            <Chip 
              key={index} 
              label={tag} 
              size="small"
              sx={{ 
                bgcolor: `${theme.palette.primary.main}20`, 
                color: 'primary.main',
                '&:hover': { bgcolor: `${theme.palette.primary.main}30` }
              }}
            />
          ))}
        </Box>
        
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Button 
            size="small" 
            onClick={toggleExpand}
            sx={{ fontSize: '0.875rem' }}
          >
            {expanded ? tByKey("publications", "hideAbstract") : tByKey("publications", "showAbstract")}
          </Button>
          
          {publication.doi && (
            <Button 
              size="small" 
              variant="outlined" 
              sx={{ fontSize: '0.875rem' }}
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tByKey("publications", "viewPublication")}
            </Button>
          )}
        </Box>      </Box>
    </motion.div>
  );
}
