import { IconType } from "react-icons";

interface IconButtonProps {
  Icon: IconType;
  label: string;
  onClick: () => void;
}

export default function IconButton({ Icon, label, onClick }: IconButtonProps) {
  return (
    <div
      className="md:hidden flex justify-between items-center"
      onClick={onClick}
    >
      <span>
        <Icon size={24} />
      </span>
      <button className="text-gray-700 font-semibold hover:text-gray-900">
        {label}
      </button>
    </div>
  );
}
