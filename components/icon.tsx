import { IconType } from "react-icons";
interface IconProps {
  Icon: IconType;
  size?: number;
  color?: string;
  className?: string;
}
export default function Icon({ Icon, size, color, className }: IconProps) {
  return (
    <div className="bg-white border-gray-300 border-[3px] p-2 rounded-full cursor-pointer w-auto">

        <Icon size={size} color={color} className={className} />
    </div>)
}
