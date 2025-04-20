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

let contentS = "";
for (let item of arrService) {
    contentS += `
        <div class="service_content_item">
            <img src="${item.image}" alt="" />
            <h3>${item.title}</h3>
            <p>${item.content}</p>
        </div>
    `
};

document.querySelector(".service_content").innerHTML = contentS;

// Sự kiện cho Features
const arrFeatures = [
    {
        icon: <i class="flaticon-idea"></i>,
        title: "Idea & amp; Analysis Gathering",
        content: "Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue.",
    },
    {
        icon: <i class="flaticon-coding"></i>,
        title: "Design &amp; Developing",
        content: "Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue.",
    },
    {
        icon: <i class="flaticon-rocket"></i>,
        title: "Testing &amp; Lunching",
        content: "Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue.",
    },
];

let contentF = "";
for (let item of arrFeatures) {
    contentF += `
        <div class="features__bg">
            ${item.icon}
            <div>
                <h3>${item.title}</h3>
                <p>${item.content}</p>
            </div>
        </div>
    `
};

document.querySelector(".features_content_left_group").innerHTML = contentF;