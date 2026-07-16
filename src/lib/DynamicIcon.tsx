import { useMemo } from "react";
import { getIcon } from "./iconMap";

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
};

export function DynamicIcon({ name, size = 20, color, style, className }: IconProps) {
  const Cmp = useMemo(() => getIcon(name), [name]);
  return <Cmp size={size} color={color} style={style} className={className} />;
}
