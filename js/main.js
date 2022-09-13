require("dotenv").config();
const getElement = (attribute) => document.querySelector(`[data-details = ${attribute}]`);
const Github = {
    username: "Onyelaudochukwuka",
    branch: "main",
    async getWorkflows() {
        let response = await fetch(
            `https://api.github.com/users/${this.username}?recursive=true`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/vnd.github.v3+json",
                    Authorization: "Bearer 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" 
                
                }
            }
        );
        return await response.json();
        
    },
    async getReadMe() {
        let response = await fetch(
            `https://raw.githubusercontent.com/${this.username}/${this.username}/${this.branch}/README.md`)

            ;
        return response.text();
    }
}
window.onload = async () => {
    const data = await Github.getWorkflows();
    const readme = await Github.getReadMe();
    if (!!data) {
        setTimeout(() => {
            getElement("loader").style.transform = "translateX(-100%)";
        }, 5000)
    }
    getElement("heading").innerHTML = data.name;
    getElement("subheading").innerHTML = data.bio;
    getElement("avatar").src = data.avatar_url;
}
