'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
type NavItem = { id: string; label: string; href: string; exact?: boolean };

export interface ComponentsNavigationProps {
  items: NavItem[];
}

export function Navigation({ items }: ComponentsNavigationProps) {
  const pathname = usePathname();
  return (
    <ul className="shadow-md p-4 flex gap-4">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={`${
              (item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href)) && 'text-blue-500 font-bold'
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
