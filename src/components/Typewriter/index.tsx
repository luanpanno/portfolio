import ReactTypewriter from 'typewriter-effect';

interface Props {
  text: string;
}

const Typewriter: React.FC<Props> = ({ text }) => {
  return (
    <ReactTypewriter
      onInit={(typewriter) => {
        typewriter.typeString(text).start();
      }}
    />
  );
};

export default Typewriter;
