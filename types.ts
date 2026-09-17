export type TargetRole = 'all' | 'director' | '3d-storyboard' | 'ai-content';

export interface StoryboardShot {
  id: string;
  act: string;
  sceneNo: string;
  shotNo: string;
  time?: string;
  location: string;
  camera: string; // e.g. "CU", "MCU", "OTS - MFS", "LS", "Bird Eye - MS"
  props?: string;
  talents?: string;
  wardrobe?: string;
  description: string;
  sketchNote?: string;
  panelDoodleType?: 'condo' | 'dining' | 'adoption-box' | 'lamp' | 'confrontation' | 'hug' | 'polaroid' | 'anime-fight' | 'vfx-portal' | 'character-sheet';
}

export interface ProjectItem {
  id: string;
  title: string;
  titleEn: string;
  type: 'Narrative Film' | 'Animation & VFX' | 'Documentary';
  typeZh: '剧情短片' | '动画与合成' | '纪录片' | '公益纪录片';
  year: string;
  roles: string[];
  bilibiliUrl: string;
  bilibiliBvid: string;
  summary: string;
  storyboardPagesCount: number;
  cameraSetupsCount: number;
  awards?: string[];
  highlights: string[];
  equipment: string[];
  palette: string[];
  storyboardPreview: StoryboardShot[];
  directorStatement: string;
  coverAccent: string;
  targetRoles?: TargetRole[];
}

export interface AwardItem {
  id: string;
  title: string;
  titleEn: string;
  festival: string;
  festivalEn: string;
  year: string;
  badge: string;
  category: string;
  description: string;
  certificateType: 'nitiin-film' | 'nitiin-poster' | 'singapore-carnival' | 'tongji-scholarship';
}

export interface ExperienceItem {
  period: string;
  company: string;
  companyEn: string;
  role: string;
  location: string;
  points: string[];
}
