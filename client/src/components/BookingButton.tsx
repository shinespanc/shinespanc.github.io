import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface BookingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "outline" | "ghost";
}

export function BookingButton({ className, variant = "primary", ...props }: BookingButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/30",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "text-primary hover:bg-primary/5",
  };

  return (
    <a
      href="https://www.vagaro.com/shinebeautysalonspa/services"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseStyles, variants[variant], className)}
    >
      <span>Book Now</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  );
}
