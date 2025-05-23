"use client";

import { useLanguage } from "@/components/language-provider";
import { Box, Typography, useTheme, Paper, Grid } from "@mui/material";

// 导入共享组件
import { PageLayout } from "@/components/page-layout";
import { ContactForm, FormData } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { LocationMap } from "@/components/contact/location-map";
import { GradientTypography } from "@/components/ui/styled-components";

export default function ContactPage() {
  const { t } = useLanguage();
  const theme = useTheme();
  
  const handleFormSubmit = (data: FormData) => {
    console.log('表单数据:', data);
    // 这里可以添加实际的表单提交逻辑
  };

  return (
    <PageLayout>
      {/* 页面标题 */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="overline"
          component="div"
          color="primary"
          sx={{ mb: 1, fontWeight: 600, letterSpacing: 2 }}
        >
          {t("reachOut", "联系沟通", "REACH OUT")}
        </Typography>
        <GradientTypography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          {t("contactMe", "联系方式", "Contact Me")}
        </GradientTypography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
          {t("contactDesc", "无论是学术合作、演讲邀请还是其他问题，我都很乐意听取您的意见。请通过下方方式与我联系。",
            "Whether you're interested in academic collaboration, speaking engagements, or have other inquiries, I'd be delighted to hear from you.")}
        </Typography>
      </Box>

      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          backgroundColor: 'background.paper',
          border: `1px solid ${theme.palette.divider}`,
          mb: 4
        }}
      >
        <Grid container>
          {/* 联系信息部分 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <ContactInfo />
          </Grid>
          
          {/* 表单部分 */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{
              bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
              borderLeft: { xs: 'none', md: `1px solid ${theme.palette.divider}` },
              borderTop: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
              p: { xs: 3, md: 4 }
            }}>
              <ContactForm onSubmit={handleFormSubmit} />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* 地图位置卡片 */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h6" color="primary" sx={{ p: 3, fontWeight: 600, borderBottom: `1px solid ${theme.palette.divider}` }}>
          {t("location", "地理位置", "Location")}
        </Typography>
        
        <LocationMap />
      </Paper>
    </PageLayout>
  );
}
