import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
    };

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/products/${productId}`);
            getProducts();
        } 
        
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="container mt-5">
      <Link to="/add" className="button is-success">
        Add New
      </Link>
      <div className="columns is-multiline mt-2">
        {products.map((product) => (
          <div className="column is-one-quarter" key={product.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{product.deskrip_img}</p>
                    <p className="title is-4">{product.name}</p>
                    <p className="title is-4">{product.parag_highlight}</p>
                    <p className="title is-4">{product.parag_1}</p>
                    <p className="title is-4">{product.parag_2}</p>
                    <p className="title is-4">{product.parag_3}</p>
                    <p className="title is-4">{product.parag_4}</p>
                    <p className="title is-4">{product.parag_5}</p>
                    <p className="title is-4">{product.parag_6}</p>
                    <p className="title is-4">{product.parag_7}</p>
                    <p className="title is-4">{product.parag_8}</p>
                    <p className="title is-4">{product.parag_9}</p>
                    <p className="title is-4">{product.parag_10}</p>
                    <p className="title is-4">{product.parag_11}</p>
                    <p className="title is-4">{product.parag_12}</p>
                    <p className="title is-4">{product.penulis}</p>
                    <p className="title is-4">{product.editor}</p>
                    <p className="title is-4">{formatDistanceToNow(new Date(product.createdAt), { addSuffix: true, locale: id })}</p>
                  </div>
                </div>
              </div>
 
              <footer className="card-footer">
                <Link to={`edit/${product.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ProductList;