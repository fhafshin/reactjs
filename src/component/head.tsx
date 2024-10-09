const Head = (props: any) => {
  const { productId, productName, children } = props;
  return (
    <>
      <h1>this a simple component</h1>
      <div>this is product id {productId}</div>
      <div>{productName}</div>
      <div>{children}</div>
    </>
  );
};

export default Head;
