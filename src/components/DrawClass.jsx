import React from 'react';

const DrawClass = ({ data }) => {
  const { name, attributes, methods, borderColor, headColor, textColor } = data;

  // Calcular la altura del rectángulo de atributos y métodos
  const rectHeight = 60 + (attributes.length + methods.length) * 20;
  const rectAtt = 65 + ((attributes.length - 1)* 20)
  // Función para generar los elementos de atributos
  const renderAttributes = () => {
    return attributes.map((attribute, index) => (
      
      <text key={index} x="10" y={60 + index * 20} fill={textColor} fontSize="12">
        {attribute}
      </text>
    ));
  };
  
  // Función para generar los elementos de métodos
  const renderMethods = () => {
    return methods.map((method, index) => (
      <text key={index} x="10" y={60 + (attributes.length + index) * 20} fill={textColor} fontSize="12">
        {method}
      </text>
    ));
  };

  return (
    <svg width="200" height={rectHeight*2}>
      {/* Rectángulo del cuerpo de la clase */}
      <rect x="0" y="0" width="200" height={rectHeight} fill="white" stroke={borderColor} strokeWidth="2" />

      {/* Rectángulo del encabezado de la clase */}
      <rect x="0" y="0" width="200" height="40" stroke={borderColor} strokeWidth="2"fill={headColor} />
      
      {/* Texto del nombre de la clase */}
      <text x="100" y="25" fill={textColor} fontSize="16" fontWeight="bold" textAnchor="middle">
        {name}
      </text>
      <line x1="1" y1={rectAtt} x2="199" y2={rectAtt} stroke="black" strokeWidth="1" />
      {renderAttributes()}
      {renderMethods()}
    </svg>
  );
};

export default DrawClass;