import { Col, Row } from "react-bootstrap";
import img_ekonomi_1 from "../img/img_ekonomi_1.webp"
import img_ekonomi_2 from "../img/img_ekonomi_2.webp"
import img_ekonomi_3 from "../img/img_ekonomi_3.webp"
import img_ekonomi_4 from "../img/img_ekonomi_4.webp"
import img_mata_1 from "../img/img_mata_1.webp"
import img_mata_2 from "../img/img_mata_2.webp"
import img_mata_3 from "../img/img_mata_3.webp"
import img_mata_4 from "../img/img_mata_4.webp"
import img_content_antara from "../img/img_content_antara.webp"
import img_content_antara_2 from "../img/img_content_antara_2.webp"
import img_content_antara_3 from "../img/img_content_antara_3.webp"
import img_content_antara_4 from "../img/img_content_antara_4.webp"
import img_background_antara from "../img/img_background_antara.png"
import img_metro_1 from "../img/img_metro_1.webp"
import img_metro_2 from "../img/img_metro_2.webp"
import img_metro_3 from "../img/img_metro_3.webp"
import img_metro_4 from "../img/img_metro_4.webp"
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { InstagramEmbed } from 'react-social-media-embed';
import { FacebookEmbed } from 'react-social-media-embed';
import poster_hari_anak from "../img/poster_hari_anak.jpeg"
import { XEmbed } from 'react-social-media-embed';
import { YouTubeEmbed } from 'react-social-media-embed';


function Ekonomi () {
    return (
        <div className="wadah_ekonomi">
            <div className="margin_kanankiri">
                <div className="wadah_content_ekonomi">
                    <Row>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <div className="wadah_content_editor margin_bottom_content_instagram margin_top_content_ekonomi">
                                <h4 className="judul_content_editor">Instagram</h4>
                                <div className="wadah_garis_editor margin_bottom_ekonomi">
                                    <div className="wadah_garis_editor_2"></div>
                                </div>
                                <div className="wadah_content_politik_2">
                                <Row>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_img_deskrip_politik">
                                            <div className="wadah_post_instagram">
                                                <InstagramEmbed url="https://www.instagram.com/p/C_Zaw1oyf54/?img_index=1" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_left_img_deskrip_politik margin_top_content_embed_instagram_767">
                                            <div className="wadah_post_instagram">
                                                <InstagramEmbed url="https://www.instagram.com/p/C_KYbEHyWue/" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_img_deskrip_politik margin_top_content_embed_instagram">
                                            <div className="wadah_post_instagram">
                                                <InstagramEmbed url="https://www.instagram.com/p/C_nKb3IyZ6v/?img_index=1" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_left_img_deskrip_politik margin_top_content_embed_instagram">
                                            <div className="wadah_post_instagram">
                                                <InstagramEmbed url="https://www.instagram.com/p/C-4CqAVv5UX/?img_index=1" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            </div>
                            <div className="wadah_content_editor margin_bottom_editor">
                                <h4 className="judul_content_editor">Facebook</h4>
                                <div className="wadah_garis_editor margin_bottom_ekonomi">
                                    <div className="wadah_garis_editor_2"></div>
                                </div>
                                <div className="wadah_content_politik_2">
                                <Row>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_facebook margin_bottom_facebook">
                                            <div className="wadah_post_instagram">
                                                <FacebookEmbed url="https://www.facebook.com/photo?fbid=847282344201924&set=pcb.847282390868586" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_left_facebook margin_bottom_facebook">
                                            <div className="wadah_post_instagram">
                                                <FacebookEmbed url="https://www.facebook.com/photo?fbid=847282340868591&set=pcb.847282390868586" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_facebook margin_bottom_facebook_767">
                                            <div className="wadah_post_instagram">
                                                <FacebookEmbed url="https://www.facebook.com/photo?fbid=847282340868591&set=pcb.847282390868586" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_left_facebook">
                                            <div className="wadah_post_instagram">
                                                <FacebookEmbed url="https://www.facebook.com/photo?fbid=847282340868591&set=pcb.847282390868586" width="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            </div>  
                        </Col>
                        <Col xl={4} lg={4} md={12} sm={12}>
                            <div className="wadah_content_mata_indonesia margin_top_wadah_content_mata_indonesia">
                                <div className="wadah_poster_anak">
                                    <img src={poster_hari_anak} className="img_poster_anak" />
                                </div>

                                <div className="wadah_content_twiter">
                                    <Row>
                                        <Col xl={12}>
                                            <div className="wadah_content_twiter_2">
                                                <h4 className="judul_content_editor">Twitter</h4>
                                                <div className="wadah_garis_editor margin_bottom_ekonomi">
                                                    <div className="wadah_garis_editor_2"></div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xl={12} lg={12} md={6} sm={6}>
                                            <div className="wadah_content_twiter_3 margin_bottom_twitter_1 margin_right_1">
                                                <XEmbed url="https://twitter.com/PixelAndBracket/status/1356633038717923333" className="content_twitter_x" />
                                            </div>
                                        </Col>
                                        <Col xl={12} lg={12} md={6} sm={6}>
                                            <div className="wadah_content_twiter_3 margin_bottom_twitter_2 margin_left_2">
                                                <XEmbed url="https://twitter.com/PixelAndBracket/status/1356633038717923333" className="content_twitter_x" />
                                            </div>
                                        </Col>

                                        <Col xl={12} lg={12} md={6} sm={6}>
                                            <div className="wadah_content_twiter_3 margin_bottom_twitter_3 margin_right_3">
                                                <XEmbed url="https://twitter.com/PixelAndBracket/status/1356633038717923333" className="content_twitter_x" />
                                            </div>
                                        </Col>

                                        <Col xl={12} lg={12} md={6} sm={6}>
                                            <div className="wadah_content_twiter_3 margin_bottom_twitter_4 margin_left_4">
                                                <XEmbed url="https://twitter.com/PixelAndBracket/status/1356633038717923333" className="content_twitter_x" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="wadah_video_metro margin_bottom_yt_akhir">
                                    <ReactPlayer url="https://www.youtube.com/watch?v=9hjMIOIysng&list=RD9hjMIOIysng&start_radio=1" width="100%" />
                                </div>
                            </div>
                        </Col>  
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Ekonomi;