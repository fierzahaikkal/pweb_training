const Card = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`${className} bg-white rounded grid px-4`}>
      {children}
    </div>
  );
};

const Title = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`${className} text-3xl text-black grid border-b border-slate-300 mb-4`}
    >
      {children}
    </div>
  );
};
const Body = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`${className} text-xl text-black`}>
      {children}
    </div>
  );
};
const Footer = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`${className}`}>
      {children}
    </div>
  );
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
