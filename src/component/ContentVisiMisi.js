import { Col, Row } from "react-bootstrap";
import foto_kepala_biro from "../img/foto_kepala_biro.jpg"

function ContentVisiMisi () {
    return (
        <div className="wadah_contentVisiMisi">
            <div className="margin_kanankiri">
                <div className="wadah_content_visi_misi_1 margin_bottom_wadah_content_visi_misi_1">
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={12}>
                            <div className="wadah_content_visi_misi_2 border_bottom_visi">
                                <img src={foto_kepala_biro} className="content_img_visi_misi" />
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={12}>
                            <div className="wadah_content_visi_misi_3 padding_15px_visimisi border_left_visimisi">
                                <div className="wadah_visi border_bottom_visimisi padding_top_visimisi_1">
                                    <span className="span_judul_visi">Pengertian Visi & Misi</span>
                                    <p className="deskripsi_visi">Visi dan Misi merupakan grand target yang ditetapkan oleh Kepala Daerah dan Wakil Kepala Daerah pada Perubahan Rencana Pembangunan Jangka Menengah Daerah (RPJMD) Provinsi Jawa Timur tahun 2019-2024 yang kemudian diterjemahkan kedalam Perubahan Rencana Strategis (Renstra) Perangkat Daerah Biro Administrasi Pimpinan tahun 2019-2024, Adapun keterkaitan Visi, Misi, Tujuan dan Sasaran Biro Administrasi Pimpinan sebagai berikut :</p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">Visi</span>
                                    <p className="deskripsi_visi">Terwujudnya masyarakat Jawa Timur yang sejahtera, seimbang, unggul dan berakhlak dengan tata kelola pemerintahan partisipatoris, inklusif dan menghargai nilai-nilai manusia.'</p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">Misi</span>
                                    <p className="deskripsi_visi">Tata Kelola Pemerintahan yang Bersih, Inovatif, Terbuka, Partisipatoris Memperkuat Demokrasi Kewargaan untuk Menghadirkan Ruang Sosial yang menghargai prinsip Kebhinekaan.</p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">Tujuan</span>
                                    <p className="deskripsi_visi">Meningkatkan Pelayanan Keprotokolan, Komunikasi Pimpinan, Perencanaan Setda dan Kepegawaian Setda.</p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">Sasaran</span>
                                    <p className="deskripsi_visi">Meningkatnya kualitas layanan keprotokolan, ketersediaan dan penyebarluasan informasi, serta perencanaan, pelaporan dana dministrasi kepegawaian setda.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ContentVisiMisi;