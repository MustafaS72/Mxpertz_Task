import React, { useEffect, useRef, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import { paragraph } from "txtgen";

const WordContainer = ({ isStart, setIsStart, timer }) => {

  const [initialText, setInitialText] = useState(paragraph());

  const [consecutiveSpacesCount, setConsecutiveSpacesCount] = useState(0);
  const [lastCharacterEntered, setLastCharacterEntered] = useState(null);
  const [startingLine, setStartingLine] = useState(0);
  const words = initialText.split(" ");
  const firstLineInputRef = useRef(null);

  const wordGroups = [];
  for (let i = 0; i < words.length; i += 8) {
    wordGroups.push(words.slice(i, i + 8));
  }

  const [displayedWordGroups, setDisplayedWordGroups] = useState(
    wordGroups.slice(startingLine, startingLine + 3)
  );

  const handleInputChange = (index, value) => {
    console.log(index, value, consecutiveSpacesCount);
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
      console.log("yes");
      if (lastCharacterEntered && lastCharacterEntered !== " ") {
        setConsecutiveSpacesCount((prevCount) => prevCount + 1);
      }
    }
  };

  useEffect(() => {
    if (consecutiveSpacesCount === 8) {
      console.log("ha hogya");
      setStartingLine((prev) => prev + 1);
      setConsecutiveSpacesCount(0);
      if (firstLineInputRef.current) {
        firstLineInputRef.current.value = "";
      }
    }
    console.log("startingline", startingLine);
    setDisplayedWordGroups(wordGroups.slice(startingLine, startingLine + 3));
  }, [startingLine, consecutiveSpacesCount]);

  useEffect(() => {
    if (firstLineInputRef.current) {
      firstLineInputRef.current.focus();
    }
  }, []);
  return (
    <div className="flex justify-center mt-12">
      <div className="w-[55%] h-52 flex-col justify-center items-center text-[24px] tracking-widest leading-relaxed">
        {isStart && <CountdownTimer seconds={timer} />}
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
