export default function Animal(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.trait}</td>
      <td>{props.species}</td>
      <td>{props.age}</td>
    </tr>
  );
}
