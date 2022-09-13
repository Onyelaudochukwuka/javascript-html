const getElement = (attribute) =>  document.querySelector(`[data-details = ${attribute}]`);
const Github = {
    username: "Onyelaudochukwuka",
    async getWorkflows() {
        let response = await fetch(
            `https://api.github.com/users/${this.username}?recursive=true`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/vnd.github.v3+json",
                
                }
            }
        );
        return await response.json();
        
    }
}
window.onload = async () => {
    const data = await Github.getWorkflows();
    console.log(data);
    getElement("heading").innerHTML = data.name;
    getElement("subheading").innerHTML = data.bio;
}
