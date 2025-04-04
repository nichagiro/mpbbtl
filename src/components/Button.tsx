type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className="ogency-btn">
      {props.children}
    </button>
  );
};

export default Button;
