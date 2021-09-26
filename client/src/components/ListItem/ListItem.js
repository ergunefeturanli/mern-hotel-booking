const ListItem = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>HOTEL</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Guess Count</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.listItem.hotel}</td>
            <td>{props.listItem.name}</td>
            <td>{props.listItem.surname}</td>
            <td>{props.listItem.phone}</td>
            <td>{props.listItem.email}</td>
            <td>{props.listItem.guessCount}</td>
            <td>{props.listItem.checkInDate}</td>
            <td>{props.listItem.checkOutDate}</td>
            <td><button onClick={(e)=>{console.log(e.target.parentElement.parentElement.children[1].outerText)}} >Approve</button></td>
            <td><button onClick={(e)=>{console.log(e)}}>Reject</button></td>
          </tr>
        </tbody>
      </table>     
    </div>
  );
};

export default ListItem;
