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
                    Accept: "application/vnd.github.v3+json"                
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
console.log("testing")
window.onload = async () => {
    console.log("testing2")

    const data = await Github.getWorkflows();
    const readme = await Github.getReadMe();
    if (!!data && !!readme) {
        setTimeout(() => {
            getElement("loader").style.transform = "translateX(-100%)";
        }, 5000)
    }
    console.log(marked.parse(readme))
    getElement("avatar").src = data.avatar_url;
    getElement("about").innerHTML = marked.parse(readme);
}
