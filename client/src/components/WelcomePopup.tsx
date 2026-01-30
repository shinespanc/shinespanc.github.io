import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedShine");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasVisitedShine", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md border-primary/20">
        <DialogHeader className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <Sparkles className="w-8 h-8" />
          </div>
          <DialogTitle className="font-display text-3xl font-bold">Welcome to Shine!</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            Experience premium beauty services in High Point, NC. We're so glad you're here.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-center">
          <p className="text-sm text-muted-foreground italic">
            "Reveal Your Inner Glow"
          </p>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button 
            onClick={handleClose}
            className="w-full sm:w-auto px-8 rounded-full font-semibold"
          >
            Start Exploring
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
