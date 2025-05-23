"use client";

import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/components/language-provider";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectsFilter } from "@/components/projects/projects-filter";
import { motion } from "framer-motion";

// 项目数据
const projectsData = [
	{
		id: 1,
		title: {
			zh: "神经网络解释性研究",
			en: "Neural Network Interpretability Research",
		},
		description: {
			zh: "开发新型可解释AI技术，通过可视化和特征归因使深度学习模型的决策过程更加透明和可理解。",
			en: "Developing novel explainable AI technologies to make deep learning models' decision processes more transparent and understandable through visualization and feature attribution.",
		},
		longDescription: {
			zh: '本项目旨在解决深度学习模型普遍存在的"黑盒"问题，通过开发新型可视化技术和特征归因方法，使模型决策过程更加透明。我们提出了一种基于梯度的特征归因算法，可以准确定位神经网络在做出决策时关注的图像区域，并且开发了交互式可视化工具帮助研究人员和用户理解模型的内部工作机制。目前该技术已成功应用于医疗诊断系统，提高了AI辅助诊断的可信度。',
			en: "This project aims to address the 'black box' problem prevalent in deep learning models by developing new visualization techniques and feature attribution methods to make model decision processes more transparent. We proposed a gradient-based feature attribution algorithm that can accurately locate the image regions that neural networks focus on when making decisions, and developed interactive visualization tools to help researchers and users understand the internal working mechanisms of models. This technology has been successfully applied to medical diagnostic systems, improving the credibility of AI-assisted diagnosis.",
		},
		image: "/ai-interpretability.jpg",
		timeline: {
			zh: "2022年1月 - 至今",
			en: "January 2022 - Present",
		},
		funding: {
			zh: "国家自然科学基金重点项目",
			en: "National Natural Science Foundation of China Key Project",
		},
		members: {
			zh: ["张明（项目负责人）", "王芳", "李华", "陈伟"],
			en: ["Zhang Ming (Principal Investigator)", "Wang Fang", "Li Hua", "Chen Wei"],
		},
		keywords: {
			zh: ["可解释AI", "深度学习", "特征可视化", "医学图像"],
			en: ["Explainable AI", "Deep Learning", "Feature Visualization", "Medical Imaging"],
		},
	},
	{
		id: 2,
		title: {
			zh: "多模态学习框架",
			en: "Multimodal Learning Framework",
		},
		description: {
			zh: "构建能同时处理图像、文本和音频数据的统一深度学习框架，实现跨模态信息的有效融合与理解。",
			en: "Building a unified deep learning framework capable of processing image, text, and audio data simultaneously, achieving effective fusion and understanding of cross-modal information.",
		},
		longDescription: {
			zh: "该项目探索了如何构建一个统一的深度学习框架，能够同时处理和理解多种模态的数据（图像、文本、音频等）。我们提出了一种新型的跨模态注意力机制，有效地对齐和融合来自不同模态的特征表示。基于此，我们开发了一个端到端的多模态学习系统，在图文检索、视觉问答和跨模态生成等任务上取得了显著的性能提升。该框架已被应用于智能内容分析和多模态搜索引擎中。",
			en: "This project explores how to build a unified deep learning framework capable of processing and understanding multimodal data (images, text, audio, etc.). We proposed a novel cross-modal attention mechanism that effectively aligns and fuses feature representations from different modalities. Based on this, we developed an end-to-end multimodal learning system that achieved significant performance improvements on tasks such as image-text retrieval, visual question answering, and cross-modal generation. The framework has been applied to intelligent content analysis and multimodal search engines.",
		},
		image: "/multimodal-learning.jpg",
		timeline: {
			zh: "2021年3月 - 2023年12月",
			en: "March 2021 - December 2023",
		},
		funding: {
			zh: "企业合作项目",
			en: "Enterprise Collaboration Project",
		},
		members: {
			zh: ["张明", "黄小明（项目负责人）", "刘伟", "赵强"],
			en: ["Zhang Ming", "Huang Xiaoming (Principal Investigator)", "Liu Wei", "Zhao Qiang"],
		},
		keywords: {
			zh: ["多模态学习", "跨模态检索", "注意力机制", "深度学习"],
			en: ["Multimodal Learning", "Cross-modal Retrieval", "Attention Mechanism", "Deep Learning"],
		},
	},
	{
		id: 3,
		title: {
			zh: "轻量级边缘计算框架",
			en: "Lightweight Edge Computing Framework",
		},
		description: {
			zh: "为资源受限设备设计高效神经网络架构，在保持准确率的同时显著减少计算和内存需求。",
			en: "Designing efficient neural network architectures for resource-constrained devices, significantly reducing computational and memory requirements while maintaining accuracy.",
		},
		longDescription: {
			zh: "针对物联网和移动设备等资源受限环境，本项目开发了一套轻量级神经网络架构和部署框架。通过模型压缩、知识蒸馏和网络架构搜索等技术，我们成功将复杂的深度学习模型压缩到可以在边缘设备上高效运行的程度，同时保持了较高的准确率。我们提出的MicroNet架构比现有的移动端模型减少了60%的计算量和50%的参数量，同时在多个计算机视觉任务上保持了竞争性能。该技术已成功应用于智能家居和工业物联网场景。",
			en: "For resource-constrained environments such as IoT and mobile devices, this project developed a set of lightweight neural network architectures and deployment frameworks. Through model compression, knowledge distillation, and neural architecture search techniques, we successfully compressed complex deep learning models to a level that can run efficiently on edge devices while maintaining high accuracy. Our proposed MicroNet architecture reduces the computational cost by 60% and parameter count by 50% compared to existing mobile models, while maintaining competitive performance on multiple computer vision tasks. This technology has been successfully applied to smart home and industrial IoT scenarios.",
		},
		image: "/edge-computing.jpg",
		timeline: {
			zh: "2020年9月 - 2022年8月",
			en: "September 2020 - August 2022",
		},
		funding: {
			zh: "科技部重点研发计划",
			en: "Ministry of Science and Technology Key R&D Program",
		},
		members: {
			zh: ["李明（项目负责人）", "张伟", "王强", "刘丰铭"],
			en: ["Li Ming (Principal Investigator)", "Zhang Wei", "Wang Qiang", "Liu Fengming"],
		},
		keywords: {
			zh: ["边缘计算", "模型压缩", "知识蒸馏", "低功耗AI"],
			en: ["Edge Computing", "Model Compression", "Knowledge Distillation", "Low-power AI"],
		},
	},
];

export default function ProjectsPage() {
	const { tByKey } = useLanguage();
	const [filteredProjects, setFilteredProjects] = useState(projectsData);

	const handleFilterChange = (filtered: any[]) => {
		setFilteredProjects(filtered);
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
					{tByKey("projects", "projectsTitle")}
				</Typography>

				<Typography variant="body1" paragraph sx={{ mb: 6 }}>
					{tByKey("projects", "projectsDescription")}
				</Typography>

				<ProjectsFilter
					projects={projectsData}
					onFilterChange={handleFilterChange}
				/>				<Box>
					{filteredProjects.length > 0 ? (
						filteredProjects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<Typography
								variant="body1"
								color="text.secondary"
								align="center"
								sx={{ py: 5 }}
							>
								{tByKey("projects", "noProjectsFound")}
							</Typography>
						</motion.div>
					)}
				</Box>
			</Box>
		</PageLayout>
	);
}
