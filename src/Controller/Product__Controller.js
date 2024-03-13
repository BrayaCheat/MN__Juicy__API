const ProductModel = require("../Model/Product__Model");

const createProduct = async (req, res) => {
  try {
    const product = new ProductModel({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      image: req.file.filename && req.file.path,
      price: req.body.price,
    });
    const result = await product.save();
    if (result.length === 0) {
      return res.status(200).json({
        message: "Could not create the product!",
      });
    } else {
      return res.status(200).json({
        message: "Create success!",
        list: result,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error 404",
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const result = await ProductModel.find();
    if (result.length === 0) {
      return res.status(200).json({
        message: "Could not find the product!",
      });
    } else {
      return res.status(200).json({
        message: "Get all product success!",
        list: result,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error 404",
      error: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ProductModel.findById(id);
    if (result.length === 0) {
      return res.status(200).json({
        message: "Could not find the product!",
      });
    } else {
      return res.status(200).json({
        message: "Get product by id success!",
        list: result,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error 404",
      error: error.message,
    });
  }
};

const getProductByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const result = await ProductModel.find({ category });
    if (result.length === 0) {
      return res.status(200).json({
        message: "Could not find the product!",
      });
    } else {
      return res.status(200).json({
        message: "Get product by category success!",
        list: result,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error 404",
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const option = { new: true };
    const updateData = {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      image: req.file.filename,
      price: req.body.price,
    };
    const result = await ProductModel.findByIdAndUpdate(id, updateData, option);
    if (result.length === 0) {
      return res.status(200).json({
        message: "Could not update the product!",
      });
    } else {
      return res.status(200).json({
        message: "Update product success!",
        list: result,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error 404",
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ProductModel.findByIdAndDelete(id);
    if (result.length === 0) {
      return res.status(200).json({
        message: "Could not delete the product!",
      });
    } else {
      return res.status(200).json({
        message: "Delete product success!",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error 404",
      error: error.message,
    });
  }
};

const searchProduct = async (req, res) => {
  try {
    const searchQuery = req.query.q.toLowerCase();
    const result = await ProductModel.find({
      name: { $regex: new RegExp(searchQuery, "i") },
    });
    if (result.length === 0) {
      return res.status(200).json({
        message: "Could not find the product!",
      });
    } else {
      return res.status(200).json({
        message: "Search product success!",
        list: result,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error 404",
      error: error.message,
    });
  }
};

const paginateProduct = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const result = await ProductModel.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    if (result.length === 0) {
      return res.status(200).json({
        message: "Could not find the product!",
      });
    } else {
      return res.status(200).json({
        message: "Pagination success!",
        list: result,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error 404",
      error: error.message,
    });
  }
};

const limitProduct = async (req, res) => {
  try {
    const limit = req.query.limit || 5;
    const result = await ProductModel.find().limit(limit);
    if (result.length === 0) {
      return res.status(200).json({
        message: "Could not find the product!",
      });
    } else {
      return res.status(200).json({
        message: "Get by limit success!",
        list: result,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error 404",
      error: error.message,
    });
  }
};

const sortProduct = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const sortOrder = req.query.order || "asc";
    const sortOptions = {};
    sortOptions["price"] = sortOrder;
    const result = await ProductModel.find().limit(limit).sort(sortOptions);
    if (result.length === 0) {
      return res.status(200).json({
        message: "Could not find the product!",
      });
    } else {
      return res.status(200).json({
        message: "Sort product success!",
        list: result,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error 404",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProductById,
  getProductByCategory,
  updateProduct,
  deleteProduct,
  searchProduct,
  paginateProduct,
  limitProduct,
  sortProduct,
};
