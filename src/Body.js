import { TableRow, TableCell } from '@mui/material';

function Body(props) {
    console.log(props.user)
  const rowClicked = () => {
    props.handleRowClick(props.user, props.index);
  };

  return (
    <TableRow onClick={rowClicked}>
      <TableCell style={{ width: 150, background: "white" }}>
        {props.user.name}
      </TableCell>
      <TableCell style={{ background: "white" }}>
        {props.user.description}
      </TableCell>
    </TableRow>
  );
}

export default Body;
