export default function DataInput(props) {
  return(
    <p>
      <label htmlFor={props.for}>{props.title}</label>
      <input type="number" id={props.for} onChange={(event) => props.handler(event.target.value, props.for)} value={props.value} />
    </p>
  )
}