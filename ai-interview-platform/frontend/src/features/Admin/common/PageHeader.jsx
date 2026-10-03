import React from "react";

export default function PageHeader({ title, description }) {
  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
        {title}
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}