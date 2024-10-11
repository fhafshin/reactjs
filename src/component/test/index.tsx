const Test = () => {
  const array = [...Array(10).keys()];
  console.log(array);
  return (
    <>
      <div>
        {array.map((element) => {
          return <div key={element}>this is a component {element}</div>;
        })}
      </div>
      <div></div>
    </>
  );
};
export default Test;
