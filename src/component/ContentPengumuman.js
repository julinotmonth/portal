import { Carousel, Col, Row } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";
import berita_politik_1 from "../img/berita_politik_1.webp"
import { FaQuoteLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import img_politik_terkini_1 from "../img/img_politik_terkini_1.webp"
import img_politik_terkini_2 from "../img/img_politik_terkini_2.webp"
import img_politik_terkini_3 from "../img/img_politik_terkini_3.webp"
import img_politik_terkini_4 from "../img/img_politik_terkini_4.webp"
import img_politik_terkini_5 from "../img/img_politik_terkini_5.webp"
import img_politik_terkini_6 from "../img/img_politik_terkini_6.webp"
import img_politik_terkini_7 from "../img/img_politik_terkini_7.webp"
import img_politik_terkini_8 from "../img/img_politik_terkini_8.webp"
import img_politik_terkini_9 from "../img/img_politik_terkini_9.webp"
import img_politik_terkini_10 from "../img/img_politik_terkini_10.webp"
import img_politik_terkini_11 from "../img/img_politik_terkini_11.webp"
import img_politik_terkini_12 from "../img/img_politik_terkini_12.webp"
import img_politik_terkini_13 from "../img/img_politik_terkini_13.webp"
import img_most_popular_1 from "../img/img_most_popular_1.webp"
import img_most_popular_2 from "../img/img_most_popular_2.webp"
import img_most_popular_3 from "../img/img_most_popular_3.webp"
import img_most_popular_4 from "../img/img_most_popular_4.webp"
import img_most_popular_5 from "../img/img_most_popular_5.webp"
import content_terkini_1 from "../img/content_terkini_1.webp"
import content_terkini_2 from "../img/content_terkini_2.webp"
import content_terkini_3 from "../img/content_terkini_3.webp"
import content_terkini_4 from "../img/content_terkini_4.webp"
import content_terkini_5 from "../img/content_terkini_5.webp"
import img_politik from "../img/img_politik_1.webp"
import img_info_grafik_1 from "../img/img_info_grafik_1.webp"
import img_info_grafik_2 from "../img/img_info_grafik_2.webp"
import img_info_grafik_3 from "../img/img_info_grafik_3.webp"
import img_crousel_politik_1 from "../img/img_crousel_politik_1.webp"
import img_crousel_politik_2 from "../img/img_crousel_politik_2.webp"
import img_crousel_politik_3 from "../img/img_crousel_politik_3.webp"
import img_politik_2 from "../img/img_politik_2.webp"
import img_politik_3 from "../img/img_politik_3.webp"
import img_politik_4 from "../img/img_politik_4.webp"
import crousel_sekda_1 from "../img/crousel_sekda_1.jpeg"
import crousel_sekda_2 from "../img/crousel_sekda_2.jpeg"
import crousel_sekda_3 from "../img/crousel_sekda_3.jpeg"
import crousel_sekda_4 from "../img/crousel_sekda_4.jpeg"
import crousel_sekda_5 from "../img/crousel_sekda_5.jpeg"
import crousel_sekda_6 from "../img/crousel_sekda_6.jpeg"
import crousel_sekda_7 from "../img/crousel_sekda_7.jpeg"
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { useEffect, useState } from "react";
import { format, formatDistance, formatDistanceToNow } from "date-fns";
import { id as localeId } from 'date-fns/locale';

function ContentPengumuman () {
 // Mengambil nilai awal dari localStorage jika tersedia, jika tidak, gunakan nilai default
 const { id } = useParams(); // Mengambil ID dari parameter URL
 const [likes, setLikes] = useState(() => Number(localStorage.getItem(`likes_${id}`)) || 0);
 const [dislikes, setDislikes] = useState(() => Number(localStorage.getItem(`dislikes_${id}`)) || 0);
 const [hasLiked, setHasLiked] = useState(() => JSON.parse(localStorage.getItem(`hasLiked_${id}`)) || false);
 const [hasDisliked, setHasDisliked] = useState(() => JSON.parse(localStorage.getItem(`hasDisliked_${id}`)) || false);
 const [pengumumans, setPengumumans] = useState(null);
 const [totalVotes, setTotalVotes] = useState({ likes: likes, dislikes: dislikes });
 const [data, setData] = useState([]);
 const [dataArtikel, setDataArtikel] = useState([]);
 const [dataPengumuman, setDataPengumuman] = useState([]);
 // Fungsi untuk handle like (termasuk toggle)
 const handleLikeClick = () => {
   if (hasLiked) {
     setLikes(likes - 1);
     setHasLiked(false);
     setTotalVotes({ likes: likes - 1, dislikes: dislikes });
   } else if (hasDisliked) {
     setDislikes(dislikes - 1);
     setLikes(likes + 1);
     setHasLiked(true);
     setHasDisliked(false);
     setTotalVotes({ likes: likes + 1, dislikes: dislikes - 1 });
   } else {
     setLikes(likes + 1);
     setHasLiked(true);
     setTotalVotes({ likes: likes + 1, dislikes: dislikes });
   }
 };

 // Fungsi untuk handle dislike (termasuk toggle)
 const handleDislikeClick = () => {
   if (hasDisliked) {
     setDislikes(dislikes - 1);
     setHasDisliked(false);
     setTotalVotes({ likes: likes, dislikes: dislikes - 1 });
   } else if (hasLiked) {
     setLikes(likes - 1);
     setDislikes(dislikes + 1);
     setHasDisliked(true);
     setHasLiked(false);
     setTotalVotes({ likes: likes - 1, dislikes: dislikes + 1 });
   } else {
     setDislikes(dislikes + 1);
     setHasDisliked(true);
     setTotalVotes({ likes: likes, dislikes: dislikes + 1 });
   }
 };

 useEffect(() => {
    fetch('http://localhost:5000/productsByTime')
      .then(response => response.json())
      .then(result => {
        // Urutkan data berdasarkan waktu
        const sortedData = result.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
        setData(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/artikelByTime')
      .then(response => response.json())
      .then(result => {
        // Urutkan data berdasarkan waktu
        const sortedData = result.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
        setDataArtikel(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/pengumumanByTime')
      .then(response => response.json())
      .then(result => {
        // Urutkan data berdasarkan waktu
        const sortedData = result.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
        setDataPengumuman(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

 // Menyimpan nilai like, dislike, dan status like/dislike ke localStorage saat berubah
 useEffect(() => {
   localStorage.setItem(`likes_${id}`, likes);
   localStorage.setItem(`dislikes_${id}`, dislikes);
   localStorage.setItem(`hasLiked_${id}`, hasLiked);
   localStorage.setItem(`hasDisliked_${id}`, hasDisliked);
 }, [likes, dislikes, hasLiked, hasDisliked]);


   useEffect(() => {
       // Misalnya ini API untuk mengambil data produk
       fetch(`http://localhost:5000/pengumuman/${id}`)
           .then((response) => response.json())
           .then((data) => {
               // Misalnya Anda hanya mengambil produk pertama dari hasil API
               setPengumumans(data); // Jika hanya satu produk, ambil langsung data[0]
           })
           .catch((error) => console.error(error));
   }, [id]); 

   if (!pengumumans) {
       return <div>Loading...</div>;
   }
   
   console.log(`Total Votes: Likes = ${totalVotes.likes}, Dislikes = ${totalVotes.dislikes}`);


    const deskripsi = "Pj. Gubernur Adhy Lepas Ekspor Produk Unggulan Jatim ke Empat Negara, Totalnya Tembus Rp 1,3 Miliar";
    const deskripsi_2 = "Pj. Ketua Dekranasda Isye Ajak Pengrajin Anyaman dan Sasando NTT Kolaborasi Bersama Pengrajin Jatim";
    const deskripsi_3 = "145 Siswa Asal Papua Tempuh Pendidikan SMA/SMK di Jatim Lewat Program ADEM, Pj. Gubernur Adhy Beri Pesan Khusus Hingga Janji Bonus";
    const deskripsi_4 = "Hadiri Raker Komwil IV APEKSI, Pj. Gubernur Jatim Dorong Kepala Daerah Terapkan Konsep Kota Cerdas yang Hasilkan Perkotaan Hijau";
    const deskripsi_5 = "Tingkatkan Kualitas Tenun, Pj. Ketua Dekranasda Isye Bersama Pengrajin Jatim Studi Tiru ke NTT";
    const deskripsi_6 = "Dua Pelajar Terpilih Sebagai Anggota Paskibraka Nasional, Pj. Gubernur Adhy Pesankan Beri Performa Terbaik untuk Harumkan Jawa Timur";
    const deskripsi_7 = "Jatim Provinsi Pertama Diluncurkannya Aplikasi Population Clock tingkat Provinsi, Pj. Gubernur Adhy Harap Jadi Upaya Penurunan Stunting";
    
    const disukai_1 = "Kecelakaan beruntun libatkan sejumlah kendaraan di Jakarta Utara"
    const disukai_2 = "Kemenkumham akan limpahkan kewenangan Rupbasan ke Kejagung"
    const disukai_3 = "Ribuan kades Jatim nyatakan satu komando tak berpolitik jelang Pilkada"
    const disukai_4 = "Partai Perubahan besutan Anies Baswedan buka pendaftaran, benarkah?"
    const disukai_5 = "Jadwal lengkap Arab Saudi vs Indonesia di Kualifikasi Piala Dunia 2026"

    const terkini_1 ="Politik kemarin, calon tunggal pilkada hingga putusan gabung BRICS"
    const terkini_2 ="KPU catat 41 daerah dengan calon tunggal pada Pilkada 2024 dengan hasil yang valid"
    const terkini_3 ="Rudiantara: Penilaian Anugerah Pandu Negeri 2024 dilakukan independen"
    const terkini_4 ="Menlu sampaikan terima kasih ke Komisi I DPR di akhir masa jabatannya"
    const terkini_5 ="Hukum kemarin, Pertukaran buron hingga tanggapan KPK terkait Kaesang"
    const terkini_6 ="Imigrasi deportasi buronan Filipina berinisial AG"
    const terkini_7 ="Menlu sampaikan terima kasih ke Komisi I DPR di akhir masa jabatannya"
    const terkini_8 ="Imigrasi deportasi buronan Filipina berinisial AG"

  // Fungsi untuk memotong teks jika melebihi 10 karakter
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
        }
        return text;
    };
    return (
        <div className="wadah_content_berita margin_bottom_content_berita">
            <div className="margin_kanankiri">
                <div className="wadah_content_content_berita">
                    <div className="wadah_column_kiri">
                        <Row>
                            <Col xl={8} lg={8} md={12} sm={12}>
                                <div className="wadah_content_column_berita margin_right_politik_left">
                                    <h1 className="judul_berita_h1">{pengumumans.name_pengumuman}</h1>
                                    <div className="wadah_tanggal_hari_jam">
                                        <FaCalendar className="icon_calendar_content_politik margin_right_icon_calendar_content_politik" />
                                        <span className="span_calendar_content_politik">{format(new Date(pengumumans.updatedAt), "EEEE, d MMMM yyyy HH:mm 'WIB'", { locale: localeId })}</span>
                                    </div>
                                    <div className="wadah_img_deskrip">
                                        <div className="wadah_img_berita_politik">
                                            <img src={pengumumans.url_pengumuman} className="img_content_berita_politik" />
                                        </div>
                                        <div className="wadah_deskripsi_berita_politik">
                                            <span className="deskripsi_berita_politik">
                                                {pengumumans.deskrip_img_pengumuman}
                                            </span>
                                        </div>
                                        <div className="wadah_quotes_berita_politik">
                                            <span className="span_quotes_berita_politik">
                                                {pengumumans.parag_highlight_pengumuman}
                                            </span>
                                        </div>
                                        <div className="wadah_deskripsi_berita_all">
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{pengumumans.parag_1_pengumuman}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{pengumumans.parag_2_pengumuman}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{pengumumans.parag_3_pengumuman}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{pengumumans.parag_6_pengumuman}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{pengumumans.parag_7_pengumuman}</span>
                                            </div>
                                            <div className="wadah_baca_juga">
                                                <span className="span_baca_juga">Baca juga:</span>
                                                <Link className="link_baca_juga"> {pengumumans.parag_4_pengumuman}</Link>
                                            </div>
                                            <div className="wadah_baca_juga margin_bottom_baca_juga">
                                                <span className="span_baca_juga">Baca juga:</span>
                                                <Link className="link_baca_juga"> {pengumumans.parag_5_pengumuman}</Link>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{pengumumans.parag_8_pengumuman}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{pengumumans.parag_9_pengumuman}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{pengumumans.parag_10_pengumuman}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{pengumumans.parag_11_pengumuman}</span>
                                            </div>
                                            <div className="wadah_deskripsi_berita_1">
                                                <span className="span_deskripsi_berita_1">{pengumumans.parag_12_pengumuman}</span>
                                            </div>
                                        </div>
                                        <div className="wadah_name_pewarta_editor_copyright">
                                            <div className="wadah_pewarta">
                                                <span className="content_name_pewarta">Pewarta: {pengumumans.penulis_pengumuman}</span>
                                            </div>
                                            <div className="wadah_pewarta">
                                                <span className="content_name_pewarta">Editor: {pengumumans.editor_pengumuman}</span>
                                            </div>
                                            <div className="wadah_pewarta">
                                                <span className="content_name_pewarta">Copyright © ANTARA 2024</span>
                                            </div>
                                        </div>
                                        <div className="wadah_button_like_dislike margin_bottom_wadah_button_like_dislike">
                                            <div className="wadah_icon_like" onClick={handleLikeClick}>
                                                <AiOutlineLike className="icon_like" />
                                                <span className="total_like">{likes}</span>
                                            </div>
                                            <div className="wadah_icon_dislike" onClick={handleDislikeClick}>
                                                <AiOutlineDislike className="icon_dislike" />
                                                <span className="total_dislike">{dislikes}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wadah_content_editor margin_bottom_editor">
                                <h4 className="judul_content_editor">Berita Terkini</h4>
                                <div className="wadah_garis_editor">
                                    <div className="wadah_garis_editor_2"></div>
                                </div>
                            </div>
                            <div className="wadah_content_politik_2">
                                <Row>
                                {data
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 6) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_img_deskrip_politik margin_bottom_wadah_berita">
                                            <div className="wadah_img_politik">
                                                <img src={item.url} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <a href={`/berita/${item.id}`} className="link_deskrip_politik">{truncateText(item.name, 50)}</a>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>{formatDistanceToNow(new Date(item.updatedAt), { addSuffix: true, locale: localeId })}</span>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                                </Row>
                            </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12} sm={12}>
                                <div className="wadah_right_politik_all">
                                <div className="wadah_content_editor margin_bottom_editor margin_top_heading_terpopuler">
                                    <h4 className="judul_content_editor">Pengumuman Terkini</h4>
                                    <div className="wadah_garis_editor">
                                        <div className="wadah_garis_editor_2"></div>
                                    </div>
                                </div>
                                <div className="wadah_sidebar margin_top_sidebar">
                                    <Row>
                                    {dataPengumuman
                                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                    .slice(0, 7) // Ambil hanya 6 konten terbaru
                                    .map((item) => (
                                        <Col xl={12} lg={12} md={6}>
                                                <div className="wadah_content_crousels margin_bottom_wadah_content_crousels margin_right_wadah_content_crousels_1">
                                                    <a href={`/pengumuman/${item.id}`}>
                                                        <img src={item.url_pengumuman} className="img_content_crousels" />
                                                    </a>
                                                    <a href={`/pengumuman/${item.id}`} className="link_deskripsi_content">
                                                        <span>{truncateText(item.name_pengumuman, 60)}</span>
                                                    </a>
                                                    <div className="wadah_kategori">
                                                        <span>Pengumuman</span>
                                                    </div>
                                                    <div className="wadah_span_waktu">
                                                        <span>{formatDistanceToNow(new Date(item.updatedAt), { addSuffix: true, locale: localeId })}</span>
                                                    </div>
                                                </div>
                                        </Col>
                                    ))}
                                    </Row>
                                </div>
                            <div className="wadah_content_editor margin_bottom_editor">
                                    <h4 className="judul_content_editor">Artikel Terbaru</h4>
                                    <div className="wadah_garis_editor">
                                        <div className="wadah_garis_editor_2"></div>
                                    </div>
                                    <div className="wadah_sidebar margin_top_wadah_paling_banyak">
                                    <Row>
                                    {dataArtikel
                                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                    .slice(0, 3) // Ambil hanya 6 konten terbaru
                                    .map((item) => (
                                        <Col xl={12} lg={12} md={6}>
                                                <div className="wadah_content_crousels margin_bottom_wadah_content_crousels margin_right_wadah_paling_banyak_1">
                                                    <a href={`/artikel/${item.id}`}>
                                                        <img src={item.url_artikel} className="img_content_crousels" />
                                                    </a>
                                                    <a href={`/artikel/${item.id}`} className="link_deskripsi_content">
                                                        <span>{truncateText(item.name_artikel, 50)}</span>
                                                    </a>
                                                    <div className="wadah_kategori">
                                                        <span>Artikel</span>
                                                    </div>
                                                <div className="wadah_span_waktu">
                                                    <span>{formatDistanceToNow(new Date(item.updatedAt), { addSuffix: true, locale: localeId })}</span>
                                                </div>
                                                </div>
                                        </Col>
                                    ))}
                                    </Row>
                                </div>
                                </div>
                                <div className="margin_top_politik_left">
                                    <div className="wadah_content_editor margin_bottom_editor">
                                        <h4 className="judul_content_editor">Foto</h4>
                                        <div className="wadah_garis_editor">
                                            <div className="wadah_garis_editor_2"></div>
                                        </div>
                                    </div>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img src={img_crousel_politik_1} className="img_crousel_content_left" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={img_crousel_politik_2} className="img_crousel_content_left" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={img_crousel_politik_3} className="img_crousel_content_left" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentPengumuman;