import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './Qrcode.css';
import logo from '../../assets/logo.png';

function Qrcode() {
  const [ScanResult, SetScanResult] = useState(null);
  let scanner;

  useEffect(() => {
    scanner = new Html5QrcodeScanner('reader', {
      
      fps: 5,
    });
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      SetScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    // Redirecione a página após o processamento bem-sucedido do QR Code
    if (ScanResult) {
      setTimeout(() => {
        window.location.href = ScanResult;
      }, 3000); // Redirecione após 3 segundos (ajuste conforme necessário)
    }
  }, [ScanResult]);

  return (
    <div className='Qrcode'>
      <img className="Logoq" src={logo} alt="Logo escutala" />
      <h1>Scan Qrcode</h1>
      {ScanResult ? (
        <div>Processado com sucesso. Redirecionando em breve...</div>
      ) : (
        <div id='reader'></div>
      )}
    </div>
  );
}

export default Qrcode;
