// Sự kiện cho Services
const arrService = [
    {
        image: "./img/pic1_3.jpg",
        title: "Web Development",
        content: "Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis.",
    },
    {
        image: "./img/pic2_2.jpg",
        title: "Strategy & Research",
        content: "Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis.",
    },
    {
        image: "./img/pic3_2.jpg",
        title: "Growth Tracking",
        content: "Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus magna, rhoncus quis magna quis.",
    },
];

let content = "";
for (let item of arrService) {
    content += `
        <div class="service_content_item">
            <img src="${item.image}" alt="" />
            <h3>${item.title}</h3>
            <p>${item.content}</p>
        </div>
    `
};

document.querySelector(".service_content").innerHTML = content;

// Sự kiện cho Features
