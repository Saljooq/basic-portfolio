import { Row } from 'antd';
import React from 'react';
import { Card } from 'antd';
import './Resume.css'
import { Experiences } from './ResumeObject';

const Resume: React.FC = () => (
    <div style={{marginBottom: '5%'}}>
        <Row>
            <Card title="Experience" style={{ width: '100%', marginTop: '1%', marginBottom: '1%' }}>
                {Experiences.map(e =>
                    <Card
                        type='inner'
                        style={{ width: '100%', marginTop: '1%', marginBottom: '1%' }}
                        hoverable
                        title={<><b>{e.companyName}</b>, {e.location} - <i>{e.position}</i></>}
                        > 
                        <ul>
                            {e.experiences.map(notes =>
                                <li>
                                    {notes}
                                </li> 
                                )}
                        </ul>
                    </Card> 
                )}
            </Card>
        </Row>
    </div>
);

export default Resume;