import { useMemo } from "react";

type TypewriterProps = {
  staticText?: string;
  words: string[];
  period?: number;
};

const WriterText: React.FC<TypewriterProps> = ({ staticText = "", words = [], period = 3000 }) => {

  const data = useMemo(() => JSON.stringify(words), [words]);

  return (
    <>
      {staticText}
      <span className="typewrite" data-period={period} data-type={data} />
    </>
  );
};

export default WriterText;



