const Btn = (props) => {
  return (
    <div className="btn" onClick={props.clickHandle}>
      {props.text}
    </div>
  );
};

export default Btn;
