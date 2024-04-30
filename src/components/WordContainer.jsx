import React, { useEffect, useRef, useState } from "react";

const WordContainer = () => {
  const initialText =
    "Introduced in 2017, electoral bonds allowed individuals and corporate groups to donate unlimited amounts of money to any political party anonymously. Electoral bonds, under the electoral bond scheme, were purchased by donors in fixed denominations from SBI and handed over to any political party that could cash them.";

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

  return (
    <div className="flex justify-center mt-12">
      <div className="w-[55%] h-52 flex-col justify-center items-center text-[24px] tracking-widest leading-relaxed">
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
