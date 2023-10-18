import React from 'react'
import './TelaPrincipal.css'
import { Link } from 'react-router-dom'
import defimg from '../../assets/def.png'

export default function TelaPrincipal(){
    console.log(React);
    return(
        <div className='TelaPrincipal'>
            <div className='def'>
                <img src={defimg} className='defimg' alt="Imagem Deficiente" />
            </div>
            <div className='Login'>
            
            <div className='Logo'>

            </div>
           <form action="post">
            <h1 className='TituloForm' >Seja Bem-Vindo ao Escuta-lá</h1>
            
            <div>
                
                <input type="email" id='email' placeholder='Email'/>
            </div>
            
            <div>
                
                <input type="password" id='password' placeholder='Password'/>
            </div>
            
            <section>
                <div className='Acesso'>
                    <input type="checkbox" id='paragrafo' />
                    <p>Manter o acesso neste dispositivo</p>
                </div>
                <p>Esqueceu-se da senha?</p>
            </section>
            

            <input type="submit" value='Entrar' className='Entrar'/>
           </form>
           <p className='Conta'>Ainda não tem uma conta? <strong><Link className='Link' to="/CriarConta">Criar agora</Link></strong></p>
            </div>
              

          
        </div>

    )
    
    
} 
