const Block = (props) => {
    return (
      <div style={{
        border: "1px solid gray",
        padding: "10px 10px",
        marginBottom: "10px",
      }}>
        <h4 style={{color : "gray"}}>2023U00020012023{props.code}</h4>
        <h1>
          {props.classcode}_{props.title}({props.code2})
        </h1>
        <span>.{props.prof}</span>

      </div>
    );
  };

  export default Block;