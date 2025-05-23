"use client";

import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/components/language-provider";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { PublicationItem } from "@/components/publications/publication-item";
import { PublicationsFilter } from "@/components/publications/publications-filter";
import { CitationStats } from "@/components/publications/citation-stats";

// 模拟的发表论文数据
const publicationsData = [
	{
		id: 1,
		title: {
			zh: "从熵-黎曼几何视角看全球股票市场的风险传递机制：理论构建和实证分析",
			en: "The Risk Transmission Mechanism of Global Stock Markets from the Perspective of Entropy-Riemann Geometry: Theoretical Construction and Empirical Analysis",
		},
		authors: {
			zh: "舒明, 王晨, 刘丰铭 等",
			en: "Shu, M., Wang, C., Liu, F. et al.",
		},
		journal: {
			zh: "计算经济学 (2025)",
			en: "Computational Economics (2025)",
		},
		year: 2025,
		doi: "10.1007/s10614-025-10913-4",
		abstract: {
			zh: "本研究从熵-黎曼几何学视角构建了全球股票市场风险传递机制的理论框架，并通过实证分析验证了该框架的有效性。我们引入了基于信息熵的市场风险度量方法，结合黎曼几何学的曲率概念，捕捉了金融市场间复杂的非线性风险传递关系。实证结果显示，发达市场在全球风险网络中扮演着核心角色，而新兴市场则更易受到外部冲击。此外，金融危机期间风险传递网络的拓扑结构发生显著变化，体现了市场间联系的动态性。该研究为金融风险管理和国际投资组合多样化提供了新的理论依据和实用工具。",
			en: "This study constructs a theoretical framework for the risk transmission mechanism of global stock markets from the perspective of entropy-Riemann geometry and verifies its effectiveness through empirical analysis. We introduce a market risk measurement method based on information entropy, combined with the concept of curvature in Riemannian geometry, capturing the complex nonlinear risk transmission relationships between financial markets. The empirical results show that developed markets play a central role in the global risk network, while emerging markets are more susceptible to external shocks. In addition, the topological structure of the risk transmission network changes significantly during financial crises, reflecting the dynamics of market connections. This research provides new theoretical basis and practical tools for financial risk management and international portfolio diversification.",
		},
		tags: {
			zh: ["金融市场", "风险传递", "熵-黎曼几何", "网络分析"],
			en: ["Financial Markets", "Risk Transmission", "Entropy-Riemann Geometry", "Network Analysis"],
		},
	},
	{
		id: 2,
		title: {
			zh: "迈向自动化社会科学的一步：人工智能驱动的访谈平台",
			en: "Step Further Towards Automated Social Science: An AI-Powered Interview Platform",
		},
		authors: {
			zh: "刘丰铭, 余书宾",
			en: "Liu, F. and Yu, S.",
		},
		journal: {
			zh: "SSRN预印本 (2024年12月)",
			en: "SSRN Preprint (December 2024)",
		},
		year: 2024,
		doi: "",
		abstract: {
			zh: "随着人工智能技术的发展，社会科学研究方法也面临重大变革。本文介绍了一个由AI驱动的访谈平台的设计与实现，该平台能够自动化进行半结构化访谈并收集高质量的定性数据。通过对102名参与者的实验验证，我们发现与人类访谈者相比，AI访谈平台在获取敏感信息、减少社会期望偏误和保持一致性方面表现出色。我们进一步分析了该平台在降低研究成本、扩大样本规模和标准化数据收集过程中的潜力。尽管AI无法完全替代人类访谈者的灵活性和共情能力，但作为补充工具，它能显著提高社会科学研究的效率和可重复性，为自动化社会科学研究铺平道路。",
			en: "With the development of artificial intelligence technology, social science research methods are facing major changes. This paper introduces the design and implementation of an AI-driven interview platform that can automate semi-structured interviews and collect high-quality qualitative data. Through experimental validation with 102 participants, we found that compared with human interviewers, the AI interview platform performed excellently in obtaining sensitive information, reducing social expectation bias, and maintaining consistency. We further analyzed the platform's potential in reducing research costs, expanding sample size, and standardizing data collection processes. Although AI cannot completely replace the flexibility and empathy of human interviewers, as a complementary tool, it can significantly improve the efficiency and reproducibility of social science research, paving the way for automated social science research.",
		},
		tags: {
			zh: ["人工智能", "社会科学", "研究方法", "访谈平台"],
			en: ["Artificial Intelligence", "Social Science", "Research Methodology", "Interview Platform"],
		},
	},
	{
		id: 3,
		title: {
			zh: "寒冬，绝望的心：大饥荒的经历与饮料",
			en: "Cold Winter, Desperate Heart: Experience of Great Famine and Drinks",
		},
		authors: {
			zh: "舒明, 刘丰铭, 王升, 田佳, 艾泽",
			en: "Shu, M., Liu, F., Wang, S., Tian, J., & Ai, Z.",
		},
		journal: {
			zh: "经济学研究杂志 (2024)",
			en: "Journal of Economic Studies (2024)",
		},
		year: 2024,
		doi: "10.1108/JES-05-2024-0277",
		abstract: {
			zh: "本文研究了中国大饥荒的经历对个人饮酒和茶叶消费习惯的长期影响。通过分析中国家庭追踪调查的数据，我们发现在大饥荒期间遭受严重饥饿的地区，居民表现出更高的酒精消费和更低的茶叶消费。这种影响跨代传递，通过家庭习惯和价值观延续至下一代。我们的发现表明这种行为模式与饥荒期间的创伤经历和随后形成的风险态度有关，为理解历史事件如何塑造文化习惯提供了新见解。",
			en: "This paper examines the long-term impact of China's Great Famine experience on individual alcohol and tea consumption habits. By analyzing data from the China Family Panel Studies, we find that residents in areas that suffered severe hunger during the Great Famine show higher alcohol consumption and lower tea consumption. This influence is transmitted across generations, continuing to the next generation through family habits and values. Our findings suggest that this behavioral pattern is related to the traumatic experiences during the famine and subsequently formed risk attitudes, providing new insights into how historical events shape cultural habits.",
		},
		tags: {
			zh: ["中国大饥荒", "消费行为", "文化传承", "历史影响"],
			en: ["China's Great Famine", "Consumption Behavior", "Cultural Transmission", "Historical Impact"],
		},
	},
];

export default function PublicationsPage() {
	const { tByKey } = useLanguage();
	const [filteredPublications, setFilteredPublications] = useState(publicationsData);

	const handleFilterChange = (filtered: any[]) => {
		setFilteredPublications(filtered);
	};

	return (
		<PageLayout>
			<Box sx={{ maxWidth: "4xl", mx: "auto" }}>
				<Typography
					variant="h2"
					fontWeight="bold"
					sx={{
						mb: 2,
						background: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					{tByKey("publications", "publicationsTitle")}
				</Typography>

				<Typography variant="body1" paragraph sx={{ mb: 6 }}>
					{tByKey("publications", "publicationsDescription")}
				</Typography>

				<CitationStats publications={publicationsData} />

				<PublicationsFilter
					publications={publicationsData}
					onFilterChange={handleFilterChange}
				/>

				<Box>
					{filteredPublications.length > 0 ? (
						filteredPublications.map((publication) => (
							<PublicationItem key={publication.id} publication={publication} />
						))
					) : (
						<Typography
							variant="body1"
							color="text.secondary"
							align="center"
							sx={{ py: 5 }}
						>
							{tByKey("publications", "noPublicationsFound")}
						</Typography>
					)}
				</Box>
			</Box>
		</PageLayout>
	);
}
