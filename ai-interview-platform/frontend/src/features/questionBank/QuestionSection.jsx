import {
  ChevronDown,
  ChevronUp,
  UserRound,
  Sparkles,
} from "lucide-react";


function DifficultyBadge({ difficulty }) {
  const styles = {
    Easy: "bg-emerald-50 text-emerald-600",
    Medium: "bg-orange-50 text-orange-600",
    Hard: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${
        styles[difficulty] || "bg-slate-50 text-slate-600"
      }`}
    >
      {difficulty}
    </span>
  );
}

export default function QuestionSection({
  topic,
  questions,
  openQuestion,
  setOpenQuestion,
}) {
  return (
    <div className="min-w-0 flex-1">
      
      {/* Topic Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-slate-900">
            {topic.topic}
          </h2>

          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
            {questions.length} Questions
          </span>
        </div>

        <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600">
          Topic ID: {topic.topicId}
        </span>
      </div>

      {/* Questions */}
      <div className="space-y-3">
        {questions.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-sm font-medium text-slate-700">
              No questions found
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Try changing your search or difficulty filter.
            </p>
          </div>
        ) : (
          questions.map((item, index) => {
            const isOpen = openQuestion === item.id;

            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-xl border bg-white shadow-sm transition ${
                  isOpen
                    ? "border-emerald-200"
                    : "border-slate-200"
                }`}
              >
                {/* Question Header */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenQuestion(isOpen ? null : item.id)
                  }
                  className={`flex w-full items-center gap-4 px-5 py-4 text-left ${
                    isOpen ? "bg-emerald-50/70" : "bg-white"
                  }`}
                >
                  <span className="w-7 flex-shrink-0 text-sm font-bold text-emerald-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm font-semibold text-slate-800">
                    {item.question}
                  </span>

                  <DifficultyBadge difficulty={item.difficulty} />

                  {isOpen ? (
                    <ChevronUp
                      size={18}
                      className="flex-shrink-0 text-slate-500"
                    />
                  ) : (
                    <ChevronDown
                      size={18}
                      className="flex-shrink-0 text-slate-500"
                    />
                  )}
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5">
                    <div className="border-t border-slate-100 pt-4">
                      
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <Sparkles
                            size={16}
                            className="text-emerald-500"
                          />

                          <span className="text-[11px] font-bold uppercase tracking-wide text-emerald-500">
                            Suggested Model Answer
                          </span>
                        </div>

                        <p className="text-sm leading-6 text-slate-600">
                          {item.answer}
                        </p>
                      </div>

                      {/* Added By */}
                      <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                        <UserRound size={15} />

                        <span>
                          Added by:{" "}
                          <span className="font-semibold text-slate-600">
                            Prof. Sharma
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}