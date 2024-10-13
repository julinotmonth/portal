import { Carousel, Col, Row } from "react-bootstrap";
import img_crousel_politik_1 from "../img/img_crousel_politik_1.webp"
import img_crousel_politik_2 from "../img/img_crousel_politik_2.webp"
import img_crousel_politik_3 from "../img/img_crousel_politik_3.webp"
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
import img_politik_2 from "../img/img_politik_2.webp"
import img_info_grafik_1 from "../img/img_info_grafik_1.webp"
import img_info_grafik_2 from "../img/img_info_grafik_2.webp"
import img_info_grafik_3 from "../img/img_info_grafik_3.webp"
import { Link } from "react-router-dom";

function PolitikLeft () {
    return (
        <div className="wadah_politik_left margin_bottom_footer">
            <div className="margin_kanankiri">
                <div className="wadah_content_politik_left">
                    <div className="wadah_content_politik_left_2">
                        <Row>
                            <Col xl={8} lg={8} md={12} sm={12}>
                                <div className="wadah_content_left_politik_all margin_right_politik_left">
                                    <div className="wadah_content_editor margin_bottom_editor">
                                        <h4 className="judul_content_editor">Politik</h4>
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
                                    <div className="wadah_content_editor margin_bottom_editor margin_top_left_terkini">
                                        <h4 className="judul_content_editor">Terkini</h4>
                                        <div className="wadah_garis_editor">
                                            <div className="wadah_garis_editor_2"></div>
                                        </div>
                                    </div>
                                    <div className="wadah_content_terkini_politik">
                                        <Row>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link to="/politik/berita" className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_1} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link to="/politik/berita" className="link_content_deskripsi_politik_2">Presiden cermati di era digital semua orang bisa jadi wartawan</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>2 menit lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Presiden Joko Widodo mencermati perkembangan pesat dunia digital telah membawa kemudahan dalam memperoleh informasi, di ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_2} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">Ketua MPR sepakat ultimum remedium perlu diterapkan guna atasi korupsi</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>5 menit lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Ketua MPR RI Bambang Soesatyo alias Bamsoet sepakat bahwa prinsip ultimum remedium sebagai mekanisme pengembalian ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_3} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">KPU Magetan ajak warga gunakan hak pilih dengan kirab maskot pilkada</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>22 menit lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Komisi Pemilihan Umum Kabupaten Magetan, Jawa Timur, mengajak warga setempat untuk menggunakan hak pilih dengan ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_4} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">MPR: Pengamalan Pancasila oleh pemuda penting untuk Indonesia Emas</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>42 menit lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Wakil Ketua MPR RI Hidayat Nur Wahid alias HNW mengatakan pengamalan Pancasila penting untuk dilakukan generasi muda, ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_5} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">Bawaslu ajak mahasiswa UNG awasi bersama pilkada serentak</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>52 menit lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Badan Pengawas Pemilihan Umum (Bawaslu) Provinsi Gorontalo mengajak seluruh mahasiswa Universitas Negeri Gorontalo ....</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_6} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">Bawaslu Sumsel perketat pengawasan Pilkada di wilayah kotak kosong</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>1 jam lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Badan Pengawas Pemilu (Bawaslu) Provinsi Sumatera Selatan memperketat pengawasan pada Pilkada Serentak 2024 di wilayah ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_7} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">Eko Patrio blusukan sosialisasi Zakiyah-Najib di Pilbup Serang</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>2 jam lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Presiden Joko Widodo mencermati perkembangan pesat dunia digital telah membawa kemudahan dalam memperoleh informasi, di ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_8} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">Akademisi: Calon tunggal bukan agenda lokal, tetapi nasional</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>2 jam lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Pengajar hukum pemilu di Universitas Indonesia Titi Anggraini menilai bahwa calon tunggal pada Pilkada 2024 bukan ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_9} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">Akademisi: Calon tunggal di Pilkada 2024 berbeda dengan 2015-2020</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>2 jam lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Pengajar hukum pemilu di Universitas Indonesia Titi Anggraini menilai terdapat perbedaan calon tunggal di Pilkada 2024 ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_10} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">Mantan Dubes RI untuk Turki mendapat dukungan dari NW di Pilkada NTB</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>2 jam lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Pengurus Besar Nahdlatul Wathan (PBNW) menyatakan dukungan kepada mantan duta besar (Dubes) Republik Indonesia untuk ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_11} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">Tim gabungan evakuasi mahasiswa USU meninggal di Gunung Sibayak</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>3 menit lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Kepala Polres Tanah Karo AKBP Eko Yulianto mengatakan tim gabungan melakukan evakuasi mahasiswa Universitas Sumatera ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_12} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">PKS setuju Sahroni jadi ketua tim RK-Suswono karena paham Jakarta</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>4 menit lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Suswono karena memahami pemetaan politik di Jakarta. Menurut dia, ditunjuknya Sahroni menjadi ketua pun menjadi ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={5} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_terkini_politik_2 margin_right_politik_2 margin_bottom_politik_2">
                                                    <div className="wadah_img_terkini_politik">
                                                        <Link className="link_img_terkini_politik">
                                                            <img src={img_politik_terkini_13} className="img_terkini_politik" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={7} lg={6} md={6} sm={12}>
                                                <div className="wadah_content_deskripsi_politik">
                                                    <div className="wadah_content_deskripsi_politik_2">
                                                        <Link className="link_content_deskripsi_politik_2">PKB tegaskan terbuka kepada kelompok mana pun selama 5 tahun ke depan</Link>
                                                    </div>
                                                    <div className="wadah_span_menit_tayang">
                                                        <span>2 menit lalu</span>
                                                    </div>
                                                    <div className="wadah_deskripsi_content_deskripsi_politik_2">
                                                        <p className="deskripsi_content_deskripsi_politik_2">Ketua Umum Dewan Pengurus Pusat Partai Kebangkitan Bangsa (DPP PKB) periode 2024-2029 Muhaimin Iskandar menegaskan ...</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12} sm={12}>
                                <div className="wadah_right_politik_all">
                                <div className="wadah_content_editor margin_bottom_editor">
                                    <h4 className="judul_content_editor">Terpopuler</h4>
                                    <div className="wadah_garis_editor">
                                        <div className="wadah_garis_editor_2"></div>
                                    </div>
                                </div>
                                <div className="wadah_sidebar margin_top_sidebar">
                                <div className="wadah_all_img_and_deskrip margin_bottom_all_img_and_deskrip">
                                    <Row>
                                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                            <div className="wadah_img_populer">
                                                <img src={img_most_popular_1} className="img_popular" />
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                            <div className="wadah_deskrip_popular">
                                                <Link to="#" className="link_deskrip_popular">
                                                    <span>Kecelakaan beruntun libatkan sejumlah kendaraan di Jakarta Utara</span>
                                                </Link>
                                                <div className="wadah_span_popular_2">
                                                    <span>14 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_all_img_and_deskrip margin_bottom_all_img_and_deskrip">
                                    <Row>
                                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                            <div className="wadah_img_populer">
                                                <img src={img_most_popular_2} className="img_popular" />
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                            <div className="wadah_deskrip_popular">
                                                <Link to="#" className="link_deskrip_popular">
                                                    <span>Kemenkumham akan limpahkan kewenangan Rupbasan ke Kejagung</span>
                                                </Link>
                                                <div className="wadah_span_popular_2">
                                                    <span>14 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_all_img_and_deskrip margin_bottom_all_img_and_deskrip">
                                    <Row>
                                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                            <div className="wadah_img_populer">
                                                <img src={img_most_popular_3} className="img_popular" />
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                            <div className="wadah_deskrip_popular">
                                                <Link to="#" className="link_deskrip_popular">
                                                    <span>Ribuan kades Jatim nyatakan satu komando tak berpolitik jelang Pilkada</span>
                                                </Link>
                                                <div className="wadah_span_popular_2">
                                                    <span>16 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_all_img_and_deskrip margin_bottom_all_img_and_deskrip">
                                    <Row>
                                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                            <div className="wadah_img_populer">
                                                <img src={img_most_popular_4} className="img_popular" />
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                            <div className="wadah_deskrip_popular">
                                                <Link to="#" className="link_deskrip_popular">
                                                    <span>Partai Perubahan besutan Anies Baswedan buka pendaftaran, benarkah?</span>
                                                </Link>
                                                <div className="wadah_span_popular_2">
                                                    <span>23 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_all_img_and_deskrip margin_bottom_all_img_and_deskrip">
                                    <Row>
                                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                            <div className="wadah_img_populer">
                                                <img src={img_most_popular_5} className="img_popular" />
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                            <div className="wadah_deskrip_popular">
                                                <Link to="#" className="link_deskrip_popular">
                                                    <span>Jadwal lengkap Arab Saudi vs Indonesia di Kualifikasi Piala Dunia 2026</span>
                                                </Link>
                                                <div className="wadah_span_popular_2">
                                                    <span>14 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="wadah_content_editor margin_bottom_editor">
                                    <h4 className="judul_content_editor">Terkini</h4>
                                    <div className="wadah_garis_editor">
                                        <div className="wadah_garis_editor_2"></div>
                                    </div>
                                </div>
                                <div className="wadah_all_img_and_deskrip margin_bottom_all_img_and_deskrip">
                                    <Row>
                                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                            <div className="wadah_img_populer">
                                                <img src={content_terkini_1} className="img_popular" />
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                            <div className="wadah_deskrip_popular">
                                                <Link to="#" className="link_deskrip_popular">
                                                    <span>Kecelakaan beruntun libatkan sejumlah kendaraan di Jakarta Utara</span>
                                                </Link>
                                                <div className="wadah_span_popular_2">
                                                    <span>14 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_all_img_and_deskrip margin_bottom_all_img_and_deskrip">
                                    <Row>
                                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                            <div className="wadah_img_populer">
                                                <img src={content_terkini_2} className="img_popular" />
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                            <div className="wadah_deskrip_popular">
                                                <Link to="#" className="link_deskrip_popular">
                                                    <span>Kemenkumham akan limpahkan kewenangan Rupbasan ke Kejagung</span>
                                                </Link>
                                                <div className="wadah_span_popular_2">
                                                    <span>14 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_all_img_and_deskrip margin_bottom_all_img_and_deskrip">
                                    <Row>
                                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                            <div className="wadah_img_populer">
                                                <img src={content_terkini_3} className="img_popular" />
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                            <div className="wadah_deskrip_popular">
                                                <Link to="#" className="link_deskrip_popular">
                                                    <span>Ribuan kades Jatim nyatakan satu komando tak berpolitik jelang Pilkada</span>
                                                </Link>
                                                <div className="wadah_span_popular_2">
                                                    <span>16 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_all_img_and_deskrip margin_bottom_all_img_and_deskrip">
                                    <Row>
                                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                            <div className="wadah_img_populer">
                                                <img src={content_terkini_4} className="img_popular" />
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                            <div className="wadah_deskrip_popular">
                                                <Link to="#" className="link_deskrip_popular">
                                                    <span>Partai Perubahan besutan Anies Baswedan buka pendaftaran, benarkah?</span>
                                                </Link>
                                                <div className="wadah_span_popular_2">
                                                    <span>23 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_all_img_and_deskrip margin_bottom_all_img_and_deskrip">
                                    <Row>
                                        <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                                            <div className="wadah_img_populer">
                                                <img src={content_terkini_5} className="img_popular" />
                                            </div>
                                        </Col>
                                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                            <div className="wadah_deskrip_popular">
                                                <Link to="#" className="link_deskrip_popular">
                                                    <span>Jadwal lengkap Arab Saudi vs Indonesia di Kualifikasi Piala Dunia 2026</span>
                                                </Link>
                                                <div className="wadah_span_popular_2">
                                                    <span>14 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_content_editor margin_bottom_editor">
                                    <h4 className="judul_content_editor">Top News</h4>
                                    <div className="wadah_garis_editor">
                                        <div className="wadah_garis_editor_2"></div>
                                    </div>
                                </div>
                                <div className="wadah_content_politik_2">
                                    <Row>
                                        <Col xl={12} lg={12} md={12} sm={12}>
                                            <div className="wadah_img_deskrip_politik">
                                                <div className="wadah_img_politik">
                                                    <img src={img_politik} className="img_politik" />
                                                </div>
                                                <div className="wadah_deskrip_politik">
                                                    <Link className="link_deskrip_politik">Politik kemarin, calon tunggal pilkada hingga putusan gabung BRICS</Link>
                                                </div>
                                                <div className="wadah_span_waktu">
                                                    <span>1 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_content_editor margin_bottom_editor margin_top_politik_left">
                                    <h4 className="judul_content_editor">Top Editor</h4>
                                    <div className="wadah_garis_editor">
                                        <div className="wadah_garis_editor_2"></div>
                                    </div>
                                </div>
                                <div className="wadah_content_politik_2">
                                    <Row>
                                        <Col xl={12} lg={12} md={12} sm={12}>
                                            <div className="wadah_img_deskrip_politik">
                                                <div className="wadah_img_politik">
                                                    <img src={img_politik_2} className="img_politik" />
                                                </div>
                                                <div className="wadah_deskrip_politik">
                                                    <Link className="link_deskrip_politik">KPU catat 41 daerah dengan calon tunggal pada Pilkada 2024 dengan hasil yang valid</Link>
                                                </div>
                                                <div className="wadah_span_waktu">
                                                    <span>12 jam lalu</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
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
                                <div className="margin_top_politik_left">
                                    <div className="wadah_content_editor margin_bottom_editor">
                                        <h4 className="judul_content_editor">Infografik</h4>
                                        <div className="wadah_garis_editor">
                                            <div className="wadah_garis_editor_2"></div>
                                        </div>
                                    </div>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img src={img_info_grafik_1} className="img_crousel_content_left" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={img_info_grafik_2} className="img_crousel_content_left" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={img_info_grafik_3} className="img_crousel_content_left" />
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

export default PolitikLeft;