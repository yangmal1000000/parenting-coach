// Maps string icon names to Lucide components
import {
  Activity, MessageSquare, Users, Puzzle, Baby,
  AlertTriangle, Frown, Angry, TrendingDown, CloudRain,
  ThermometerSun, Moon, DoorClosed, RefreshCw, Link2,
  Flame, TrendingUp, Clock, Heart, MessageCircle, BarChart3,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Activity, MessageSquare, Users, Puzzle, Baby,
  AlertTriangle, Frown, Angry, TrendingDown, CloudRain,
  ThermometerSun, Moon, DoorClosed, RefreshCw, Link2,
  Flame, TrendingUp, Clock, Heart, MessageCircle, BarChart3,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] || Activity;
}
