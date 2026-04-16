type AdComponentProps = {
  placement: "top" | "middle" | "bottom";
};

export default function AdComponent({ placement }: AdComponentProps) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-400">
      Ad Placeholder ({placement.toUpperCase()} BANNER)
    </div>
  );
}
