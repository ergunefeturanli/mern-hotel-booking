import ListItem from "../ListItem/ListItem";

const ResListItem = (props) => {
  return (
      <>
        {props.list.map((l) => (
          <ListItem key={l._id}  listItem={l} />
        ))}
      </>
  );
};

export default ResListItem;
