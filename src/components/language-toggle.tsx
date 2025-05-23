"use client";

import { useLanguage } from "./language-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
      className="w-16 h-8 rounded-full"
    >
      {language === "zh" ? "EN" : "中文"}
    </Button>
  );
}
