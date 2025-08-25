"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  let adjustedSegments = [...segments];

  if (segments.includes("marcas")) {
    const index = segments.indexOf("marcas");
    adjustedSegments.splice(index, 0, "servicios");
  }

  const items = adjustedSegments.map((segment, index) => {
    const href = "/" + adjustedSegments.slice(0, index + 1).join("/");
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href,
    };
  });

  return (
    <nav className="flex items-center text-sm text-gray-600 space-x-2 mb-4">
      <Link href="/" className="flex items-center hover:text-blue-600">
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <span className="mx-2">/</span>

          {item.label}

        </span>
      ))}
    </nav>
  );
}



