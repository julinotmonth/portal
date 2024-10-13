import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPengDash = () => {
    const [title, setTitle] = useState("");
    const [deskrip_img_pengumuman, setDeskrip_img_pengumuman] = useState("");
    const [parag_highlight_pengumuman, setParag_highlight_pengumuman] = useState("");
    const [parag_1_pengumuman, setParag_1_pengumuman] = useState("");
    const [parag_2_pengumuman, setParag_2_pengumuman] = useState("");
    const [parag_3_pengumuman, setParag_3_pengumuman] = useState("");
    const [parag_4_pengumuman, setParag_4_pengumuman] = useState("");
    const [parag_5_pengumuman, setParag_5_pengumuman] = useState("");
    const [parag_6_pengumuman, setParag_6_pengumuman] = useState("");
    const [parag_7_pengumuman, setParag_7_pengumuman] = useState("");
    const [parag_8_pengumuman, setParag_8_pengumuman] = useState("");
    const [parag_9_pengumuman, setParag_9_pengumuman] = useState("");
    const [parag_10_pengumuman, setParag_10_pengumuman] = useState("");
    const [parag_11_pengumuman, setParag_11_pengumuman] = useState("");
    const [parag_12_pengumuman, setParag_12_pengumuman] = useState("");
    const [penulis_pengumuman, setPenulis_pengumuman] = useState("");
    const [editor_pengumuman, setEditor_pengumuman] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getPengumumanById();
    }, []);

    const getPengumumanById = async () => {
        const response = await axios.get(`http://localhost:5000/pengumuman/${id}`);
        setTitle(response.data.name_pengumuman);
        setFile(response.data.image_pengumuman);
        setPreview(response.data.url_pengumuman);
        setEditor_pengumuman(response.data.editor_pengumuman);
        setPenulis_pengumuman(response.data.penulis_pengumuman);
        setDeskrip_img_pengumuman(response.data.deskrip_img_pengumuman);
        setParag_highlight_pengumuman(response.data.parag_highlight_pengumuman);
        setParag_1_pengumuman(response.data.parag_1_pengumuman);
        setParag_2_pengumuman(response.data.parag_2_pengumuman);
        setParag_3_pengumuman(response.data.parag_3_pengumuman);
        setParag_4_pengumuman(response.data.parag_4_pengumuman);
        setParag_5_pengumuman(response.data.parag_5_pengumuman);
        setParag_6_pengumuman(response.data.parag_6_pengumuman);
        setParag_7_pengumuman(response.data.parag_7_pengumuman);
        setParag_8_pengumuman(response.data.parag_8_pengumuman);
        setParag_9_pengumuman(response.data.parag_9_pengumuman);
        setParag_10_pengumuman(response.data.parag_10_pengumuman);
        setParag_11_pengumuman(response.data.parag_11_pengumuman);
        setParag_12_pengumuman(response.data.parag_12_pengumuman);
    }
    
    const loadImage = (e) => {
        const image_pengumuman = e.target.files[0];
        setFile(image_pengumuman);
        setPreview(URL.createObjectURL(image_pengumuman))
    }

    const updatePengumuman = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("deskrip_img_pengumuman", deskrip_img_pengumuman);
        formData.append("parag_highlight_pengumuman", parag_highlight_pengumuman);
        formData.append("parag_1_pengumuman", parag_1_pengumuman);
        formData.append("parag_2_pengumuman", parag_2_pengumuman);
        formData.append("parag_3_pengumuman", parag_3_pengumuman);
        formData.append("parag_4_pengumuman", parag_4_pengumuman);
        formData.append("parag_5_pengumuman", parag_5_pengumuman);
        formData.append("parag_6_pengumuman", parag_6_pengumuman);
        formData.append("parag_7_pengumuman", parag_7_pengumuman);
        formData.append("parag_8_pengumuman", parag_8_pengumuman);
        formData.append("parag_9_pengumuman", parag_9_pengumuman);
        formData.append("parag_10_pengumuman", parag_10_pengumuman);
        formData.append("parag_11_pengumuman", parag_11_pengumuman);
        formData.append("parag_12_pengumuman", parag_12_pengumuman);
        formData.append("penulis_pengumuman", penulis_pengumuman);
        formData.append("editor_pengumuman", editor_pengumuman);
        try {
            await axios.patch(`http://localhost:5000/pengumuman/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/dashboard/pengumuman")
        } 
        
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={updatePengumuman}>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={deskrip_img_pengumuman}
                onChange={(e) => setDeskrip_img_pengumuman(e.target.value)}
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
                value={parag_highlight_pengumuman}
                onChange={(e) => setParag_highlight_pengumuman(e.target.value)}
                placeholder="parag_highlight"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_1_pengumuman}
                onChange={(e) => setParag_1_pengumuman(e.target.value)}
                placeholder="parag_1"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_2_pengumuman}
                onChange={(e) => setParag_2_pengumuman(e.target.value)}
                placeholder="parag_2"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_3_pengumuman}
                onChange={(e) => setParag_3_pengumuman(e.target.value)}
                placeholder="parag_3"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_4_pengumuman}
                onChange={(e) => setParag_4_pengumuman(e.target.value)}
                placeholder="parag_4"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_5_pengumuman}
                onChange={(e) => setParag_5_pengumuman(e.target.value)}
                placeholder="parag_5"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_6_pengumuman}
                onChange={(e) => setParag_6_pengumuman(e.target.value)}
                placeholder="parag_6"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_7_pengumuman}
                onChange={(e) => setParag_7_pengumuman(e.target.value)}
                placeholder="parag_7"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_8_pengumuman}
                onChange={(e) => setParag_8_pengumuman(e.target.value)}
                placeholder="parag_8"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_9_pengumuman}
                onChange={(e) => setParag_9_pengumuman(e.target.value)}
                placeholder="parag_9"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_10_pengumuman}
                onChange={(e) => setParag_10_pengumuman(e.target.value)}
                placeholder="parag_10"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_11_pengumuman}
                onChange={(e) => setParag_11_pengumuman(e.target.value)}
                placeholder="parag_11"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={parag_12_pengumuman}
                onChange={(e) => setParag_12_pengumuman(e.target.value)}
                placeholder="parag_12"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={penulis_pengumuman}
                onChange={(e) => setPenulis_pengumuman(e.target.value)}
                placeholder="penulis"
              />    
            </div>

            <div className="control">
            <input
                type="text"
                className="input"
                value={editor_pengumuman}
                onChange={(e) => setEditor_pengumuman(e.target.value)}
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
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );

};

export default EditPengDash;