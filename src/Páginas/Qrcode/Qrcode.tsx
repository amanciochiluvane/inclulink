import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode'; // Importe Html5QrcodeScannerConfig
import './Qrcode.css';
import logo from '../../assets/logo.png';

function Qrcode() {
  const [ScanResult, SetScanResult] = useState<string | null>(null); // Adicione tipagem para ScanResult
  let scanner: Html5QrcodeScanner; // Adicione tipagem para scanner
  console.log(React);

  useEffect(() => {
    scanner = new Html5QrcodeScanner('reader', {fps:5}, false);
    scanner.render(success, error);
  
    function success(result: string) {
      scanner.clear();
      SetScanResult(result);
    }
  
    function error(err: string) {
      console.warn(err);
    }
  }, []);
  
  

  useEffect(() => {
    if (ScanResult) {
      setTimeout(() => {
        window.location.href = ScanResult;
      }, 3000);
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
