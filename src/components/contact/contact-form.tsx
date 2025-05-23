"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { 
  TextField, 
  Grid, 
  Typography, 
  Box, 
  Button 
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useLanguage } from "../language-provider";
import { GradientButton } from "../ui/styled-components";

// 表单数据类型定义
export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('表单数据:', formData);
    
    if (onSubmit) {
      onSubmit(formData);
    }
    
    // 可以在这里添加表单提交后的逻辑，如清空表单
    // setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box>
      <Typography variant="h6" color="primary" sx={{ fontWeight: 600, mb: 3 }}>
        {t("sendMessage", "发送消息", "Send Message")}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label={t("name", "姓名", "Name")}
              variant="outlined"
              value={formData.name}
              onChange={handleFormChange}
              required
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label={t("email", "电子邮件", "Email")}
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleFormChange}
              required
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="subject"
              name="subject"
              label={t("subject", "主题", "Subject")}
              variant="outlined"
              value={formData.subject}
              onChange={handleFormChange}
              required
              size="small"
            />
          </Grid>          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label={t("message", "消息", "Message")}
              variant="outlined"
              multiline
              rows={5}
              value={formData.message}
              onChange={handleFormChange}
              required
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <GradientButton
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              sx={{ px: 4, py: 1.5 }}
            >
              {t("sendMessage", "发送消息", "Send Message")}
            </GradientButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
