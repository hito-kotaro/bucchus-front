const useTimestamp = () => {
  const genTimestamp = () => {
    const datetime = new Date();
    const year = datetime.getFullYear();
    const month = `00${datetime.getMonth() + 1}`.slice(-2);
    const day = `00${datetime.getDate()}`.slice(-2);
    const hour = `00${datetime.getHours()}`.slice(-2);
    const minutes = `00${datetime.getMinutes()}`.slice(-2);

    const timestamp = `${year}/${month}/${day} ${hour}:${minutes}`;

    return timestamp;
  };
  return { genTimestamp };
};

export default useTimestamp;
