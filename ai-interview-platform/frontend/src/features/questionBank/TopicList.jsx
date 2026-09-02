import { ChevronRight } from "lucide-react";

export default function TopicList({
  topics,
  selectedTopic,
  setSelectedTopic,
}) {
  return (
    <div className="w-[280px] flex-shrink-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

      {/* Header */}
      <div className="mb-3 flex items-center justify-between px-1">
        <h2 className="text-sm font-bold text-slate-800">
          Topics
        </h2>

        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
          {topics.length}
        </span>
      </div>

      {/* Topics */}
      <div className="space-y-2">
        {topics.map((topic) => {
          const isSelected = selectedTopic === topic.topicId; //check selected topic and current topic id is equal

          return (
            <button
              key={topic.topicId}
              type="button"
              
              onClick={() => setSelectedTopic(topic.topicId)}
              className={`group relative flex w-full items-center justify-between rounded-lg border px-3 py-3 text-left transition-all ${
                isSelected
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-slate-200 bg-white hover:border-emerald-200 hover:bg-slate-50"
              }`}
            >
              {/* Green selected indicator */}
              {isSelected && (
                <span className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-emerald-500" />
              )}

              <div className="min-w-0 pl-1">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {topic.topic}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {topic.count}{" "}
                  {topic.count === 1 ? "question" : "questions"}
                </p>
              </div>

              <ChevronRight
                size={18}
                className={`flex-shrink-0 transition ${
                  isSelected
                    ? "text-emerald-500"
                    : "text-slate-400 group-hover:text-emerald-500"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}