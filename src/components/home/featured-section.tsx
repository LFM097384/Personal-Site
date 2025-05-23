"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

interface FeatureSectionProps {
  className?: string;
}

export function FeaturedSection({ className = "" }: FeatureSectionProps) {
  const { t } = useLanguage();
  
  // 研究亮点数据
  const researchHighlights = [
    {
      id: "highlight1",
      title: t("researchTitle1", "AI对学术不平等的影响", "AI and Academic Inequality"),
      description: t(
        "researchDesc1", 
        "研究生成式AI如何影响了不同地区、机构和研究人员之间的学术成果差距。", 
        "Investigating how generative AI affects the gap in academic output between different regions, institutions, and researchers."
      ),
      icon: "📊",
      delay: 0
    },
    {
      id: "highlight2",
      title: t("researchTitle2", "量化历史研究方法", "Quantitative Historical Research"),
      description: t(
        "researchDesc2", 
        "运用数据科学和统计方法分析历史事件和长期社会经济趋势。", 
        "Applying data science and statistical methods to analyze historical events and long-term socioeconomic trends."
      ),
      icon: "📈",
      delay: 0.2
    },
    {
      id: "highlight3",
      title: t("researchTitle3", "政治经济学理论", "Political Economy Theory"),
      description: t(
        "researchDesc3", 
        "探索经济因素如何影响政治结构，以及政策如何塑造经济发展路径。", 
        "Exploring how economic factors influence political structures and how policies shape economic development paths."
      ),
      icon: "🌐",
      delay: 0.4
    }
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("researchHighlights", "研究亮点", "Research Highlights")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "researchIntro", 
              "我的研究关注AI、政治经济学和量化历史分析的交叉领域。以下是我当前的研究方向。", 
              "My research focuses on the intersection of AI, political economy, and quantitative historical analysis. Here are my current research areas."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchHighlights.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
