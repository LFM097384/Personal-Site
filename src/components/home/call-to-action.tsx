"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

interface CallToActionProps {
  className?: string;
}

export function CallToAction({ className = "" }: CallToActionProps) {
  const { t } = useLanguage();
  
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden"
        >
          {/* 装饰元素 */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {t("collaborationTitle", "寻求研究合作", "Looking for Research Collaboration")}
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl">
                {t(
                  "collaborationDesc", 
                  "我对跨学科研究合作充满热情，尤其是涉及AI应用、政治经济学分析或量化历史研究的项目。如果您有相关研究想法，欢迎与我联系讨论可能的合作机会。", 
                  "I'm enthusiastic about interdisciplinary research collaborations, particularly projects involving AI applications, political economy analysis, or quantitative historical research. If you have research ideas in these areas, please reach out to discuss potential collaboration opportunities."
                )}
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex-shrink-0"
            >
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-medium text-primary shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {t("getInTouch", "联系我", "Get in Touch")}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
