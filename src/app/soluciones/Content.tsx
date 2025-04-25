interface ContentProps {
  title: string
  body: string
  list: string[]
}

const Content = ({ title, body, list = [] }: ContentProps) => {
  return (
    <>
      <h3 className="services-details__content__title">
        {title}
      </h3>

      <div className="services-details__content__text">
        <div className="services-details__content__text">
          {body}

          <br /><br />

          {
            <ul className="services-details__benefit__lists list-unstyled">
              {list.map((item, index) => (
                <li key={index}>
                  <span className="fa fa-check-circle" />
                  {item}
                </li>
              ))}
            </ul>
          }

        </div>
      </div>
    </>
  )
}

export default Content