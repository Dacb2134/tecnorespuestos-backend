
const { validarStockDisponible, calcularTotalCompra } = require('../src/utils/calculos');

describe('Pruebas Unitarias - Lógica de Negocio', () => {
    
    test('validarStockDisponible: retorna true si hay stock (10 actual, pide 5)', () => {
        expect(validarStockDisponible(10, 5)).toBe(true);
    });

    test('validarStockDisponible: retorna false si falta stock (3 actual, pide 5)', () => {
        expect(validarStockDisponible(3, 5)).toBe(false);
    });

    test('calcularTotalCompra: suma correctamente el total de los items', () => {
        const carrito = [
            { cantidad: 2, precio_unitario: 15.50 }, 
            { cantidad: 1, precio_unitario: 10.00 }  
        ];
      
        expect(calcularTotalCompra(carrito)).toBe(41.00); 
    });
});