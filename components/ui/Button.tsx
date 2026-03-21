import Link from 'next/link';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'outline' | 'navy';
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({ href, variant = 'primary', children, className = '', type = 'button', onClick }: ButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : 'btn-navy';
  const classes = `${base} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
