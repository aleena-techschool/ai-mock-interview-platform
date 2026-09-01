import { useRef, useState } from "react";

export default function ResumeUploadSection() {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    // Check PDF
    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF resume.");
      return;
    }

    // Check file size
    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("File size should be less than 10MB.");
      return;
    }

    setFile({
      name: selectedFile.name,
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files?.[0];

    handleFile(droppedFile);
  };

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  return (
    <section
      onClick={handleBrowse}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="w-full min-h-[210px] bg-white rounded-2xl border border-dashed border-[#5548e8] flex items-center justify-center px-5 py-8 cursor-pointer hover:bg-[#fafaff] transition"
    >
      <div className="text-center pointer-events-none">

        {/* Upload Icon */}
        <div className="w-14 h-14 mx-auto rounded-full bg-[#eef1f5] flex items-center justify-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5146e5"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <polyline points="9 15 12 12 15 15" />
          </svg>
        </div>

        {/* Heading */}
        <h3 className="mt-4 text-base sm:text-lg font-semibold text-[#151b2c]">
          Drag & drop your resume PDF here
        </h3>

        {/* Description */}
        <p className="mt-1 text-sm text-gray-500">
          or click to browse from your computer (Max 10MB)
        </p>

        {/* Uploaded File */}
        {file && (
          <div className="mt-4 inline-flex items-center px-3 py-2 rounded-lg bg-[#ecfbf5]">
            <span className="text-xs sm:text-sm font-semibold text-[#08a66d]">
              {file.name} successfully scanned
            </span>
          </div>
        )}

        {/* File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf,.pdf"
          className="hidden"
          onChange={(e) => {
            handleFile(e.target.files?.[0]);

            // Allows selecting the same file again
            e.target.value = "";
          }}
        />

      </div>
    </section>
  );
}