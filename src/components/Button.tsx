import Link from "next/link";
import clsx from "clsx";

const baseStyles: any = {
  solid:
    "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none transition duration-150",
};

const variantStyles: any = {
  solid: {
    slate:
      "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    blue: "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 transition duration-150",
    white:
      "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white transition duration-150",
  },
  outline: {
    slate:
      "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 transition duration-150",
    white:
      "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white transition duration-150",
  },
};

export type ButtonProps = {
  variant?: string;
  color?: string;
  href?: string;
  className?: string | string[];
};
export function Button({
  variant = "solid",
  color = "slate",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        className
      )}
      {...props}
    />
  );
}

export type ButtonLinkProps = {
  variant?: string;
  color?: string;
  href: string;
  children: React.ReactNode;
  className?: string | string[];
};
export function ButtonLink({
  variant = "solid",
  color = "slate",
  href,
  children,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link href={href}>
      <span
        className={clsx(
          baseStyles[variant],
          variantStyles[variant][color],
          className
        )}
        {...props}
      >
        {children}
      </span>
    </Link>
  );
}
