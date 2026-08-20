import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  href = "#enquire",
  variant = "dark",
  type = "link"
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "dark" | "light" | "lime";
  type?: "link" | "button";
}) {
  const cls =
    variant === "lime"
      ? "bg-lime text-ink hover:bg-white"
      : variant === "light"
      ? "bg-white text-ink hover:bg-lime"
      : "bg-ink text-white hover:bg-violet";

  const content = (
    <span className={`group inline-flex items-center gap-3 rounded-full px-5 py-3.5 text-sm font-bold transition ${cls}`}>
      {children}
      <span className="grid size-7 place-items-center rounded-full bg-black/10 group-hover:rotate-45 transition">
        <ArrowUpRight size={15} />
      </span>
    </span>
  );

  if (type === "button") return <button type="submit">{content}</button>;
  return <Link href={href}>{content}</Link>;
}
