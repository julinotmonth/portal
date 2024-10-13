import { Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { YouTubeEmbed } from 'react-social-media-embed';

function KumpulanVideo () {
    return (
        <div className="wadah_kumpulan_video margin_bottom_kumpulan_video">
            <div className="margin_kanankiri">
                <div className="wadah_content_video_all">
                    <div className="wadah_cobtent_video_1">
                        <div className="wadah_content_editor margin_bottom_editor">
                            <h4 className="judul_content_editor">Video</h4>
                            <div className="wadah_garis_editor">
                                <div className="wadah_garis_editor_2"></div>
                            </div>
                        </div>
                        <Row>
                            <Col xl={4} lg={4} md={6}>
                                <div className="wadah_video_yt_column margin_bottom_video_column">
                                    <YouTubeEmbed url="https://www.youtube.com/watch?v=gVfqf-igPgY" width="100%"  />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={6}>
                                <div className="wadah_video_yt_column margin_bottom_video_column_2">
                                    <YouTubeEmbed url="https://www.youtube.com/watch?v=bDY9U1XbFdA" width="100%"  />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={6}>
                                <div className="wadah_video_yt_column margin_bottom_video_column_3">
                                    <YouTubeEmbed url="https://www.youtube.com/watch?v=jUQiAp5IaVA" width="100%"  />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={6}>
                                <div className="wadah_video_yt_column margin_bottom_video_column_4">
                                    <YouTubeEmbed url="https://www.youtube.com/watch?v=XcWoWoyBrn4" width="100%"  />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={6}>
                                <div className="wadah_video_yt_column margin_bottom_video_column_5">
                                    <YouTubeEmbed url="https://www.youtube.com/watch?v=fQ9n3TANOLc" width="100%"  />
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={6}>
                                <div className="wadah_video_yt_column margin_bottom_video_column_6">
                                    <YouTubeEmbed url="https://www.youtube.com/watch?v=x-oIdVjeJIU" width="100%"  />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KumpulanVideo;