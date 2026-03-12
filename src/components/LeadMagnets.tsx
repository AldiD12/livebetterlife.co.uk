import React, { useState } from 'react';
import { Download, Calculator, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const LeadMagnets = () => {
    const [activeForm, setActiveForm] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: ''
    });
    const [status, setStatus] = useState({ submitting: false, success: false });

    const handleSubmit = async (e: React.FormEvent, magnetType: string) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false });

        try {
            await emailjs.send(
                'service_wvmeenw',
                'template_0rhihr9',
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    phone: formData.phone,
                    project_type: formData.projectType,
                    budget: formData.budget,
                    timeline: formData.timeline,
                    lead_magnet: magnetType,
                    message: `Lead Magnet: ${magnetType}\nProject: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}`
                },
                '_1MdPMQe38O6dCyh1'
            );

            setStatus({ submitting: false, success: true });
            setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', timeline: '' });

            // Auto-close form after success
            setTimeout(() => {
                setActiveForm(null);
                setStatus({ submitting: false, success: false });
            }, 3000);

        } catch (error) {
            setStatus({ submitting: false, success: false });
        }
    };

    const leadMagnets = [
        {
            id: 'investment-guide',
            title: 'London Property Investment ROI Guide',
            description: 'Exclusive analysis of renovation ROI by London postcode. Discover which improvements add the most value to your property investment.',
            value: 'Valued at £500',
            icon: Calculator,
            cta: 'Access Complimentary Guide'
        },
        {
            id: 'consultation',
            title: 'Private Design Consultation',
            description: '30-minute strategic consultation with our design team. Personalized assessment of your project potential and investment returns.',
            value: 'Limited to 10 per month',
            icon: CheckCircle,
            cta: 'Schedule Consultation'
        },
        {
            id: 'portfolio-access',
            title: 'Exclusive Project Portfolio',
            description: 'Private access to our premium project gallery with detailed cost breakdowns, timelines, and client testimonials from £60k-£500k+ projects.',
            value: 'Client access only',
            icon: Download,
            cta: 'Request Access'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-12 h-px bg-gray-300"></div>
                        <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">Exclusive Resources</span>
                        <div className="w-12 h-px bg-gray-300"></div>
                    </div>
                    <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
                        COMPLIMENTARY CONSULTATION RESOURCES
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Complimentary insights and strategic guidance for discerning London homeowners planning premium renovation projects
                    </p>
                    <div className="mt-4 text-sm text-gray-500">
                        Trusted by 200+ London homeowners • £2.5M+ in projects delivered
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {leadMagnets.map((magnet) => {
                        const Icon = magnet.icon;
                        return (
                            <div key={magnet.id} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                <div className="text-center">
                                    <div className="relative mb-6">
                                        <Icon className="w-12 h-12 text-gray-900 mx-auto mb-4" />
                                        <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                                            {magnet.value}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-light tracking-wide text-gray-900 mb-4">
                                        {magnet.title}
                                    </h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                                        {magnet.description}
                                    </p>
                                    <button
                                        onClick={() => setActiveForm(magnet.id)}
                                        className="w-full py-4 px-6 border-2 border-gray-900 text-gray-900 text-sm tracking-[0.15em] uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
                                    >
                                        {magnet.cta}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Form Modal */}
                {activeForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg max-w-md w-full p-8">
                            <h3 className="text-xl font-light tracking-wide text-gray-900 mb-6 text-center">
                                Access Your Exclusive Resource
                            </h3>

                            {status.success ? (
                                <div className="text-center py-8">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <p className="text-green-600 font-medium">Resource sent to your email!</p>
                                </div>
                            ) : (
                                <form onSubmit={(e) => handleSubmit(e, activeForm)} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                                        required
                                    />
                                    <select
                                        value={formData.projectType}
                                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                                        required
                                    >
                                        <option value="">Project Type</option>
                                        <option value="extension">Home Extension</option>
                                        <option value="kitchen">Kitchen Renovation</option>
                                        <option value="bathroom">Bathroom Renovation</option>
                                        <option value="full-renovation">Full Home Renovation</option>
                                        <option value="loft-conversion">Loft Conversion</option>
                                    </select>
                                    <select
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                                        required
                                    >
                                        <option value="">Budget Range</option>
                                        <option value="50k-75k">£50k - £75k</option>
                                        <option value="75k-100k">£75k - £100k</option>
                                        <option value="100k-150k">£100k - £150k</option>
                                        <option value="150k+">£150k+</option>
                                    </select>
                                    <select
                                        value={formData.timeline}
                                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                                        required
                                    >
                                        <option value="">Timeline</option>
                                        <option value="asap">ASAP</option>
                                        <option value="1-3-months">1-3 months</option>
                                        <option value="3-6-months">3-6 months</option>
                                        <option value="6-12-months">6-12 months</option>
                                        <option value="planning">Just planning</option>
                                    </select>

                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setActiveForm(null)}
                                            className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={status.submitting}
                                            className="flex-1 py-3 px-6 bg-gray-900 text-white rounded hover:bg-gray-800 disabled:opacity-50"
                                        >
                                            {status.submitting ? 'Processing...' : 'Access Resource'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LeadMagnets;