
import React from "react";
import { X } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl h-[90vh] bg-background border border-white/10 rounded-xl z-10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors z-50"
        >
          <X className="h-6 w-6" />
        </button>
        <ScrollArea className="h-full p-6">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Modal;
