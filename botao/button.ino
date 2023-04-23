#include <Arduino.h>
#include "BluetoothSerial.h"

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;

// --- Constantes Auxiliares ---
const int FSR_PIN = 12; // Pin connected to FSR/resistor divider

char valorRecebido;


void setup() {
  Serial.begin(115200);
  SerialBT.begin("Botão"); 
  pinMode(12, INPUT_PULLDOWN);
 
}


void loop() {
  // Lê o valor do sensor de força
  int forceValue = analogRead(FSR_PIN);

  // Converte o valor lido em unidades de medida
  float force = (forceValue * 25.0) / 1024.0; // Supondo que o sensor tenha uma faixa de 0-5V e resolução de 10 bits


    // if (force > 10.0) {
    SerialBT.println(round(force));
  // }
  
  delay(1000); // Aguarda 1 segundo antes de ler o sensor novamente
}

