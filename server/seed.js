const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const categories = {
    "Clothing": [
        "Dresses", "Tops & Blouses", "T-Shirts", "Knitwear / Sweaters", "Jackets",
        "Coats", "Skirts", "Pants / Trousers", "Shorts", "Suits / Tailoring",
        "Jumpsuits", "Outerwear"
    ],
    "Shoes": [
        "Sneakers", "Sandals", "Heels / Pumps", "Boots", "Ankle Boots",
        "Loafers", "Ballet Flats", "Espadrilles", "Mules", "Slides"
    ],
    "Watches": [
        "Quartz Watches", "Automatic Watches", "Luxury / Haute Horlogerie",
        "Steel Watches", "Gold Watches", "Leather-strap Watches",
        "Bracelet Watches", "Limited Editions"
    ],
    "Jewelry": [
        "Fine Jewelry", "High Jewelry", "Necklaces", "Bracelets", "Rings",
        "Earrings", "Brooches", "Charms", "Cufflinks"
    ],
    "Eyewear": [
        "Sunglasses", "Optical Glasses", "Oversized Frames", "Square Frames",
        "Round Frames", "Cat-Eye", "Aviators"
    ],
    "Bags": [
        "Shoulder Bags", "Top-Handle Bags", "Crossbody Bags", "Tote Bags",
        "Mini Bags", "Clutches", "Backpacks", "Belt Bags", "Evening Bags",
        "Wallets & Small Leather Goods"
    ]
};

const categoryImages = {
    "Clothing": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=500&q=60",
    "Shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60",
    "Watches": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=60",
    "Jewelry": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=60",
    "Eyewear": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=60",
    "Bags": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=60"
};

const generateProducts = () => {
    const products = [];

    for (const [category, subcategories] of Object.entries(categories)) {
        subcategories.forEach(sub => {
            // Generate 3 items per subcategory
            for (let i = 1; i <= 3; i++) {
                products.push({
                    title: `${sub} - Style ${i}`,
                    price: Math.floor(Math.random() * 500) + 50, // Random price 50-550
                    description: `High-quality ${sub} from our exclusive ${category} collection.`,
                    category: category,
                    subcategory: sub,
                    image: categoryImages[category],
                    rating: {
                        rate: (Math.random() * 2 + 3).toFixed(1), // Random rating 3.0-5.0
                        count: Math.floor(Math.random() * 100)
                    }
                });
            }
        });
    }
    return products;
};

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        await Product.deleteMany({}); // Clear existing data
        console.log('Cleared old data');

        const products = generateProducts();
        await Product.insertMany(products);

        console.log(`Successfully seeded ${products.length} products!`);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();