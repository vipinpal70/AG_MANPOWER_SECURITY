import React from 'react';
import Header from '../components/Header';

const SircEmergencyServices: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="w-100" style={{ maxWidth: '700px' }}>
                    <h1 className="mb-4 display-5 fw-bold text-primary text-center">SIRC & Emergency Services</h1>

                    <section className="mb-5">
                        <div className="card shadow-sm border-primary">
                            <div className="card-body">
                                <h2 className="card-title h4 text-secondary text-center">AG SECURITY SERVICE</h2>
                                <h6 className="card-subtitle mb-3 text-muted text-center">(Security & Facility Management Services)</h6>
                                <p className="mb-1 text-center"><strong>Head Office:</strong> Rz-44/271, Hans Park, West Sagarpur, New Delhi-110046</p>
                                <p className="mb-1 text-center"><strong>Phone:</strong> 7678400486, 9871489437</p>
                                <p className="mb-0 text-center"><strong>Email:</strong> <a href="mailto:aggroupsanjeev@gmail.com">aggroupsanjeev@gmail.com</a></p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center">
                        <p className="lead">Specific details about our SIRC & Emergency Services are currently being updated and will be available soon.</p>
                        <p>📞 Please contact us for immediate inquiries regarding these services.</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default SircEmergencyServices;
