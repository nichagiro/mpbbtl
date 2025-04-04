type ListTextProps = {
  iconClass?: string;
  title: string;
  text: string;
};

const ListText: React.FC<ListTextProps> = ({ iconClass = "icon-tick", title, text, }) => {
  return (
    <div className="why-choose__box">
      <div className="why-choose__box__icon">
        <span className={iconClass}></span>
      </div>
      <h3 className="why-choose__box__title">{title}</h3>
      <p className="why-choose__box__text">{text}</p>
    </div>
  );
};

export default ListText;
