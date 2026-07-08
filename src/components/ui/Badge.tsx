interface Props {
  children: React.ReactNode;
}

export default function Badge({ children }: Props) {
  return (
    <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
      {children}
    </span>
  );
}