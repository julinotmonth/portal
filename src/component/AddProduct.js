import axios from "axios";
import { formatDate } from "date-fns";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [deskrip_img, setDeskrip_img] = useState("");
    const [parag_highlight, setParag_highlight] = useState("");
    const [parag_1, setParag_1] = useState("");
    const [parag_2, setParag_2] = useState("");
    const [parag_3, setParag_3] = useState("");
    const [parag_4, setParag_4] = useState("");
    const [parag_5, setParag_5] = useState("");
    const [parag_6, setParag_6] = useState("");
    const [parag_7, setParag_7] = useState("");
    const [parag_8, setParag_8] = useState("");
    const [parag_9, setParag_9] = useState("");
    const [parag_10, setParag_10] = useState("");
    const [parag_11, setParag_11] = useState("");
    const [parag_12, setParag_12] = useState("");
    const [penulis, setPenulis] = useState("");
    const [editor, setEditor] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("deskrip_img", deskrip_img);
        formData.append("parag_highlight", parag_highlight);
        formData.append("parag_1", parag_1);
        formData.append("parag_2", parag_2);
        formData.append("parag_3", parag_3);
        formData.append("parag_4", parag_4);
        formData.append("parag_5", parag_5);
        formData.append("parag_6", parag_6);
        formData.append("parag_7", parag_7);
        formData.append("parag_8", parag_8);
        formData.append("parag_9", parag_9);
        formData.append("parag_10", parag_10);
        formData.append("parag_11", parag_11);
        formData.append("parag_12", parag_12);
        formData.append("penulis", penulis);
        formData.append("editor", editor);
        try {
            await axios.post("http://localhost:5000/products", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/")
        } 
        
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={deskrip_img}
                onChange={(e) => setDeskrip_img(e.target.value)}
                placeholder="deskrip_img"
              />
            </div>
            
            <div className="control">
                <input
                    type="text"
                    className="input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="judul"
                />
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_highlight}
                onChange={(e) => setParag_highlight(e.target.value)}
                placeholder="parag_highlight"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_1}
                onChange={(e) => setParag_1(e.target.value)}
                placeholder="parag_1"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_2}
                onChange={(e) => setParag_2(e.target.value)}
                placeholder="parag_2"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_3}
                onChange={(e) => setParag_3(e.target.value)}
                placeholder="parag_3"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_4}
                onChange={(e) => setParag_4(e.target.value)}
                placeholder="parag_4"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_5}
                onChange={(e) => setParag_5(e.target.value)}
                placeholder="parag_5"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_6}
                onChange={(e) => setParag_6(e.target.value)}
                placeholder="parag_6"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_7}
                onChange={(e) => setParag_7(e.target.value)}
                placeholder="parag_7"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_8}
                onChange={(e) => setParag_8(e.target.value)}
                placeholder="parag_8"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_9}
                onChange={(e) => setParag_9(e.target.value)}
                placeholder="parag_9"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_10}
                onChange={(e) => setParag_10(e.target.value)}
                placeholder="parag_10"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_11}
                onChange={(e) => setParag_11(e.target.value)}
                placeholder="parag_11"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_12}
                onChange={(e) => setParag_12(e.target.value)}
                placeholder="parag_12"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={penulis}
                onChange={(e) => setPenulis(e.target.value)}
                placeholder="penulis"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={editor}
                onChange={(e) => setEditor(e.target.value)}
                placeholder="editor"
              />    
            </div>

          </div>
 
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
 
          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}
 
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;