"use client";

import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/components/language-provider";

// 导入组件化后的主页组件
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedSection } from "@/components/home/featured-section";
import { LatestPublications } from "@/components/home/latest-publications";
import { CallToAction } from "@/components/home/call-to-action";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <PageLayout withGradientBackground={false}>
      {/* 英雄区块组件 */}
      <HeroSection />
      
      {/* 研究亮点组件 */}
      <FeaturedSection />
      
      {/* 最新出版物组件 */}
      <LatestPublications className="mt-16" />
      
      {/* 行动号召组件 */}
      <CallToAction className="mt-16" />
    </PageLayout>
  );
}
