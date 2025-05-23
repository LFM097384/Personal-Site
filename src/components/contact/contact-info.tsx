"use client";

import {
  Box,
  Typography,
  Stack,
  Divider,
  Link,
  Tooltip,
  IconButton
} from "@mui/material";
import { useLanguage } from "../language-provider";
import { IconContainer } from "../ui/styled-components";

// Material UI 图标
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import OrcidIcon from '@mui/icons-material/AccountBox';

// 社交媒体链接类型
interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

export function ContactInfo() {
  const { t, language } = useLanguage();

  // 社交媒体链接配置
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/fengming-liu",
      icon: <LinkedInIcon fontSize="small" />
    },
    {
      name: "GitHub",
      url: "#",
      icon: <GitHubIcon fontSize="small" />
    },
    {
      name: "Twitter",
      url: "#",
      icon: <TwitterIcon fontSize="small" />
    },
    {
      name: "Instagram",
      url: "#",
      icon: <InstagramIcon fontSize="small" />
    }
  ];

  return (
    <Box sx={{ p: { xs: 3, md: 4 } }}>
      <Typography variant="h6" color="primary" sx={{ fontWeight: 600, mb: 3 }}>
        {t("contactInfo", "联系信息", "Contact Information")}
      </Typography>

      <Stack spacing={3}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <IconContainer>
            <EmailIcon color="primary" />
          </IconContainer>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
              {t("email", "电子邮件", "Email")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link href="mailto:leo.liu.23@ucl.ac.uk" color="inherit" underline="hover">
                leo.liu.23@ucl.ac.uk
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <IconContainer>
            <PhoneIcon color="primary" />
          </IconContainer>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
              {t("phone", "电话", "Phone")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link href="tel:+447436241983" color="inherit" underline="hover">
                +44 7436241983
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <IconContainer>
            <LocationOnIcon color="primary" />
          </IconContainer>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
              {t("officeAddress", "办公地址", "Office Address")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {language === "zh" ? (
                <>
                  英国伦敦大学学院<br />
                  政治学系<br />
                  Taviton Street 29-30号<br />
                  伦敦 WC1H 0BW
                </>
              ) : (
                <>
                  Department of Political Science<br />
                  University College London<br />
                  29-30 Taviton Street<br />
                  London WC1H 0BW, UK
                </>
              )}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <IconContainer>
            <OrcidIcon color="primary" />
          </IconContainer>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
              ORCID
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link
                href="https://orcid.org/0009-0009-3881-496X"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
              >
                0009-0009-3881-496X
              </Link>
            </Typography>
          </Box>
        </Box>

        <Divider />

        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
            {t("socialMedia", "社交媒体", "Social Media")}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((social) => (
              <Tooltip key={social.name} title={social.name} arrow>
                <IconButton
                  component="a"
                  href={social.url}
                  target="_blank"
                  size="small"
                  color="primary"
                  sx={{
                    bgcolor: 'action.hover',
                    '&:hover': { bgcolor: 'primary.light', color: 'white' }
                  }}
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
