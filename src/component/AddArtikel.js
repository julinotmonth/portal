import axios from "axios";
import { formatDate } from "date-fns";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddArtikel = () => {
    const [title, setTitle] = useState("");
    const [deskrip_img_artikel, setDeskrip_img_artikel] = useState("");
    const [parag_highlight_artikel, setParag_highlight_artikel] = useState("");
    const [parag_1_artikel, setParag_1_artikel] = useState("");
    const [parag_2_artikel, setParag_2_artikel] = useState("");
    const [parag_3_artikel, setParag_3_artikel] = useState("");
    const [parag_4_artikel, setParag_4_artikel] = useState("");
    const [parag_5_artikel, setParag_5_artikel] = useState("");
    const [parag_6_artikel, setParag_6_artikel] = useState("");
    const [parag_7_artikel, setParag_7_artikel] = useState("");
    const [parag_8_artikel, setParag_8_artikel] = useState("");
    const [parag_9_artikel, setParag_9_artikel] = useState("");
    const [parag_10_artikel, setParag_10_artikel] = useState("");
    const [parag_11_artikel, setParag_11_artikel] = useState("");
    const [parag_12_artikel, setParag_12_artikel] = useState("");
    const [penulis_artikel, setPenulis_artikel] = useState("");
    const [editor_artikel, setEditor_artikel] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image_artikel = e.target.files[0];
        setFile(image_artikel);
        setPreview(URL.createObjectURL(image_artikel));
    };

    const saveArtikel = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("deskrip_img_artikel", deskrip_img_artikel);
        formData.append("parag_highlight_artikel", parag_highlight_artikel);
        formData.append("parag_1_artikel", parag_1_artikel);
        formData.append("parag_2_artikel", parag_2_artikel);
        formData.append("parag_3_artikel", parag_3_artikel);
        formData.append("parag_4_artikel", parag_4_artikel);
        formData.append("parag_5_artikel", parag_5_artikel);
        formData.append("parag_6_artikel", parag_6_artikel);
        formData.append("parag_7_artikel", parag_7_artikel);
        formData.append("parag_8_artikel", parag_8_artikel);
        formData.append("parag_9_artikel", parag_9_artikel);
        formData.append("parag_10_artikel", parag_10_artikel);
        formData.append("parag_11_artikel", parag_11_artikel);
        formData.append("parag_12_artikel", parag_12_artikel);
        formData.append("penulis_artikel", penulis_artikel);
        formData.append("editor_artikel", editor_artikel);
        try {
            await axios.post("http://localhost:5000/artikel", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/artikel-list")
        } 
        
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveArtikel}>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={deskrip_img_artikel}
                onChange={(e) => setDeskrip_img_artikel(e.target.value)}
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
                value={parag_highlight_artikel}
                onChange={(e) => setParag_highlight_artikel(e.target.value)}
                placeholder="parag_highlight"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_1_artikel}
                onChange={(e) => setParag_1_artikel(e.target.value)}
                placeholder="parag_1"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_2_artikel}
                onChange={(e) => setParag_2_artikel(e.target.value)}
                placeholder="parag_2"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_3_artikel}
                onChange={(e) => setParag_3_artikel(e.target.value)}
                placeholder="parag_3"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_4_artikel}
                onChange={(e) => setParag_4_artikel(e.target.value)}
                placeholder="parag_4"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_5_artikel}
                onChange={(e) => setParag_5_artikel(e.target.value)}
                placeholder="parag_5"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_6_artikel}
                onChange={(e) => setParag_6_artikel(e.target.value)}
                placeholder="parag_6"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_7_artikel}
                onChange={(e) => setParag_7_artikel(e.target.value)}
                placeholder="parag_7"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_8_artikel}
                onChange={(e) => setParag_8_artikel(e.target.value)}
                placeholder="parag_8"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_9_artikel}
                onChange={(e) => setParag_9_artikel(e.target.value)}
                placeholder="parag_9"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_10_artikel}
                onChange={(e) => setParag_10_artikel(e.target.value)}
                placeholder="parag_10"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_11_artikel}
                onChange={(e) => setParag_11_artikel(e.target.value)}
                placeholder="parag_11"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_12_artikel}
                onChange={(e) => setParag_12_artikel(e.target.value)}
                placeholder="parag_12"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={penulis_artikel}
                onChange={(e) => setPenulis_artikel(e.target.value)}
                placeholder="penulis"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={editor_artikel}
                onChange={(e) => setEditor_artikel(e.target.value)}
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

export default AddArtikel;