import { FC, SVGProps } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "./DCIcons";

export type IconName = "plus" | "minus" | "trash";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  fill?: string;
}

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  plus: PlusIcon,
  minus: MinusIcon,
  trash: TrashIcon,
};

export const Icon: FC<IconProps> = ({
  name,
  size,
  fill = "currentColor",
  ...props
}) => {
  const SpecificIcon = icons[name];
  const w = size ?? 24;
  const h = size ?? 24;

  return <SpecificIcon width={w} height={h} fill={fill} {...props} />;
};

export default Icon;
