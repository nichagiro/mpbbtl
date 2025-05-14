interface CounterProps {
  count: number
  data?: string
  title: string
  reverse?: boolean
}

const Counter = ({ count, data = "", title, reverse = false }: CounterProps) => {
  return (
    <div className="fact-two__item">
      <div className="fact-one__item__count">
        {reverse && data}
        <span className="count-box">
          <span className="count-text" data-stop={count} data-speed="1500"></span>
        </span>
        {!reverse && data}
      </div>
      <h3 className="fact-one__item__title">{title}</h3>
    </div>
  )
}

export default Counter