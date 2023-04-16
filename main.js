const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
            description: "This describes the goddamned socks",
            image: "./assets/images/socks_green.jpg",
            url: "https://imgur.com/gallery/6fksvmE",
            inStock: false,
            onSale: true,
            inventory: 0,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                { id: 2234, color: "green" },
                { id: 2235, color: "blue" },
            ],
            sizes: ["XS", "S", "M", "L", "XL"],
        };
    },
});
