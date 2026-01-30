import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingPanel({ isOpen, onClose }: BookingPanelProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="left" 
        className="w-[50%] sm:w-[50%] p-0 border-r border-primary/20 shadow-2xl"
      >
        <div className="flex flex-col h-full">
          <SheetHeader className="p-4 border-b bg-background flex flex-row items-center justify-between space-y-0">
            <SheetTitle className="font-display text-xl font-bold text-primary">Book an Appointment</SheetTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-5 w-5" />
            </Button>
          </SheetHeader>
          <div className="flex-1 overflow-hidden">
            <iframe
              src="https://www.vagaro.com/shinebeautysalonspa/services"
              className="w-full h-full border-none"
              title="Vagaro Booking"
              allow="payment"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
