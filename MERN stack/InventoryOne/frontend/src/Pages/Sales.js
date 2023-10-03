import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import axios from "axios";

const Purchase = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    gst: "",
    date: "",
  });

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    gst: "",
    date: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/sales");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      await axios.post("http://localhost:5000/sales", newProduct);
      setNewProduct({
        name: "",
        price: "",
        description: "",
        gst: "",
        date: "",
      });
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleEditDialogOpen = (product) => {
    setEditingProduct(product);
    setOpenEditDialog(true);
  };

  const handleUpdateProduct = async () => {
    try {
      console.log("Updating product:", editingProduct);
      console.log("Sending update request...");

      // Make a PUT request to update the product
      await axios.put(
        `http://localhost:5000/sales/${editingProduct._id}`,
        editingProduct
      );

      console.log("Update request successful!");
      setOpenEditDialog(false);
      fetchProducts(); // Fetch updated product list
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/sales/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
    setEditingProduct({
      id: "",
      name: "",
      price: "",
      description: "",
      gst: "",
      date: "",
    });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const [invoiceProduct, setInvoiceProduct] = useState(null);
  const [openInvoiceDialog, setOpenInvoiceDialog] = useState(false);

  const handleShowInvoice = (product) => {
    setInvoiceProduct(product);
    setOpenInvoiceDialog(true);
  };

  const handleCloseInvoiceDialog = () => {
    setOpenInvoiceDialog(false);
    setInvoiceProduct(null);
  };

  const handlePrintInvoice = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Product Invoice</title>
        </head>
        <body>
          <h1>Product Invoice</h1>
          <p>Name: ${invoiceProduct.name}</p>
          <p>Price: ${invoiceProduct.price}</p>
          <p>Description: ${invoiceProduct.description}</p>
          <p>Date: ${invoiceProduct.date}</p>
          <p>GST: ${invoiceProduct.gst}</p>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div>
      <h1>Sales Page</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>GST</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.date}</TableCell>
                <TableCell>{product.gst}</TableCell>
                <TableCell>
                  <Button onClick={() => handleShowInvoice(product)}>
                    Invoice
                  </Button>{" "}
                  {/* Add this line */}
                  <Button onClick={() => handleEditDialogOpen(product)}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDeleteProduct(product._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  label="Name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Price"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Description"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Date"
                  value={newProduct.date}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, date: e.target.value })
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="GST"
                  value={newProduct.gst}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, gst: e.target.value })
                  }
                />
              </TableCell>
              <TableCell>
                <Button onClick={handleAddProduct}>Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: 2 }}>
            Edit the product details:
          </DialogContentText>
          <TextField
            label="Name"
            name="name"
            value={editingProduct.name}
            onChange={handleEditInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Price"
            name="price"
            value={editingProduct.price}
            onChange={handleEditInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            value={editingProduct.description}
            onChange={handleEditInputChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="GST"
            name="gst"
            value={editingProduct.gst}
            onChange={handleEditInputChange}
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdateProduct} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openInvoiceDialog} onClose={handleCloseInvoiceDialog}>
        <DialogTitle>Product Invoice</DialogTitle>
        {invoiceProduct && (
          <DialogContent>
            <DialogContentText>
              Invoice for {invoiceProduct.name}:
            </DialogContentText>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Name:</TableCell>
                    <TableCell>{invoiceProduct.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Price:</TableCell>
                    <TableCell>{invoiceProduct.price}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Description:</TableCell>
                    <TableCell>{invoiceProduct.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Date:</TableCell>
                    <TableCell>{invoiceProduct.date}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>GST:</TableCell>
                    <TableCell>{invoiceProduct.gst}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleCloseInvoiceDialog} color="primary">
            Close
          </Button>
          <Button onClick={handlePrintInvoice} color="primary">
            Print Invoice
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Purchase;
