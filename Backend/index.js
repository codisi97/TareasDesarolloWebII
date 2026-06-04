const express = require('express');
const cors = require('cors');
const sequelize = require('./conexion/db');
const ProductoModel = require('./modelo/Producto');


const app = express();
app.use(cors());
app.use(express.json());

//Consulta numero 11 / contar productos disponibles en base al estado
app.get('/status', async (req, res) => {

    try {

        const result = await ProductoModel.findAll({
            attributes: ['status',
                [sequelize.fn('COUNT', sequelize.col('status')), 'Cantidad']],
            group: ['status'],
        });


        if (result.length > 0) {
            res.status(200).json({
                message: 'Estado de productos',
                data: result
            });
        } else {
            res.status(400).json({
                message: 'No se encontraron datos',
                data: []
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener productos por status',
            error: error.message
        });
    }

});

/* 9.Encontrar el valor máximo y mínimo por productType 
     	SELECT 	
		productType,
        MAX(value) AS "Valor Maximo",
        MIN(value) AS "Valor Minimo"
	FROM product_v6 
    GROUP BY productType;
  */

app.get('/productomax', async (req, res) => {
  try {
    const result = await ProductoModel.findAll({
      attributes: [
        'productType',
        [sequelize.fn('MAX', sequelize.col('value')), 'Valor Maximo'],
        [sequelize.fn('MIN', sequelize.col('value')), 'Valor Minimo']
      ],
      group: ['productType']
    });

    if (result.length > 0) {
      res.status(200).json({
        message: 'Valor maximo y minimo',
        data: result
      });
    } else {
      res.status(404).json({
        message: 'No se encontraron datos',
        data: []
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener valor maximo y minimo',
      error: error.message
    });
  }
});

/*15.Encontrar el producto con el valor más alto por cada plannerCode*/
app.get('/productocostoso', async (req, res) => {
  try {

    const result = await ProductoModel.findAll({
      attributes: [
        'plannerCode',
        [sequelize.fn('MAX', sequelize.col('value')), 'ProductoMasCostoso']],
      group: ['plannerCode']
    });

    if (result.length > 0) {
      res.status(200).json({
        message: 'Producto más costoso por plannerCode',
        data: result
      });
    } else {
      res.status(404).json({
        message: 'No se encontraron datos',
        data: []
      });
    }

  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener el producto más costoso por plannerCode',
      error: error.message
    });
  }
});

/* 8.Obtener el valor total de los productos por productType */
app.get('/costototaltipoproducto', async (req, res) => {
  try {

    const result = await ProductoModel.findAll({
      attributes: [
        'productType',
        [sequelize.fn('SUM', sequelize.col('value')), 'Valor Total']],
      group: ['productType']
    });

    if (result.length > 0) {
      res.status(200).json({
        message: 'Valor total de producto por tipo',
        data: result
      });
    } else {
      res.status(404).json({
        message: 'No se encontraron datos',
        data: []
      });
    }

  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener el producto más costoso por productType',
      error: error.message
    });
  }
});

app.listen(5000, () => {
  console.log('Servidor iniciado en el puerto 5000');
});

