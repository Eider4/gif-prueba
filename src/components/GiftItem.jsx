export const GiftItem = ({ id, title, url }) => {
  return (
    <div className="card-categories">
      <img src={url} alt="title" />
      <h4 key={id}>{title}</h4>
    </div>
  );
};
