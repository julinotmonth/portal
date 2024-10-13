import { Col, Row } from "react-bootstrap";
import foto_kepala_biro from "../img/foto_kepala_biro.jpg"
import profil_kepala_biro_2 from "../img/kepala_biro_2.jpg"

function ComponentTugas () {
    return (
        <div className="wadah_contentVisiMisi">
            <div className="margin_kanankiri">
                <div className="wadah_content_visi_misi_1 margin_bottom_wadah_content_visi_misi_1">
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={12}>
                            <div className="wadah_content_visi_misi_2 border_bottom_visi">
                                <img src={profil_kepala_biro_2} className="content_img_visi_misi" />
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={12}>
                            <div className="wadah_content_visi_misi_3 padding_15px_visimisi border_left_visimisi">
                                <div className="wadah_visi border_bottom_visimisi padding_top_visimisi_1">
                                    <span className="span_judul_visi">TUGAS DAN FUNGSI</span>
                                    <p className="deskripsi_visi">Berdasarkan Peraturan Gubernur Jawa Timur Nomor 108 Tahun
                                    2021 tentang Kedudukan, Susunan Organisasi, Uraian Tugas Dan
                                    Fungsi Serta Tata Kerja Sekretariat Daerah Provinsi Jawa Timur, Biro
                                    Administrasi Pimpinan memiliki tugas membantu Asisten Administrasi
                                    Umum dalam: </p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">BAGIAN PERENCANAAN</span>
                                    <p className="deskripsi_visi">TUGAS : Melaksanakan penyiapan bahan pelaksanaan
                                    kebijakan, dan melaksanaka pemantauan dan evaluasi di
                                    bidang perencanaan, pelaporan, kepegawaian, dan tata
                                    usaha.</p>
                                    <p className="deskripsi_visi">FUNGSI : pelaksanaan penyusunan dokumen perencanaan
                                    Sekretariat Daerah, pelaksanaan perumusan kebijakan perencanaan,
                                    pelaporan dan kepegawaian Sekretariat Daerah, penyusunan program dan petunjuk teknis penyusunan
                                    dokumen perencanaan program, kegiatan, anggaran
                                    dan pelaporan serta administrasi kepegawaian
                                    Sekretariat Daerah;</p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">BAGIAN MATERI DAN KOMUNIKASI</span>
                                    <p className="deskripsi_visi">TUGAS : melaksanakan penyiapan bahan pelaksanaan
                                    kebijakan, dan melaksanaan pemantauan dan evaluasi di
                                    bidang penyiapan materi pimpinan, komunikasi pimpinan,
                                    publikasi, dan dokumentasi pimpinan.</p>
                                    <p className="deskripsi_visi">FUNGSI : pelaksanaan penyusunan petunjuk teknis tentang
                                    penyiapan materi pimpinan, komunikasi pimpinan,
                                    publikasi dan dokumentasi pimpinan, pelaksanaan koordinasi penyiapan materi pimpinan,
                                    komunikasi pimpinan, publikasi dan dokumentasi
                                    pimpinan, pelaksanaan penyelenggaraan hubungan kerja sama
                                    dengan media massa</p>
                                </div>

                                <div className="wadah_visi border_bottom_visimisi margin_top_visimisi">
                                    <span className="span_judul_visi">BAGIAN PROTOKOL</span>
                                    <p className="deskripsi_visi">TUGAS : melaksanakan penyiapan bahan pelaksanaan
                                    kebijakan, dan melaksanaan pemantauan dan evaluasi di
                                    bidang acara, tamu, dan hubungan keprotokolan.</p>
                                    <p className="deskripsi_visi">FUNGSI : pelaksanaan koordinasi dan kerja sama dengan instansi
                                    lain di bidang acara, pelayanan tamu, dan hubungan
                                    keprotokolan di setiap acara resmi dan acara
                                    kenegaraan, pelaksanaan koordinasi dan pengaturan serta
                                pelayanan acara penerimaan kunjungan tamu
                                Pemerintah, Pejabat Negara dan Presiden/Wakil
                                Presiden Republik Indonesia serta tamu negara/VVIP
                                lainnya, pelaksanaan penyiapan, pengaturan, penataan dan
                                kelancaran kegiatan di lingkungan Pemerintah Provinsi
                                </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ComponentTugas;