interface CounterProps {
  count: number;
  data: string
  title: string;
}

const Counter = ({ count, data, title }: CounterProps) => {
  return (
    <div className="fact-two__item">
      <div className="fact-one__item__count">
        <span className="count-box">
          <span className="count-text" data-stop={count} data-speed="1500"></span>
        </span>
        {data}
      </div>
      <h3 className="fact-one__item__title">{title}</h3>
    </div>
  )
}

export default Counter