"use client";

import { Box, Typography, Tabs, Tab, InputBase, IconButton, useTheme } from "@mui/material";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { PublicationItem } from "./publication-item";
import { motion } from "framer-motion";

interface PublicationsFilterProps {
  publications: any[];
  onFilterChange: (filteredPublications: any[]) => void;
}

export function PublicationsFilter({ publications, onFilterChange }: PublicationsFilterProps) {
  const { language, tByKey } = useLanguage();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    filterPublications(searchTerm, newValue);
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterPublications(term, tabValue);
  };
  
  const clearSearch = () => {
    setSearchTerm("");
    filterPublications("", tabValue);
  };
  
  const filterPublications = (term: string, tabIndex: number) => {
    let filtered = [...publications];
    
    // 根据标签过滤
    if (tabIndex === 1) { // Journal Articles
      filtered = filtered.filter(pub => {
        const journal = typeof pub.journal === "string" 
          ? pub.journal 
          : (language === "zh" ? pub.journal.zh : pub.journal.en);
        return journal.toLowerCase().includes("journal");
      });
    } else if (tabIndex === 2) { // Conference Papers
      filtered = filtered.filter(pub => {
        const journal = typeof pub.journal === "string" 
          ? pub.journal 
          : (language === "zh" ? pub.journal.zh : pub.journal.en);
        return journal.toLowerCase().includes("conference");
      });
    } else if (tabIndex === 3) { // Working Papers
      filtered = filtered.filter(pub => {
        const journal = typeof pub.journal === "string" 
          ? pub.journal 
          : (language === "zh" ? pub.journal.zh : pub.journal.en);
        return journal.toLowerCase().includes("working") || journal.toLowerCase().includes("preprint");
      });
    }
    
    // 根据搜索词过滤
    if (term.trim()) {
      filtered = filtered.filter(pub => {
        const title = typeof pub.title === "string" 
          ? pub.title 
          : (language === "zh" ? pub.title.zh : pub.title.en);
        
        const abstract = typeof pub.abstract === "string" 
          ? pub.abstract 
          : (language === "zh" ? pub.abstract.zh : pub.abstract.en);
          
        const authors = typeof pub.authors === "string" 
          ? pub.authors 
          : (language === "zh" ? pub.authors.zh : pub.authors.en);
        
        return (
          title.toLowerCase().includes(term.toLowerCase()) ||
          abstract.toLowerCase().includes(term.toLowerCase()) ||
          authors.toLowerCase().includes(term.toLowerCase()) ||
          pub.year.toString().includes(term)
        );
      });
    }
    
    // 按年份排序（最新的在前）
    filtered.sort((a, b) => b.year - a.year);
    
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
            placeholder={tByKey("publications", "searchPlaceholder")}
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
      
      {/* 分类标签 */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ 
            '& .MuiTab-root': { 
              textTransform: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              px: { xs: 1, sm: 3 },
              minWidth: { xs: 'auto', sm: 100 }
            }
          }}
        >
          <Tab label={tByKey("publications", "allPublications")} />
          <Tab label={tByKey("publications", "journalArticles")} />
          <Tab label={tByKey("publications", "conferenceProceedings")} />
          <Tab label={tByKey("publications", "workingPapers")} />
        </Tabs>
      </Box>
    </Box>
  );
}
