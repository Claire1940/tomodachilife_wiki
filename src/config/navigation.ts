import { BookOpen, Gamepad2, Users, Cpu, Star, Layers, Map } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'release', path: '/release', icon: Star, isContentType: true },
	{ key: 'demo', path: '/demo', icon: Gamepad2, isContentType: true },
	{ key: 'switch', path: '/switch', icon: Layers, isContentType: true },
	{ key: 'personality', path: '/personality', icon: Users, isContentType: true },
	{ key: 'mii', path: '/mii', icon: Map, isContentType: true },
	{ key: 'mod', path: '/mod', icon: Cpu, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['release', 'demo', 'switch', 'personality', 'mii', 'mod', 'guide']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
