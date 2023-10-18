import React, {useState} from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import burguer from '../../assets/burguer.png'
import logo from '../../assets/logo.png'
import qr from '../../assets/qrcode.png'
import textimg from '../../assets/text.png'
import Navbar from '../../Componentes/navbar/Navbar';
import excluir from '../../assets/icons8-excluir-30.png'




export default function Home(){
    console.log(React);
    const [menu,setMenu]=useState(true);
    const visivel="visivel";
    const invisivel="invisivel";

    const visive="visive";
    const invisive="invisive";

    const burguerf="burguer";
    const burguerinv="burguerinv";
    const zoom="desfoque";
    const nonzoom="foque";

    function exibirbarra(){
        
        if(menu == true){
            setMenu(false);
        }
        else{
            setMenu(true);
        }
    }
    return(
        
        <div className='Home'>
            
            <header id={menu?nonzoom:zoom}>
                <img className={menu?burguerf:burguerinv}  onClick={exibirbarra} src={burguer} alt="Burguer-menu" />
                <img className="logoe" src={logo} alt="Logotipo" />

                
            </header>
            
            
            <main id={menu?nonzoom:zoom}>
            

                <div className='cont'>
                    <p>Pesquisar de conteúdo</p>
                </div>
                <section className='pesquisa' >
                    <Link to="/Qrcode"><div className='Qr'>
                        <img className='qrimg' src={qr} alt="Icone do qrcode"  />
                        <p className='valpesquisa'>Código QR</p>
                    </div></Link>
                    
                    <Link to="/texto"><div className='txt'>
                        <img className='textimg' src={textimg} alt="Icone de texto"  />
                        <p className='valpesquisa'>Pesquisar por texto</p>
                    </div></Link>
                    
                </section>
            </main>
            <div className={menu?invisivel:visivel}>
                <img src={excluir} className={menu?invisive:visive}  onClick={exibirbarra}/>
                <Navbar/>
            </div>
            
        </div>
    )
}