import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100" style={{
        background:'black'
    }}>
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <span className="text-xl font-semibold text-gray-700">Cargando...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
