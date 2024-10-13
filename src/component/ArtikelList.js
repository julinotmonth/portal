import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { Link } from "react-router-dom";

const ArtikelList = () => {
    const [artikels, setArtikels] = useState([]);

    useEffect(() => {
        getArtikel();
    }, []);

    const getArtikel = async () => {
        const response = await axios.get("http://localhost:5000/artikel");
        setArtikels(response.data);
    };

    const deleteArtikel = async (artikelId) => {
        try {
            await axios.delete(`http://localhost:5000/artikel/${artikelId}`);
            getArtikel();
        } 
        
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="container mt-5">
      <Link to="/add-artikel" className="button is-success">
        Add New
      </Link>
      <div className="columns is-multiline mt-2">
        {artikels.map((artikel) => (
          <div className="column is-one-quarter" key={artikel.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={artikel.url_artikel} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{artikel.deskrip_img_artikel}</p>
                    <p className="title is-4">{artikel.name_artikel}</p>
                    <p className="title is-4">{artikel.parag_highlight_artikel}</p>
                    <p className="title is-4">{artikel.parag_1_artikel}</p>
                    <p className="title is-4">{artikel.parag_2_artikel}</p>
                    <p className="title is-4">{artikel.parag_3_artikel}</p>
                    <p className="title is-4">{artikel.parag_4_artikel}</p>
                    <p className="title is-4">{artikel.parag_5_artikel}</p>
                    <p className="title is-4">{artikel.parag_6_artikel}</p>
                    <p className="title is-4">{artikel.parag_7_artikel}</p>
                    <p className="title is-4">{artikel.parag_8_artikel}</p>
                    <p className="title is-4">{artikel.parag_9_artikel}</p>
                    <p className="title is-4">{artikel.parag_10_artikel}</p>
                    <p className="title is-4">{artikel.parag_11_artikel}</p>
                    <p className="title is-4">{artikel.parag_12_artikel}</p>
                    <p className="title is-4">{artikel.penulis_artikel}</p>
                    <p className="title is-4">{artikel.editor_artikel}</p>
                    <p className="title is-4">{formatDistanceToNow(new Date(artikel.createdAt), { addSuffix: true, locale: id })}</p>
                  </div>
                </div>
              </div>
 
              <footer className="card-footer">
                <Link to={`/edit-artikel/${artikel.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteArtikel(artikel.id)}
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

export default ArtikelList;