const ParentEvent = ({ clickedHandle, counter, onInputChange }: any) => {
  const onCounterChange = (event: any) => {
    onInputChange(event.target.value);
  };
  return (
    <div>
      <input type="number" value={counter} onChange={onCounterChange} />
      <button onClick={clickedHandle}></button>
    </div>
  );
};

export default ParentEvent;
