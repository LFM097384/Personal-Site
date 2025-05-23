"use client";

import { Box, Typography, Tabs, Tab, InputBase, IconButton, useTheme } from "@mui/material";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

interface ProjectsFilterProps {
  projects: any[];
  onFilterChange: (filteredProjects: any[]) => void;
}

export function ProjectsFilter({ projects, onFilterChange }: ProjectsFilterProps) {
  const { language, tByKey } = useLanguage();
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  // 获取所有可用的关键字/标签作为筛选选项
  const getAllKeywords = (): string[] => {
    const keywordSet = new Set<string>();
    
    projects.forEach(project => {
      if (Array.isArray(project.keywords)) {
        project.keywords.forEach((keyword: string) => keywordSet.add(keyword));
      } else {
        const keywords = language === "zh" 
          ? project.keywords.zh 
          : project.keywords.en;
          
        keywords.forEach((keyword: string) => keywordSet.add(keyword));
      }
    });
    
    return Array.from(keywordSet);
  };
  
  const keywords = getAllKeywords();
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
    filterProjects(searchTerm, newValue);
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterProjects(term, activeTab);
  };
  
  const clearSearch = () => {
    setSearchTerm("");
    filterProjects("", activeTab);
  };
  
  const filterProjects = (term: string, tab: string) => {
    let filtered = [...projects];
    
    // 根据标签过滤
    if (tab !== "all") {
      filtered = filtered.filter(project => {
        if (Array.isArray(project.keywords)) {
          return project.keywords.includes(tab);
        } else {
          const projectKeywords = language === "zh" 
            ? project.keywords.zh 
            : project.keywords.en;
          return projectKeywords.includes(tab);
        }
      });
    }
    
    // 根据搜索词过滤
    if (term.trim()) {
      filtered = filtered.filter(project => {
        const title = typeof project.title === "string" 
          ? project.title 
          : (language === "zh" ? project.title.zh : project.title.en);
        
        const description = typeof project.description === "string" 
          ? project.description 
          : (language === "zh" ? project.description.zh : project.description.en);
          
        return (
          title.toLowerCase().includes(term.toLowerCase()) ||
          description.toLowerCase().includes(term.toLowerCase())
        );
      });
    }
    
    onFilterChange(filtered);
  };
  
  return (
    <Box sx={{ mb: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 搜索框 */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 3,
            p: 0.5,
            pl: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: theme.palette.text.secondary }}>
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          <InputBase
            placeholder={tByKey("projects", "searchPlaceholder")}
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ ml: 1, flex: 1 }}
          />
          {searchTerm && (
            <IconButton size="small" onClick={clearSearch} sx={{ mr: 0.5 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </IconButton>
          )}
        </Box>
      </motion.div>
      
      {/* 过滤选项卡 */}      <Tabs 
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          mb: 3,
          '& .MuiTab-root': {
            textTransform: 'none',
            fontSize: '0.9rem', 
            fontWeight: 500,
            minWidth: { xs: 'auto', md: 100 },
            transition: 'all 0.2s ease-in-out',
            '&.Mui-selected': {
              color: 'primary.main',
              fontWeight: 600
            }
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'primary.main',
            height: 3,
            borderRadius: '3px 3px 0 0'
          }
        }}
      >
        <Tab label={tByKey("projects", "allProjects")} value="all" />
        
        {keywords.map((keyword, index) => (
          <Tab key={index} label={keyword} value={keyword} />
        ))}
      </Tabs>
    </Box>
  );
}
