# 🏦 IBAN Validator & Bank Extractor

Este pequeño proyecto en TypeScript valida un número IBAN español y, si es correcto, extrae el nombre del banco correspondiente a partir del código de entidad.

## ✨ Funcionalidades

- ✔️ Valida que un IBAN tenga el formato correcto (2 letras + 22 dígitos)
- 🏛️ Extrae el código de entidad y lo transforma en el nombre del banco
- 🧼 Normaliza el IBAN (mayúsculas, sin espacios)
- 🧪 Diseñado para ser modular y testeable

## 🧠 ¿Cómo funciona?

Dado un IBAN como este:

ES91 2100 0418 4502 0005 1332


1. Se limpia y transforma en `ES9121000418450200051332`
2. Se valida que el formato sea correcto
3. Se toma el código de entidad (`2100`)
4. Se devuelve el nombre del banco: `CaixaBank` (según tabla de entidades)

Si el código no existe, devuelve `"Banco no encontrado"`.

## 🚀 Ejemplo de uso

```ts
import { obtenerNombreBanco } from './bancos';
import { esIBANValido, normalizarIBAN } from './ibanUtils';

const iban = "ES91 2100 0418 4502 0005 1332";
const ibanLimpio = normalizarIBAN(iban);

if (esIBANValido(ibanLimpio)) {
  const banco = obtenerNombreBanco(ibanLimpio);
  console.log(`IBAN válido. Banco: ${banco}`);
} else {
  console.log("IBAN no válido.");
}

📁 Estructura del proyecto

├── src/
│   ├── modelo.ts         # Mapeo de códigos de banco → nombres
│   ├── ibanValidator.ts      # Funciones para validar y limpiar el IBAN
│   └── main.ts           # Ejemplo de uso / punto de entrada
├── README.md
├── tsconfig.json
└── package.json

🛠️ Cómo ejecutar
Clona el repo:
git clone https://github.com/tuusuario/iban-validador.git
cd iban-validador
Instala dependencias:
npm install

Ejecuta el proyecto:

npx ts-node src/main.ts
Requiere tener instalado ts-node o puedes compilar con tsc y ejecutar con Node.

🧪 Pruebas (opcional)
Si decides añadir pruebas en el futuro, puedes usar Jest o Vitest:

npm install --save-dev jest ts-jest @types/jest
npx jest

💡 Aprendizajes
Práctica con expresiones regulares en TypeScript

Limpieza y normalización de strings

Separación de responsabilidades: lógica + datos

Preparación para proyectos reales en GitHub

📚 Créditos
Proyecto realizado por Marcos Jabalquinto como parte del Laboratorio del Módulo 11 del bootcamp de Lemoncode.

📄 Licencia
MIT

