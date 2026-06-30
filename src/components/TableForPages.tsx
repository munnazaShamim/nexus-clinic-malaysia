"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Column {
  key: string;
  header: string;
  className?: string;
}

interface TableForPagesProps {
  columns: Column[];
  data: Record<string, any>[];
  title?: string;
  subtitle?: string;
  variant?: "default" | "compact" | "detailed";
  fadeInUp?: any;
  className?: string;
}

export default function TableForPages({
  columns,
  data,
  title,
  subtitle,
  variant = "default",
  fadeInUp,
  className = "",
}: TableForPagesProps) {
  const [expandedRows, setExpandedRows] = useState<number[]>([0]);

  const toggleRow = (index: number) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((i) => i !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  const primaryColumn = columns[0];
  const secondaryColumns = columns.slice(1);

  return (
    <motion.div variants={fadeInUp} className={`max-w-6xl container mx-auto ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <h2 className="font-georgia text-2xl md:text-3xl lg:text-4xl text-brown mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-taupe font-inter text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Desktop: Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
          <thead className="bg-wine text-light">
            <tr>
              {columns.map((column, idx) => (
                <th
                  key={idx}
                  className={`p-4 text-left font-georgia ${column.className || ""}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="border-t border-taupe/10 hover:bg-cream/50 transition-colors"
              >
                {columns.map((column, colIdx) => (
                  <td
                    key={colIdx}
                    className={`p-4 font-inter text-taupe ${column.className || ""}`}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: Card View */}
      <div className="md:hidden space-y-4">
        {data.map((row, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-cream rounded-xl border border-taupe/20 overflow-hidden shadow-md"
          >
            <div
              className={`p-4 ${variant === "detailed" ? "cursor-pointer" : ""}`}
              onClick={() => variant === "detailed" && toggleRow(idx)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-5 bg-wine rounded-full"></div>
                    <p className="font-inter text-xs text-taupe uppercase">
                      {primaryColumn.header}
                    </p>
                  </div>
                  <p className="font-georgia text-brown font-semibold text-lg">
                    {row[primaryColumn.key]}
                  </p>
                </div>
                
                {variant === "detailed" && (
                  <button
                    className="text-wine"
                    aria-label={expandedRows.includes(idx) ? "Collapse row" : "Expand row"}
                  >
                    {expandedRows.includes(idx) ? (
                      <ChevronUp className="w-5 h-5" aria-hidden={true} />
                    ) : (
                      <ChevronDown className="w-5 h-5" aria-hidden={true} />
                    )}
                  </button>
                )}
              </div>

              {/* Show all fields for default/compact */}
              {variant !== "detailed" && (
                <div className="mt-3 space-y-2">
                  {secondaryColumns.map((column, colIdx) => (
                    <div key={colIdx} className="grid grid-cols-[140px_1fr] gap-3 border-b border-taupe/10 pb-2">
                      <span className="font-inter text-xs text-taupe">
                        {column.header}
                      </span>
                      <span className="font-inter text-sm text-brown font-medium">
                        {row[column.key]}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Expanded content for detailed variant */}
            {variant === "detailed" && expandedRows.includes(idx) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="border-t border-taupe/10 p-4 space-y-3"
              >
                {secondaryColumns.map((column, colIdx) => (
                  <div key={colIdx}>
                    <p className="font-inter text-xs text-taupe uppercase mb-1">
                      {column.header}
                    </p>
                    <p className="font-inter text-sm text-brown">
                      {row[column.key]}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}