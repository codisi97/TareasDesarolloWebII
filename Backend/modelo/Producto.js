const {DataTypes} = require('sequelize');
const sequelize = require('../conexion/db');

const Producto = sequelize.define('product_v6',{

  partNumber: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  productType: {
    type: DataTypes.STRING
  },
  category_code: {
    type: DataTypes.STRING,
    field: 'category.code'
  },
  brand_code: {
    type: DataTypes.STRING,
    field: 'brand.code'
  },
  family_code: {
    type: DataTypes.STRING,
    field: 'family.code'
  },
  line_code: {
    type: DataTypes.STRING,
    field: 'line.code'
  },
  productSegment_code: {
    type: DataTypes.STRING,
    field: 'productSegment.code'
  },
  status: {
    type: DataTypes.STRING
  },
  value: {
    type: DataTypes.DOUBLE
  },
  valueCurrency: {
    type: DataTypes.STRING
  },
  defaultQuantityUnits: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  plannerCode: {
    type: DataTypes.STRING
  },
  sourceLink: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'product_v6',
  timestamps: false
});

module.exports = Producto;
