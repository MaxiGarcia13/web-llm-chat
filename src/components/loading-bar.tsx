interface LoadingBarProps {
  progress: number
  children?: React.ReactNode
}

export function LoadingBar({ progress, children }: LoadingBarProps) {
  const percentage = `${progress * 100}%`;

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div className="h-full bg-purple-700 rounded-full" style={{ width: percentage }} />
      </div>

      <div className="flex items-center justify-center text-sm text-neutral-500">{children}</div>
    </div>
  );
}
