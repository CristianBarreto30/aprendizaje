const Mensaje= (props) =>{
  console.log(props);

  return <h1 style={{color: props.color}}>{props.message}</h1>
}

const Descrip = (props) => {
  console.log(props);
  return <p>{props.descripcion}</p>
}

export default Mensaje;
export {Descrip};