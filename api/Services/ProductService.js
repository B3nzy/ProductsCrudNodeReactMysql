const conn = require("../DbConnections/MysqlDbConn");

const addProduct = (req, res) => {
  const { name, price, color, count } = req.body;
  const query = `insert into products(name, price, color, count) values(
    "${name}", ${price}, "${color}", ${count}
  )`;

  conn.query(query, (err, data, field) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: "Something went wrong.",
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Product added successfully.",
      });
    }
  });
};

const getAllProducts = (req, res) => {
  const query = `select * from products`;

  conn.query(query, (err, data, field) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: "Something went wrong.",
      });
    } else {
      res.status(200).json({
        success: true,
        data,
      });
    }
  });
};

const getSingleProduct = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const query = `select * from products where id = ${id}`;

  conn.query(query, (err, data, field) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: "Something went wrong.",
      });
    } else {
      res.status(200).json({
        success: true,
        data: data[0],
      });
    }
  });
};

const updateProduct = (req, res) => {
  const { id, name, price, color, count } = req.body;
  const query = `update products set
      name="${name}", price=${price}, color="${color}", count=${count}
      where id=${id}
    `;

  conn.query(query, (err, data, field) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: "Something went wrong.",
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Product updated successfully.",
      });
    }
  });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const query = `delete from products where id = ${id}`;

  conn.query(query, (err, data, field) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: "Something went wrong.",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "product deleted successfully.",
      });
    }
  });
};

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
