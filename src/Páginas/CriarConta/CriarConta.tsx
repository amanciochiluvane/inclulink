import React from 'react'
import defimg from '../../assets/deficiente.png'
import intimg from '../../assets/interpetre.png'
import './CriarConta.css' 
import { Link } from 'react-router-dom'

export default function CriarConta(){
    return(
        <div className='CriarConta'>
            <div className='LoginC'>
            
            <div className='Logo'>

            </div>
           <form action="post">
            <h1 className='TituloForm' >Selecione uma categoria para criar uma conta</h1>
            
                <Link  to="/DeficienteConta"> 
                <div className='Deficiente'>  
                
                    <img src={defimg} alt="Deficiente" />
                    <p className='.tipconta'>Pessoa com deficiência</p>
                </div>
                </Link>
           
                <Link to="/InterpetreConta">
                <div className='Interprete'>  
                
                    <img src={intimg} alt="Deficiente" />
                    <p className='.tipconta'>Interpetre</p>  
                    
                </div>
                </Link> 
            

            
           </form>
           <p className='Conta'>Entar como um <Link  className="Visitante" to="/VisitanteConta"><strong>Visitante</strong></Link></p>
            </div>
              
        </div>
    )
}