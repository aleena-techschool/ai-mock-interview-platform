
export default function InterviewQusetionAnswer({ interview }) {
  const questions = interview?.questions ?? [];

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-bold text-gray-800">
            Interview Questions
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Questions asked during the interview
          </p>
        </div>

        <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
          {questions.length} Questions
        </span>
      </div>

      {/* Questions */}
      <div className="space-y-4">

        {questions.length > 0 ? (
          questions.map((item, index) => (
            <div
              key={item.id ?? index}
              className="border border-gray-100 rounded-xl p-5"
            >

              {/* Question Number */}
              <div className="flex items-start gap-3">

                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>

                {/* Question */}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800 leading-6">
                    {item.question}
                  </p>

                  {/* Answer */}
                  {item.answer && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-gray-500 mb-1">
                        Your Answer
                      </p>

                      <p className="text-xs text-gray-600 leading-5 bg-gray-50 rounded-lg p-3">
                        {item.answer}
                      </p>
                    </div>
                  )}

                  {/* Score */}
                  {item.score !== undefined && (
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-xs text-gray-400">
                        Score:
                      </span>

                      <span className="text-xs font-bold text-green-600">
                        {item.score}
                      </span>
                    </div>
                  )}
                </div>

              </div>

            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-sm text-gray-400">
              No interview questions available.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

