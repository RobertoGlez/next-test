import React from 'react';

interface TextAreaFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  helperText?: string;
  value: string; // Valor del input
  onChange: (value: string) => void; // Función para manejar cambios
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  label,
  placeholder,
  helperText,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-sm font-medium text-white-700">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        rows={6}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900"
      />
      {helperText && <p className="text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

export default TextAreaField;
