const { Row, Col } = require("react-bootstrap");

function PolitikRight () {
    return (
        <div className="wadah_politik_right">
            <div className="margin_kanankiri">
                <div className="wadah_content_politik_right">
                    <Row>
                        <Col xl={4} lg={4} md={6} sm={12}>
                        <div className="wadah_content_editor">
                            <h4 className="judul_content_editor">Pilihan Editor</h4>
                            <div className="wadah_garis_editor">
                                <div className="wadah_garis_editor_2"></div>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default PolitikRight;