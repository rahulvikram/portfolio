export function ColorTechBlock({ icon, name }: { icon: string, name: string }) {
    return (
        <>
            <div className="tech-block flex flex-col gap-1">
                <div className="tech-block-icon flex items-center justify-center">
                            <img
                                src={
                                    icon.toLowerCase() === "aws"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                                        : icon.toLowerCase() === "c#" || icon.toLowerCase() === "csharp"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                                        : icon.toLowerCase() === "sql server"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg"
                                        : icon.toLowerCase() === "ef core"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg"
                                        : icon.toLowerCase() === "devops"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg"
                                        : icon.toLowerCase() === ".net"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
                                        : icon.toLowerCase() === "c++"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                                        : icon.toLowerCase() === "vite"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                                        : icon.toLowerCase() === "visual studio"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg"
                                        : icon.toLowerCase() === "sql"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                                        : icon.toLowerCase() === "google colab"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg"
                                        : icon.toLowerCase() === "next.js"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                                        : icon.toLowerCase() === "vue"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                                        : icon.toLowerCase() === "rest"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
                                        : icon.toLowerCase() === "cypress"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg"
                                        : icon.toLowerCase() === "tailwind"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                        : icon.toLowerCase() === "sklearn"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
                                        : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.toLowerCase()}/${icon.toLowerCase()}-original.svg`

                                }
                                alt={icon}
                                style={{ display: "block", width: "3rem", height: "3rem", objectFit: "contain" }}
                            />
                </div>
                <span className="tech-block-name text-xl font-semibold">{name}</span>
            </div>

        </>
    )
}

