
function LanguageCard({ icon, name, level, percentage }) {
    return (
        <div className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-3 mb-4">
                <img src={icon} alt={name} className="w-8 h-8" />
                <h3 className="text-lg font-semibold">{name}</h3>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{level}</span>
                    <span className="text-blue-400">{percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                        className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        </div>
    );
}

function Languages(){

    return (
        <section className="py-24 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Languages & Technologies</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <LanguageCard
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        name="JavaScript"
                        level="Expert"
                        percentage={80}
                    />
                    <LanguageCard
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        name="TypeScript"
                        level="Advanced"
                        percentage={70}
                    />
                    <LanguageCard
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        name="HTML5"
                        level="Expert"
                        percentage={95}
                    />
                    <LanguageCard
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        name="CSS3"
                        level="Expert"
                        percentage={95}
                    />
                    <LanguageCard
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        name="React"
                        level="Expert"
                        percentage={90}
                    />
                    <LanguageCard
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        name="Node.js"
                        level="Advanced"
                        percentage={50}
                    />
                    <LanguageCard
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                        name="Next.js"
                        level="Intermediate"
                        percentage={75}
                    />
                    <LanguageCard
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                        name="SQL"
                        level="Advanced"
                        percentage={69}
                    />
                    <LanguageCard
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                        name="Figma"
                        level="Advanced"
                        percentage={69}
                    />
                </div>
            </div>
        </section>

    )
}

export default Languages;