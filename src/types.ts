export interface TimelineItem {
  id: string;
  time: string;
  title: string;
  description: string;
  arabicTitle?: string;
  icon?: string;
}

export interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}
