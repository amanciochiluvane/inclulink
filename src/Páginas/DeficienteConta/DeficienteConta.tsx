import React from 'react'
import './DeficienteConta.css'
import { Link } from 'react-router-dom'

export default function DeficienteConta(){
    console.log(React);
    return(
        <div className='VisitanteConta'>
            <div className='LoginV'>
            
            <div className='Logo'>

            </div>
           <form action="post">
            <h1 className='TituloForm' >Cadastre-se!</h1>
            <div>
                
                <input type="text" id='Name' placeholder='Nome'/>
            </div>
            <div>
                
                <input type="text" id='Lname' placeholder='Apelido'/>
            </div>
            <div>
                
                <input type="text" id='Deficiencia' placeholder='Deficiência'/>
            </div>
            <div>
                
                <input type="email" id='email' placeholder='Email'/>
            </div>
            
            <div>
                
                <input type="password" id='password' placeholder='Password'/>
            </div>
            
            
            
            <div>
                <Link to="/Home"><input type="submit" value='Próximo' className='ProximoC'/></Link>
                
            </div>
            
           </form>
          
            </div>
              

          
        </div>

    )
    
    
}