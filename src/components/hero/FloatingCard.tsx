interface Props {
  title: string;
  value: string;
}

export default function FloatingCard({
  title,
  value,
}: Props) {
  return (
    <div className="glass rounded-2xl p-5 shadow-xl">
      <h4 className="text-secondary text-sm">
        {title}
      </h4>

      <p className="mt-1 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}