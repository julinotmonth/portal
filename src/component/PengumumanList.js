import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { Link } from "react-router-dom";

const PengumumanList = () => {
    const [pengumumans, setPengumumans] = useState([]);

    useEffect(() => {
        getPengumuman();
    }, []);

    const getPengumuman = async () => {
        const response = await axios.get("http://localhost:5000/pengumuman");
        setPengumumans(response.data);
    };

    const deletePengumuman = async (pengumumanId) => {
        try {
            await axios.delete(`http://localhost:5000/pengumuman/${pengumumanId}`);
            getPengumuman();
        } 
        
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="container mt-5">
      <Link to="/add-pengumuman" className="button is-success">
        Add New
      </Link>
      <div className="columns is-multiline mt-2">
        {pengumumans.map((pengumuman) => (
          <div className="column is-one-quarter" key={pengumuman.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={pengumuman.url_pengumuman} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{pengumuman.deskrip_img_pengumuman}</p>
                    <p className="title is-4">{pengumuman.name_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_highlight_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_1_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_2_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_3_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_4_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_5_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_6_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_7_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_8_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_9_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_10_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_11_pengumuman}</p>
                    <p className="title is-4">{pengumuman.parag_12_pengumuman}</p>
                    <p className="title is-4">{pengumuman.penulis_pengumuman}</p>
                    <p className="title is-4">{pengumuman.editor_pengumuman}</p>
                    <p className="title is-4">{formatDistanceToNow(new Date(pengumuman.createdAt), { addSuffix: true, locale: id })}</p>
                  </div>
                </div>
              </div>
 
              <footer className="card-footer">
                <Link to={`/edit-pengumuman/${pengumuman.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deletePengumuman(pengumuman.id)}
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

export default PengumumanList;