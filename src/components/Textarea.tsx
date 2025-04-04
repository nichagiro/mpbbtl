type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <div className="contact-one__input-box text-message-box">
      <textarea {...props}></textarea>
    </div>
  );
};

export default Textarea;
