const SliderText = ({ data }: { data: string[] }) => {
  return (
    <section className="slider-text-one">
      <div className="slider-text-one__animate-text">
        {data.map((text, index) => (
          <span key={index}>
            {text} <span> & </span> &nbsp;
          </span>
        ))}
      </div>
    </section>
  );
};

export default SliderText
