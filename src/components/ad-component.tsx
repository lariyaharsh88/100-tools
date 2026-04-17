type AdComponentProps = {
  placement: "top" | "middle" | "bottom";
};

export default function AdComponent({ placement }: AdComponentProps) {
  return (
    <div className="ui-surface ui-surface-muted rounded-2xl border-dashed p-6 text-center text-sm ui-text-muted">
      Ad Placeholder ({placement.toUpperCase()} BANNER)
    </div>
  );
}
