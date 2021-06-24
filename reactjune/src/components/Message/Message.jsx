let Message = () => {
  let message = "Good Morning";
  let time = new Date().toLocaleTimeString();
  return (
    <>
      <h1>Hello, :{message} </h1>
      <h2>Current Time: {time}</h2>
      <h3>{10 * 2}</h3>
    </>
  );
};
export default Message;
