import {Mail} from 'lucide-react';

function Contact() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
                    <p className="text-gray-300 mb-8">
                        I'm always interested in hearing about new projects and opportunities.
                    </p>
                    <a
                        href="mailto:contact@example.com"
                        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
                    >
                        Get in Touch
                        <Mail className="w-5 h-5"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;