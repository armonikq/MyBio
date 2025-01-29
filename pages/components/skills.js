import {  Code2, Palette, Globe, Cpu } from 'lucide-react';
function SkillCard({ icon, title, description }) {
    return (
        <div className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors">
            <div className="text-blue-400 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}
function skills(){

    return(
        <section className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillCard
                        icon={<Code2 className="w-8 h-8" />}
                        title="Frontend Development"
                        description="Expert in React, TypeScript, and modern JavaScript"
                    />
                    <SkillCard
                        icon={<Palette className="w-8 h-8" />}
                        title="UI/UX Design"
                        description="Creating beautiful and intuitive user interfaces"
                    />
                    <SkillCard
                        icon={<Globe className="w-8 h-8" />}
                        title="Responsive Design"
                        description="Mobile-first and responsive web applications"
                    />
                    <SkillCard
                        icon={<Cpu className="w-8 h-8" />}
                        title="Performance"
                        description="Optimizing for speed and efficiency"
                    />
                </div>
            </div>
        </section>
    )
}




export default  skills;