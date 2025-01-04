import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  value: string; // Valor del input
  onChange: (value: string) => void; // Función para manejar cambios
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
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
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900"
      />
      {helperText && <p className="text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

export default InputField;
