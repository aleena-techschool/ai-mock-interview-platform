import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Breadcrumbs({ items }) {
  return (
    <nav className="px-6 pt-6 flex items-center text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={index}
            className="flex items-center"
          >
            {!isLast && item.path ? (
              <Link
                to={item.path}
                className="
                  text-gray-500
                  hover:text-emerald-600
                  transition-colors
                  duration-200
                "
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? "font-medium text-gray-800"
                    : "text-gray-500"
                }
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <ChevronRight
                size={15}
                strokeWidth={1.8}
                className="mx-2 text-gray-300"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
export default Breadcrumbs;