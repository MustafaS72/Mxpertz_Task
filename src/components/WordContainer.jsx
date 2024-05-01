import React, { useEffect, useRef, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import { paragraph } from "txtgen";
import Modal from "./Modal";

const WordContainer = ({ isStart, setIsStart, timer }) => {
  const [initialText] = useState(paragraph());
  const [consecutiveSpacesCount, setConsecutiveSpacesCount] = useState(0);
  const [lastCharacterEntered, setLastCharacterEntered] = useState(null);
  const [startingLine, setStartingLine] = useState(0);
  const words = initialText.split(" ");
  const firstLineInputRef = useRef(null);
  const [correctWords, setCorrectWords] = useState(0);
  const [InCorrectWords, setInCorrectWords] = useState(0);
  const [lastInputValue, setLastInputValue] = useState(null);
  const [lastSecond, setLastSecond] = useState(false);
  const [lastCorrectWordIndex, setLastCorrectWordIndex] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const wordGroups = [];
  for (let i = 0; i < words.length; i += 8) {
    wordGroups.push(words.slice(i, i + 8));
  }

  const [displayedWordGroups, setDisplayedWordGroups] = useState(
    wordGroups.slice(startingLine, startingLine + 3)
  );

  const calculateWPMAndAccuracy = (correctWords, incorrectWords, timer) => {
    const totalWordsTyped = correctWords + incorrectWords;
    const totalMinutes = timer / 60;
    const wordsPerMinute = Math.round(totalWordsTyped / totalMinutes);
    const accuracy = Math.round((correctWords / totalWordsTyped) * 100);
    return { wordsPerMinute, accuracy };
  };

  const handleInputChange = (index, value) => {
    setLastInputValue(value[value.length - 1]);
    if (value[value.length - 2] === " " && lastInputValue) {
      console.log("in first ");
      setLastSecond(true);
    } else if (value[value.length - 2] !== " " && lastInputValue) {
      console.log("in second");
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
          console.log(index + consecutiveSpacesCount);
        } else if (
          lastTypedWord !== storedWord &&
          index + consecutiveSpacesCount !== lastCorrectWordIndex
        ) {
          setInCorrectWords((prev) => prev + 1);
        }
        setConsecutiveSpacesCount((prevCount) => prevCount + 1);
      }
    } else if (e.code === "Backspace") {
      if (lastInputValue === " " && !lastSecond) {
        console.log("mohammed");
        setConsecutiveSpacesCount((prevCount) => prevCount - 1);
      }
    }
  };

  useEffect(() => {
    console.log(
      "correct words",
      correctWords,
      "consecutiveSpacesCount",
      consecutiveSpacesCount
    );
    if (consecutiveSpacesCount === 8) {
      setStartingLine((prev) => prev + 1);
      setConsecutiveSpacesCount(0);
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

  const { wordsPerMinute, accuracy } = calculateWPMAndAccuracy(
    correctWords,
    InCorrectWords,
    timer
  );
  return (
    <div className="flex justify-center mt-12">
      <div className="w-[55%] h-52 flex-col justify-center items-center text-[24px] tracking-widest leading-relaxed">
        {showUserModal && (
          <Modal
            showUserModal={showUserModal}
            setShowUserModal={setShowUserModal}
            correctWords={correctWords}
            InCorrectWords={InCorrectWords}
            timer={timer}
            wordsPerMinute={wordsPerMinute}
            accuracy={accuracy}
          />
        )}
        {isStart && (
          <CountdownTimer seconds={timer} setShowUserModal={setShowUserModal} />
        )}
        {displayedWordGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mt-2">
            {group.map((word, wordIndex) => (
              <span key={wordIndex} className="mt-2">
                {word}{" "}
              </span>
            ))}
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
