export default function ResumeTipsSection() {
  const score = 87;

  const tips = [
    "Keep your resume to 1-2 pages for better readability.",
    "Use standard section headings like Experience, Education, Skills.",
    "Tailor your resume for each specific job application.",
    "Use strong action verbs to describe your achievements.",
  ];

  return (
    <div className="space-y-6">

      {/* ================= ATS SCORE ================= */}
      <section className="bg-white rounded-2xl p-6 min-h-[390px] flex flex-col items-center justify-center">

        <h2 className="text-lg font-bold text-[#151b2c] mb-5">
          ATS Compatibility Score
        </h2>


        {/* SCORE CIRCLE */}
        <div
          className="relative w-[160px] h-[160px] rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(
              #10b981 ${score * 3.6}deg,
              #e5e7eb ${score * 3.6}deg
            )`,
          }}
        >

          {/* INNER CIRCLE */}
          <div className="absolute w-[136px] h-[136px] rounded-full bg-white flex flex-col items-center justify-center">

            <span className="text-[44px] leading-none font-bold text-[#151b2c]">
              {score}
            </span>

            <span className="text-sm text-gray-500 mt-2">
              / 100
            </span>

          </div>

        </div>


        {/* RATING */}
        <div className="mt-5 px-4 py-1.5 rounded-full bg-[#ecfbf5]">
          <span className="text-sm font-semibold text-[#08a66d]">
            Overall Rating: Good
          </span>
        </div>


        {/* DESCRIPTION */}
        <p className="text-sm text-gray-500 text-center max-w-[250px] mt-3 leading-5">
          Your resume is highly optimized for recruitment systems,
          placing you in the top 15% of candidates.
        </p>

      </section>


      {/* ================= QUICK TIPS ================= */}
      <section className="bg-white rounded-2xl p-6">

        <h2 className="text-lg font-bold text-[#151b2c] mb-5">
          Quick Resume Tips
        </h2>


        <div className="space-y-5">

          {tips.map((tip) => (
            <div
              key={tip}
              className="flex items-start gap-3"
            >

              {/* CHECK */}
              <div className="w-5 h-5 rounded-full bg-[#ecfbf5] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#10b981] text-xs font-bold">
                  ✓
                </span>
              </div>


              {/* TEXT */}
              <p className="text-sm text-gray-500 leading-5">
                {tip}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* ================= CTA Download ================= */}
      {/* <section className="bg-[#5146e5] rounded-2xl p-6 text-center">

        <h2 className="text-lg font-bold text-white">
          Ready to send?
        </h2>

        <p className="text-sm text-indigo-100 mt-3 leading-5">
          Get an instantly formatted, ATS-compliant copy of your
          polished resume now.
        </p>


        <button
          type="button"
          className="mt-5 w-full bg-white text-[#5146e5] rounded-lg py-3 px-4 text-sm font-bold hover:bg-gray-50 transition"
        >
          Download Optimized Resume
        </button>

      </section> */}

    </div>
  );
}