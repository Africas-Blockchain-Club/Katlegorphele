import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
        description: "Experience the future of sneaker shopping with our decentralized platform. Secure and transparent transactions."
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
        description: "Buy and sell sneakers with peace of mind. Enjoy the benefits of blockchain technology."
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
        description: "Your favorite sneakers, now available on a secure and decentralized marketplace."
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands', description: 'A wide selection of brands, all available on our blockchain-powered platform.' },
    { value: '50+', label: 'Resellers', description: 'Join hundreds of shops that trust our secure and transparent marketplace.' },
    { value: '250k+', label: 'Target Deliveries', description: 'Over 250,000 satisfied customers using cryptocurrency for sneaker purchases.' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "0.04",
        description: "Secure your purchase with cryptocurrency. No middlemen, just direct and safe transactions."
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "0.03",
        description: "Enjoy transparent pricing and secure payments with our blockchain platform."
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "0.041",
        description: "Buy with confidence, knowing your transaction is protected by blockchain technology."
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "0.044",
        description: "Experience the ease of using multiple cryptocurrencies for your sneaker purchases."
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping in South Africa",
        subtext: "Enjoy seamless shopping with our complimentary shipping service, integrated with blockchain tracking."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure blockchain payment options, accepting multiple cryptocurrencies."
    },
    {
        imgURL: support,
        label: "24/7 Support",
        subtext: "Our dedicated team is here to assist you with any queries about blockchain transactions, anytime."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: '0xC1245E36.....14BA0bA44',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. The blockchain transaction was smooth and secure!"
    },
    {
        imgURL: customer2,
        customerName: '0xFG4567E36.....14BA0bA44',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer! The use of cryptocurrency made the process so easy."
    }
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
