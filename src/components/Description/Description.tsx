import Button from "../Button/Button";

interface DescriptionProps {
  length: number;
  isFullText: boolean;
  setIsFullText(value: boolean): void;
}

function Description({
  length = 17,
  isFullText,
  setIsFullText,
}: DescriptionProps) {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper congue ipsum, vitae mollis enim. Cras non lorem sagittis,eleifend magna at, luctus eros. Duis eu felis ultricies neque tristiqu evestibulum nec sed urna. In nec sollicitudin ipsum, in eleifend magna. Duis sapien lorem, mollis in fermentum et, pellentesque et magna. Nulla faucibus eget mi id viverra. Fusce cursus lectus massa, sit amet tincidunt";
  return (
    <>
      <div>
        {loremIpsum.substring(0, isFullText ? loremIpsum.length : length) +
          "..."}
        {isFullText ? (
          <button onClick={() => setIsFullText(false)}> Less </button>
        ) : (
          <button onClick={() => setIsFullText(true)}> More </button>
        )}
      </div>
    </>
  );
}

export default Description;
