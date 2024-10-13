import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import img_politik from "../img/img_politik_1.webp"
import img_politik_2 from "../img/img_politik_2.webp"
import img_politik_3 from "../img/img_politik_3.webp"
import img_politik_4 from "../img/img_politik_4.webp"
import img_hukum_1 from "../img/img_hukum_1.webp"
import img_hukum_2 from "../img/img_hukum_2.webp"
import img_hukum_3 from "../img/img_hukum_3.webp"
import img_hukum_4 from "../img/img_hukum_4.webp"
import axios from "axios"
import { formatDistanceToNow } from "date-fns";  // Import fungsi dari date-fns
import { id } from 'date-fns/locale';
import { useEffect, useState } from "react"

function ComponentArtikel () {
    const terkini_1 ="Politik kemarin, calon tunggal pilkada hingga putusan gabung BRICS"
    const terkini_2 ="KPU catat 41 daerah dengan calon tunggal pada Pilkada 2024 dengan hasil yang valid"
    const terkini_3 ="Rudiantara: Penilaian Anugerah Pandu Negeri 2024 dilakukan independen"
    const terkini_4 ="Menlu sampaikan terima kasih ke Komisi I DPR di akhir masa jabatannya"
    const terkini_5 ="Hukum kemarin, Pertukaran buron hingga tanggapan KPK terkait Kaesang"
    const terkini_6 ="Imigrasi deportasi buronan Filipina berinisial AG"
    const terkini_7 ="Menlu sampaikan terima kasih ke Komisi I DPR di akhir masa jabatannya"
    const terkini_8 ="Imigrasi deportasi buronan Filipina berinisial AG"

    const disukai_1 = "Kecelakaan beruntun libatkan sejumlah kendaraan di Jakarta Utara"
    const disukai_2 = "Kemenkumham akan limpahkan kewenangan Rupbasan ke Kejagung"
    const disukai_3 = "Ribuan kades Jatim nyatakan satu komando tak berpolitik jelang Pilkada"
    const disukai_4 = "Partai Perubahan besutan Anies Baswedan buka pendaftaran, benarkah?"
    const disukai_5 = "Jadwal lengkap Arab Saudi vs Indonesia di Kualifikasi Piala Dunia 2026"

    // Fungsi untuk memotong teks jika melebihi 10 karakter
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    const [artikels, setArtikels] = useState([]);

    useEffect(() => {
        getArtikels();
    }, []);

    const getArtikels = async () => {
        const response = await axios.get("http://localhost:5000/artikel");
        setArtikels(response.data)
    };
    return (
        <div className="wadah_component_berita margin_bottom_wadah_component_berita">
            <div className="margin_kanankiri">
                <div className="wadah_content_component_berita">
                    <div className="wadah_content_component_berita_2">
                        <div className="wadah_content_editor margin_bottom_editor">
                            <h4 className="judul_content_editor">Artikel</h4>
                            <div className="wadah_garis_editor">
                                <div className="wadah_garis_editor_2"></div>
                            </div>
                        </div>
                                <Row>
                                    {artikels.map((artikel) => (
                                    <Col xl={3} lg={3} md={6} sm={12} key={artikel.id}>
                                        <div className="wadah_img_deskrip_politik margin_bottom_deskrip_politik_1 margin_bottom_row_berita_data">
                                            <div className="wadah_img_politik">
                                                <img src={artikel.url_artikel} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link to={`${artikel.id}`} className="link_deskrip_politik">{truncateText(artikel.name_artikel, 55)}</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>{formatDistanceToNow(new Date(artikel.createdAt), { addSuffix: true, locale: id })}</span>
                                            </div>
                                        </div>
                                    </Col>
                                     ))}
                                </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComponentArtikel;