interface CatProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilter({ categories, activeCategory, onSelect }: CatProps) {
  return (
    <div className="flex flex-col gap-2">
    {["All", ...categories].map(cat => (
    <button
      key={cat}
      onClick={() => onSelect(cat)}
      className={`text-left px-3 py-1 rounded ${
        activeCategory === cat ? "bg-blue-600 text-white" : "hover:bg-gray-200"
      }`}
    >
      {cat}
    </button>
    ))}
    </div>
  );
}
