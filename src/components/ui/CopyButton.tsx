"use client";

import { useClipboard } from "@/hooks/useClipboard";
import { useSnackbar } from "@/context/SnackbarContext";

interface CopyButtonProps {
  text: string;
  label: string;
  children: React.ReactNode;
}

export function CopyButton({ text, label, children }: CopyButtonProps) {
  const { copy } = useClipboard();
  const { show } = useSnackbar();

  const handleClick = async () => {
    const success = await copy(text);
    show(success ? `${label} 복사 완료` : "복사에 실패했습니다");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1 transition-colors hover:text-text"
      title={`${label} 복사`}
    >
      {children}
    </button>
  );
}
