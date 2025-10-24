import './App.css';
import Mensaje, {Descrip}from './Mensaje.jsx';



const App =() => {
  //  con esto hace que no funcione si nio ponemos este 
  // parametro <> </> que sirve para agrupar sin necesidad de un div  
  
    
  return (
    <div className="App">
        <Mensaje color= 'red' message = 'Estamos trabajando '/>
        <Mensaje  color='blue' message= 'en un ' />
        <Mensaje color = 'blackgray'message ='curso de react'/>
        <Descrip descripcion='nooo sacaron a los brodels'/>

        
        
       
    </div>
  )
}

export default App;
