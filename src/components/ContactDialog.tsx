import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactDialog = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" shadow-lg">Contact Us</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl mb-4">Contact Us</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a
                href="tel:+1234567890"
                className="hover:text-primary transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:contact@auberge.com"
                className="hover:text-primary transition-colors"
              >
                contact@auberge.com
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
