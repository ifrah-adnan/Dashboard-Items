import { LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";
interface SideBareButtonProps extends ButtonProps {
  icon?: LucideIcon;

  className?: string;
}

export function SideBarButton({
  icon: Icon,
  className,
  children,
  ...props
}: SideBareButtonProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "gap-3 shadow-xl shadow-blue-500 justify-start transition duration-150 ease-in-out hover:bg-blue-800",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span> {children}</span>
    </Button>
  );
}
