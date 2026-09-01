
export default function InterviewResultDetails({ interview }) {
  return (
    <div className="bg-white rounded-b-2xl border border-gray-100 p-6">

      <div className="grid grid-cols-3 gap-5">

        {/* Strengths */}
        <div className="border border-gray-100 rounded-xl p-5">

          <h2 className="text-sm font-bold text-gray-800 mb-4">
            Strengths
          </h2>

          {interview?.strengths?.map((strength, index) => (
            <div
              key={index}
              className="flex gap-2 mb-3"
            >
              <span className="text-green-500 font-bold">
                ✓
              </span>

              <p className="text-xs text-gray-600">
                {strength}
              </p>
            </div>
          ))}

        </div>

        {/* Areas to Improve */}
        <div className="border border-gray-100 rounded-xl p-5">

          <h2 className="text-sm font-bold text-gray-800 mb-4">
            Areas to Improve
          </h2>

          {interview?.areasToImprove?.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 mb-3"
            >
              <span className="text-yellow-500">
                ⚠
              </span>

              <p className="text-xs text-gray-600">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* Trainer Feedback */}
        <div className="border border-gray-100 rounded-xl p-5">

          <h2 className="text-sm font-bold text-gray-800 mb-4">
            Trainer Feedback
          </h2>

          <div className="flex items-start gap-4">

            {/* Avatar */}
            <div className="size-11 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
              TR
            </div>

            <div>

              <p className="text-xs font-semibold text-gray-800">
                {interview?.trainerFeedback?.trainer}
              </p>

              <p className="text-xs text-gray-400 mb-2">
                {interview?.trainerFeedback?.designation}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                {interview?.trainerFeedback?.comment}
              </p>

            </div>

          </div>
        </div>

      </div>

      {/* Download Report */}
      <div className="flex justify-center mt-6">

        {interview?.report?.available && (
          <button
            className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg flex items-center gap-2"
          >

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14"
              />
            </svg>

            Download Report (PDF)

          </button>
        )}

      </div>
    </div>
  );
}

