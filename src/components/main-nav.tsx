"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-provider"

// 用于保存中英文版本的导航内容
interface NavItem {
  title: { zh: string; en: string };
  href: string;
  description: { zh: string; en: string };
}

const components: NavItem[] = [
  {
    title: { 
      zh: "研究论文", 
      en: "Publications" 
    },
    href: "/publications",
    description: { 
      zh: "我发表的学术论文和研究成果汇总。", 
      en: "A collection of my published academic papers and research outcomes."
    },
  },
  {
    title: { 
      zh: "研究项目", 
      en: "Projects" 
    },
    href: "/projects",
    description: { 
      zh: "当前和过去参与的重要研究项目信息。", 
      en: "Information about current and past research projects."
    },
  },
  {
    title: { 
      zh: "学术成就", 
      en: "Achievements" 
    },
    href: "/achievements",
    description: { 
      zh: "获得的奖项、荣誉和学术认可。", 
      en: "Awards, honors, and academic recognition received."
    },
  },
]

export function MainNav() {
  const { language, t } = useLanguage();
  
  return (    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/85 shadow-md border-b border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] flex justify-between items-center py-4 px-4 md:px-8">
      <Link href="/" className="flex items-center space-x-2 group">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4a90e2] to-[#357abd] flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
          <span className="text-lg font-bold">FL</span>
        </div>
        <span className="font-bold text-xl text-[#2c3e50] dark:text-[#f5f5dc] group-hover:text-[#4a90e2] transition-colors">{t("title", "学术主页", "Academic Homepage")}</span>
      </Link><div className="flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList className="hover:border-white">
            <NavigationMenuItem>              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  "transition-all duration-300 hover:text-[#4a90e2] hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.1)] px-5 py-2.5 rounded-xl text-[#2c3e50] dark:text-[#f5f5dc] text-[0.95rem] font-medium tracking-wide relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#4a90e2] before:to-[#357abd] before:opacity-0 before:transition-opacity before:duration-300 before:z-0 hover:before:opacity-15 hover:transform hover:-translate-y-[2px]"
                )}>
                  {t("about", "关于我", "About Me")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-all duration-300 hover:text-[#4a90e2] hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.1)] px-5 py-2.5 rounded-xl text-[#2c3e50] dark:text-[#f5f5dc] text-[0.95rem] font-medium tracking-wide relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#4a90e2] before:to-[#357abd] before:opacity-0 before:transition-opacity before:duration-300 before:z-0 hover:before:opacity-15 hover:transform hover:-translate-y-[2px]">{t("research", "研究工作", "Research")}</NavigationMenuTrigger>              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] backdrop-blur-xl bg-[rgba(255,255,255,0.97)] dark:bg-[rgba(21,29,36,0.97)] border border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] rounded-xl shadow-lg">
                  {components.map((component) => (
                    <ListItem
                      key={component.title.zh}
                      title={language === "zh" ? component.title.zh : component.title.en}
                      href={component.href}
                      className="transition-all duration-300 hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.05)] rounded-lg"
                    >
                      {language === "zh" ? component.description.zh : component.description.en}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  "transition-all duration-300 hover:text-[#4a90e2] hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.1)] px-5 py-2.5 rounded-xl text-[#2c3e50] dark:text-[#f5f5dc] text-[0.95rem] font-medium tracking-wide relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#4a90e2] before:to-[#357abd] before:opacity-0 before:transition-opacity before:duration-300 before:z-0 hover:before:opacity-15 hover:transform hover:-translate-y-[2px]"
                )}>
                  {t("blog", "博客", "Blog")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  "transition-all duration-300 hover:text-[#4a90e2] hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.1)] px-5 py-2.5 rounded-xl text-[#2c3e50] dark:text-[#f5f5dc] text-[0.95rem] font-medium tracking-wide relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#4a90e2] before:to-[#357abd] before:opacity-0 before:transition-opacity before:duration-300 before:z-0 hover:before:opacity-15 hover:transform hover:-translate-y-[2px]"
                )}>
                  {t("contact", "联系方式", "Contact")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:text-[#4a90e2] focus:bg-[rgba(74,144,226,0.1)] focus:text-[#4a90e2] border border-transparent hover:border-[rgba(74,144,226,0.2)] hover:shadow-md relative overflow-hidden group",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none mb-2.5 text-[#2c3e50] dark:text-[#f5f5dc] group-hover:text-[#4a90e2] transition-colors">{title}</div>
          <p className="line-clamp-2 text-sm leading-relaxed text-[rgba(44,62,80,0.7)] dark:text-[rgba(245,245,220,0.7)] group-hover:text-[rgba(74,144,226,0.9)] transition-colors">
            {children}
          </p>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4a90e2] to-[#357abd] group-hover:w-full transition-all duration-500"></div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
