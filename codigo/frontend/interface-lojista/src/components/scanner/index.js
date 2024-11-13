import Quagga from "@ericblade/quagga2";
import React, { useEffect, useRef } from "react";
import { ScannerContainer, ScannerWrapper } from "./style";

function Scanner({ onDetected }) {
  const scannerRef = useRef(null);

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          target: scannerRef.current, // O elemento DOM onde a câmera será renderizada
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment", // Usar a câmera traseira em dispositivos móveis
          },
        },
        decoder: {
          readers: ["ean_reader"], // Tipos de códigos de barras a serem lidos
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((result) => {
      onDetected(result.codeResult.code);
      Quagga.stop();
    });

    return () => {
      Quagga.stop(); // Para a câmera e a leitura quando o componente é desmontado
    };
  }, [onDetected]);

  return (
    <ScannerContainer>
      <ScannerWrapper ref={scannerRef} />
    </ScannerContainer>
  );
}

export default Scanner;
