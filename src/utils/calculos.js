
// Función 1: Calcula si hay stock suficiente para una venta
function validarStockDisponible(stockActual, cantidadSolicitada) {
    if (cantidadSolicitada <= 0) throw new Error("La cantidad debe ser mayor a cero");
    return stockActual >= cantidadSolicitada;
}

// Función 2: Calcula el total a pagar de una lista de productos
function calcularTotalCompra(detalles) {
    if (!Array.isArray(detalles) || detalles.length === 0) return 0;
    return detalles.reduce((total, item) => total + (item.cantidad * item.precio_unitario), 0);
}

module.exports = { validarStockDisponible, calcularTotalCompra };