import { Col, Row } from "react-bootstrap";
import DeviceEmulator from "react-device-emulator";
import 'react-device-emulator/lib/styles/style.css';

function ComponentLaporan () {
    return (
        <div className="wadah_component_laporan">
            <div className="margin_kanankiri">
                <div className="wadah_content_laporan_all">
                    <Row>
                        <Col xl={12}>
                            <div className="wadah_Content_emulator">
                                <DeviceEmulator type="mobile" withoutChrome url="www.worksfair.com" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ComponentLaporan;