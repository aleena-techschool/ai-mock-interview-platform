import { useMemo, useState } from "react";

import Sidebar from "../features/dashboard/Sidebar";
import TopBar from "../features/dashboard/TopBar";


import QuestionBankFilters from "../features/questionBank/QuestionBankFilter";
import TopicList from "../features/questionBank/TopicList";
import QuestionSection from "../features/questionBank/QuestionSection";

import questionBankData from "../mock/questionBankData";

export default function QuestionBankPage() {

  // this is to make green and button effect for selected topic
  const [selectedTopic, setSelectedTopic] = useState(
    questionBankData[0]?.topicId || ""
  );
  
  // initialize searched contet to null
  const [search, setSearch] = useState("");

  // initialize defficulty to all
  const [difficulty, setDifficulty] = useState("All");

  //set first question and answer to be opened
  const [openQuestion, setOpenQuestion] = useState(
    questionBankData[0]?.id || null
  );

  // Create topics dynamically from JSON : make unique topic grouping
  // useMemo is used here to avoid recalculating the topics data unnecessarily.
  const topics = useMemo(() => {
    const topicMap = {};

    questionBankData.forEach((item) => {
      if (!topicMap[item.topicId]) {
        topicMap[item.topicId] = {
          topicId: item.topicId,
          topic: item.topic,
          count: 0,
        };
      }

      topicMap[item.topicId].count += 1;
    });

    return Object.values(topicMap);
  }, []);

  // Selected topic // in TopicList compo nent, we are passing selectedTopic and 
  // setSelectedTopic as props. When a topic is clicked, it updates the selectedTopic 
  // state in the parent component (QuestionBankPage).
  //  This allows the parent component to know which topic is currently selected and
  //  can filter the questions accordingly.
  const selectedTopicData = useMemo(() => {
    return (
      topics.find(
        (topic) => topic.topicId === selectedTopic
      ) || topics[0]
    );
  }, [topics, selectedTopic]);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    if (!selectedTopicData) return [];

    return questionBankData.filter((item) => {
      const matchesTopic =
        item.topicId === selectedTopicData.topicId;

      const matchesSearch =
        item.question
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDifficulty =
        difficulty === "All" ||
        item.difficulty === difficulty;

      return (
        matchesTopic &&
        matchesSearch &&
        matchesDifficulty
      );
    });
  }, [
    selectedTopicData,
    search,
    difficulty,
  ]);


  //setSelectedTopic(topicId) = Show new topic
  // setOpenQuestion(null) = Close any previously opened question
  
  const handleTopicChange = (topicId) => {
    setSelectedTopic(topicId);
    setOpenQuestion(null);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      
      {/* Existing Sidebar */}
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        
        {/* Existing TopBar */}
        <TopBar />

        <main className="flex-1 p-6 lg:p-8">
         

          {/* ================= HEADER :Heading and para ================= */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">
              Question Bank
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Browse interview questions by topic. Select a topic to
              view questions and detailed answers.
            </p>
          </div>



          <QuestionBankFilters
            search={search}
            setSearch={setSearch}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />

          <div className="flex items-start gap-5">
            
            <TopicList
              topics={topics}
              selectedTopic={selectedTopic}
              setSelectedTopic={handleTopicChange}
            />

            {selectedTopicData && (
              <QuestionSection
                topic={selectedTopicData}
                questions={filteredQuestions}
                openQuestion={openQuestion}
                setOpenQuestion={setOpenQuestion}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}