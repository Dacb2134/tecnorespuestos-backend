
const request = require('supertest');
const express = require('express');


const app = express();
app.use(express.json()); 


app.post('/api/productos', (req, res) => {
    const { nombre, precio_venta } = req.body;
    
    
    if (!nombre || !precio_venta) {
        return res.status(400).json({ error: 'Faltan datos requeridos' });
    }
    
    res.status(201).json({ mensaje: 'Producto creado exitosamente', id: 101 });
});


describe('Pruebas de Integración - Rutas API', () => {
    
    test('POST /api/productos - Debe crear un producto y retornar status 201', async () => {
        // Datos que le enviaremos a la API
        const nuevoProducto = {
            sku: 'CBL-HDMI',
            nombre: 'Cable HDMI 2M',
            precio_venta: 12.50
        };

        
        const response = await request(app)
            .post('/api/productos')
            .send(nuevoProducto);

        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('mensaje', 'Producto creado exitosamente');
    });
});