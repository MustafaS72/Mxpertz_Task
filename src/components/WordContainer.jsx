import React, { useEffect, useRef, useState } from "react";
import { paragraph } from "txtgen";
import Modal from "./Modal";

const WordContainer = ({
  isStart,
  setIsStart,
  timer,
  setShowUserModal,
  showUserModal,
  setIsRefresh,
  isRefresh,
  setTypingData,
  typingData,
  correctWords,
  setCorrectWords,
  inCorrectWords,
  setInCorrectWords,
  setRaw,
  setWpm,
  setAccuracy,
}) => {
  const [initialText, setInitialText] = useState(paragraph());
  const [consecutiveSpacesCount, setConsecutiveSpacesCount] = useState(0);
  const [lastCharacterEntered, setLastCharacterEntered] = useState(null);
  const [startingLine, setStartingLine] = useState(0);
  const words = initialText.split(" ");
  const firstLineInputRef = useRef(null);
  const [lastInputValue, setLastInputValue] = useState(null);
  const [lastSecond, setLastSecond] = useState(false);
  const [lastCorrectWordIndex, setLastCorrectWordIndex] = useState(null);
  const [inCorrectWordsIndex, setInCorrectWordsIndex] = useState([]);
  const wordGroups = [];
  for (let i = 0; i < words.length; i += 8) {
    wordGroups.push(words.slice(i, i + 8));
  }

  const [displayedWordGroups, setDisplayedWordGroups] = useState(
    wordGroups.slice(startingLine, startingLine + 3)
  );

  const calculateWPMAndAccuracy = (correctWords, incorrectWords, timer) => {
    const actualwords = correctWords;
    const totalMinutes = timer / 60;
    const totalWordsTyped = correctWords + incorrectWords;
    const wordsPerMinute = Math.round(actualwords / totalMinutes);
    const raw = Math.round((correctWords + incorrectWords) / totalMinutes);
    const accuracy = Math.round((correctWords / totalWordsTyped) * 100);
    return { wordsPerMinute, accuracy, raw };
  };

  const handleInputChange = (index, value) => {
    setLastInputValue(value[value.length - 1]);
    if (value[value.length - 2] === " " && lastInputValue) {
      setLastSecond(true);
    } else if (value[value.length - 2] !== " " && lastInputValue) {
      setLastSecond(false);
    }
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
      setLastCharacterEntered(" ");
    } else {
      setLastCharacterEntered(trimmedValue[trimmedValue.length - 1]);
    }
  };
  const handleKeyDown = (e, index) => {
    if (isStart === false) {
      setIsStart(true);
    }
    if (e.key === " ") {
      if (lastCharacterEntered && lastInputValue !== " ") {
        const typedWord = e.target.value.trim();
        const words = typedWord.split(" ");
        const lastTypedWord = words[words.length - 1];
        const storedWord = displayedWordGroups[index][consecutiveSpacesCount];
        if (
          lastTypedWord === storedWord &&
          index + consecutiveSpacesCount !== lastCorrectWordIndex
        ) {
          setCorrectWords((prev) => prev + 1);
          setLastCorrectWordIndex(index + consecutiveSpacesCount);
        } else if (
          lastTypedWord !== storedWord &&
          index + consecutiveSpacesCount !== lastCorrectWordIndex
        ) {
          setInCorrectWordsIndex((prev) => [
            ...prev,
            index * 8 + consecutiveSpacesCount,
          ]);
          setInCorrectWords((prev) => prev + 1);
        }
        setConsecutiveSpacesCount((prevCount) => prevCount + 1);
      }
    } else if (e.code === "Backspace") {
      if (lastInputValue === " " && !lastSecond) {
        setConsecutiveSpacesCount((prevCount) => prevCount - 1);
      }
    }
  };

  useEffect(() => {
    if (consecutiveSpacesCount === 8) {
      setStartingLine((prev) => prev + 1);
      setConsecutiveSpacesCount(0);
      setInCorrectWordsIndex([]);
      if (firstLineInputRef.current) {
        firstLineInputRef.current.value = "";
      }
    }
    setDisplayedWordGroups(wordGroups.slice(startingLine, startingLine + 3));
  }, [startingLine, consecutiveSpacesCount]);

  useEffect(() => {
    if (firstLineInputRef.current) {
      firstLineInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isRefresh) {
      setInitialText(paragraph());
      setIsRefresh(false);
    }
  }, [isRefresh, initialText]);

  useEffect(() => {
    console.log(isStart, showUserModal);
    if (isStart && !showUserModal) {
      const trackTypingPerformance = () => {
        const { wordsPerMinute, accuracy, raw } = calculateWPMAndAccuracy(
          correctWords,
          inCorrectWords,
          timer
        );

        console.log("typingdata", typingData, "WPM", wordsPerMinute);
        setTypingData((prevData) => [
          ...prevData,
          { time: prevData.length + 1, wpm: wordsPerMinute },
        ]);
      };
      const intervalId = setInterval(trackTypingPerformance, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isStart, showUserModal, correctWords, inCorrectWords, timer, typingData]);

  useEffect(() => {
    const { wordsPerMinute, accuracy, raw } = calculateWPMAndAccuracy(
      correctWords,
      inCorrectWords,
      timer
    );
    setAccuracy(accuracy);
    setRaw(raw);
    setWpm(wordsPerMinute);
  }, [consecutiveSpacesCount]);
  return (
    <div className="flex justify-center mt-12">
      <div className="w-[55%] h-52 flex-col justify-center items-center text-[24px] tracking-widest leading-relaxed">
        {showUserModal && (
          <Modal
            showUserModal={showUserModal}
            setShowUserModal={setShowUserModal}
            correctWords={correctWords}
            InCorrectWords={inCorrectWords}
            timer={timer}
            wordsPerMinute={wordsPerMinute}
            accuracy={accuracy}
            raw={raw}
          />
        )}

        {displayedWordGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mt-2">
            {group.map((word, wordIndex) => {
              const wordPosition = groupIndex * 8 + wordIndex;
              return (
                <span
                  key={`${groupIndex}-${wordIndex}`}
                  className={`mt-2 ${
                    groupIndex === 0 && wordIndex === consecutiveSpacesCount
                      ? "text-yellow-300"
                      : ""
                  } ${
                    inCorrectWordsIndex.includes(wordPosition)
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  {word}{" "}
                </span>
              );
            })}
            <input
              ref={groupIndex === 0 ? firstLineInputRef : null}
              type="text"
              className="w-full bg-transparent outline-none border-b mt-2"
              onChange={(e) => handleInputChange(groupIndex, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, groupIndex)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordContainer;
