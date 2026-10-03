import { Search, ChevronDown } from "lucide-react";

export default function QuestionBankFilters({
  search,
  setSearch,
  difficulty,
  setDifficulty,
}) {
  return (
    <div className="mb-5 flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      
      {/* Search */}
      <div className="relative flex-1">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions..."
          className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50"
        />
      </div>

      {/* Difficulty */}
      <div className="relative w-48">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-600 outline-none focus:border-emerald-400"
        >
          <option value="All">Difficulty: All Levels</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
        />
      </div>
    </div>
  );
}