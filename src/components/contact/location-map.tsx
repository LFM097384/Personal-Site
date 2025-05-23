"use client";

import {
  Box,
  Typography,
  Grid,
  useTheme
} from "@mui/material";
import { useLanguage } from "../language-provider";

export function LocationMap() {
  const { t } = useLanguage();
  const theme = useTheme();
    return (
    <Grid container>
      <Grid size={{ xs: 12, md: 7 }}>
        <Box
          sx={{
            height: { xs: 300, md: 400 },
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.4)' : 'rgba(245, 245, 245, 0.7)',
          }}
        >
          <Box sx={{ textAlign: 'center', p: 4, maxWidth: 'md' }}>
            <Typography variant="h2" sx={{ mb: 2 }}>🗺️</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t("mapDisplay", "UCL 政治学系地图", "UCL Department of Political Science Map")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("mapDescription", "在实际部署时，此处将嵌入地图服务，显示办公位置。",
                "When deployed, a map service will be embedded here to show the office location.")}
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
        <Box sx={{
          p: { xs: 3, md: 4 },
          borderLeft: { xs: 'none', md: `1px solid ${theme.palette.divider}` },
          borderTop: { xs: `1px solid ${theme.palette.divider}`, md: 'none' },
        }}>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 2 }}>
            {t("directions", "位置信息", "Location Details")}
          </Typography>

          <Typography variant="body2" paragraph>
            {t("locationDetails", "UCL政治学系位于伦敦市中心，附近有多个公共交通站点，包括Euston站和Russell Square站。",
              "The UCL Department of Political Science is located in central London with several public transport options nearby, including Euston Station and Russell Square Station.")}
          </Typography>

          <Typography variant="subtitle2" sx={{ mb: 1, mt: 2 }}>
            {t("nearbyTransport", "附近交通", "Nearby Transport")}
          </Typography>

          <Typography variant="body2" color="text.secondary" paragraph>
            • {t("underground", "地铁：Euston站(Northern、Victoria线)，Russell Square站(Piccadilly线)",
              "Underground: Euston Station (Northern, Victoria lines), Russell Square Station (Piccadilly line)")}
            <br />
            • {t("bus", "公交：多条公交线路途经此处", "Bus: Multiple routes serve this area")}
          </Typography>

          <Typography variant="subtitle2" sx={{ mb: 1, mt: 2 }}>
            {t("walkingDirections", "步行指南", "Walking Directions")}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {t("walkingDesc", "从Euston站步行约8分钟，或从Russell Square站步行约10分钟。",
              "About 8 minutes' walk from Euston Station or 10 minutes from Russell Square Station.")}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
