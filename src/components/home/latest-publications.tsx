"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

interface LatestPublicationsProps {
  className?: string;
}

export function LatestPublications({ className = "" }: LatestPublicationsProps) {
  const { t, language } = useLanguage();
  
  // 最新出版物/工作论文数据
  const publications = [
    {
      id: "pub1",
      title: t(
        "pubTitle1", 
        "生成式AI如何影响全球学术不平等：初步证据", 
        "How Generative AI Affects Global Academic Inequality: Preliminary Evidence"
      ),
      abstract: t(
        "pubAbstract1", 
        "本工作论文审视了生成式AI工具，尤其是大型语言模型在减少或加剧全球学术不平等中的作用。通过分析2022-2023年的发表数据，我们发现AI辅助有助于减少语言障碍，但在资源获取方面的差异继续加剧学术产出差距。", 
        "This working paper examines the role of generative AI tools, particularly large language models, in either reducing or exacerbating global academic inequality. Analyzing publication data from 2022-2023, we find that AI assistance helps reduce language barriers but disparities in access to resources continue to widen gaps in academic output."
      ),
      authors: "Liu, F., Hansen, J.",
      year: "2023",
      type: t("workingPaper", "工作论文", "Working Paper"),
      url: "#",
      delay: 0
    },
    {
      id: "pub2",
      title: t(
        "pubTitle2", 
        "英国大学生对AI工具的采纳与伦理考量：调查研究", 
        "Adoption and Ethical Considerations of AI Tools Among UK University Students: A Survey Study"
      ),
      abstract: t(
        "pubAbstract2", 
        "本研究通过对450名英国大学生的问卷调查，探讨了对ChatGPT等AI工具的使用模式、态度和伦理顾虑。结果表明，虽然大多数学生将AI视为有价值的学习辅助工具，但对学术诚信和教育目的方面存在担忧。", 
        "This study explores the usage patterns, attitudes, and ethical concerns regarding AI tools like ChatGPT through a survey of 450 UK university students. Results indicate that while most students view AI as a valuable learning aid, concerns exist regarding academic integrity and educational purpose."
      ),
      authors: "Liu, F., Zhang, M., Wilson, S.",
      year: "2023",
      type: t("conferenceProceeding", "会议论文", "Conference Proceeding"),
      url: "#",
      delay: 0.2
    }
  ];

  // 加载动画变体
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-16 bg-muted/50 ${className}`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("latestPublications", "最新研究", "Latest Research")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "publicationsIntro", 
              "我最近发表的研究与工作论文，涵盖AI、政治经济学和量化方法。", 
              "My recent publications and working papers covering AI, political economy, and quantitative methods."
            )}
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              variants={item}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between flex-wrap gap-2">
                <h3 className="text-xl font-semibold mb-2 flex-1">
                  <Link href={pub.url} className="hover:text-primary transition-colors">
                    {pub.title}
                  </Link>
                </h3>
                <div className="flex gap-2 items-center text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                    {pub.type}
                  </span>
                  <span>{pub.year}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground my-3">{pub.authors}</p>
              <p className="text-muted-foreground">{pub.abstract}</p>
              <div className="mt-4 flex justify-end">
                <Link 
                  href={pub.url}
                  className="text-primary hover:underline font-medium"
                >
                  {t("readMore", "阅读更多", "Read more")} →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link 
            href="/publications" 
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {t("viewAllPublications", "查看所有研究成果", "View All Publications")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
