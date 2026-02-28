"use client";

import { useClipboard } from "@/hooks/useClipboard";
import { useSnackbar } from "@/context/SnackbarContext";
import { useUiStrings } from "@/context/LocaleContext";

interface CopyButtonProps {
  text: string;
  label: string;
  children: React.ReactNode;
}

export function CopyButton({ text, label, children }: CopyButtonProps) {
  const { copy } = useClipboard();
  const { show } = useSnackbar();
  const ui = useUiStrings();

  const handleClick = async () => {
    const success = await copy(text);
    show(success ? ui.copySuccess(label) : ui.copyFail);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1 transition-colors hover:text-text"
      title={ui.copyAction(label)}
    >
      {children}
    </button>
  );
}
