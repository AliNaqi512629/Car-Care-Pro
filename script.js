// product-detail.js

// Function to get query parameters from the URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Product data (You can replace this with actual data fetched from a database or API)
const products = [
    {
        id: 1,
        name: "Car Shampoo",
        price: "Rs 379",
        description: "Achieve a showroom-quality clean with Unicorn Car Shampoo, the ultimate solution for deep cleaning and restoring your vehicle's shine. Designed for car enthusiasts and professionals alike, this high-performance shampoo delivers a spotless finish while being incredibly easy to apply.\n\
        Unicorn Car Shampoo is formulated with advanced technology to gently yet effectively remove dirt, grime, and road film from your car's exterior. Its rich lather ensures a thorough clean, leaving your vehicle with a sparkling, streak-free finish. The formula is pH-balanced, making it safe for all types of paintwork, including clear coats, and it won't strip away protective wax layers.\n\
        Unicorn Car Shampoo is perfect for achieving a deep clean and maintaining your car's appearance. Whether you're detailing your daily driver or preparing for a special occasion, this shampoo ensures a spotless, brilliant finish every time. With its deep clean and professional finish, you can trust Unicorn to deliver the ultimate car care solution. Experience the difference today and make Unicorn Car Shampoo your go-to for automotive care.",
        image: "Images/product1WWP.jpg"
    },
    {
        id: 2,
        name: "Tire Cleaner",
        price: "Rs 499",
        description: "Revitalize your vehicle's appearance with Unicorn Tire Cleaner, the ultimate solution for restoring your tires to their original shine and protecting them from the elements. Over time, tires can become dull, dirty, and faded due to UV exposure, road grime, and environmental contaminants. Unicorn Tire Cleaner is specifically designed to bring back that showroom-quality finish while providing long-lasting protection.\n\
        This powerful formula effectively removes dirt, grease, and road grime, leaving your tires with a deep, glossy finish. The advanced cleaning process not only enhances the visual appeal of your tires but also provides a protective layer to shield them from UV rays and environmental damage. With Unicorn Tire Cleaner, you can enjoy tires that look as good as new and stay protected for longer.\n\
        Unicorn Tire Cleaner is ideal for all types of vehicles, ensuring that your tires are always in top condition. With its shiny, like-new finish and UV protection, you can trust Unicorn to deliver the ultimate solution for tire care. Experience the difference today and make Unicorn Tire Cleaner your go-to for automotive care.",
        image: "Images/product2TG.jpg"
    },
    {
        id: 3,
        name: "Interior Cleaner",
        price: "Rs 489",
        description: "Transform your vehicle's interior with Unicorn Interior Cleaner, the ultimate solution for maintaining a pristine and fresh cabin. Designed to tackle dirt, stains, and odors, this high-performance cleaner ensures your car's interior stays looking and smelling its best, no matter how busy your lifestyle gets.\n\
        Unicorn Interior Cleaner is formulated with a powerful blend of ingredients that effectively remove grime, spills, and stubborn stains from upholstery, carpets, and surfaces. Its gentle yet effective formula is safe for use on a variety of materials, including leather, fabric, vinyl, and plastics, ensuring that your car's interior remains in top condition.\n\
        Unicorn Interior Cleaner is perfect for car owners who value a spotless and fresh environment. With its pristine and fresh promise, you can trust Unicorn to deliver the ultimate interior cleaning solution. Experience the difference today and make Unicorn Interior Cleaner your go-to for automotive care.",
        image: "Images/product3CIC.jpg"
    },
    {
        id: 4,
        name: "Wind sheild washer",
        price: "Rs 219",
        description: "Experience the ultimate in automotive care with Unicorn Windshield Washer, the all-in-one solution for keeping your vehicle sparkling clean and protected. Engineered with 3M Wash-Wax-Protect technology, this innovative windshield washer fluid combines the power of washing, waxing, and protecting to deliver a superior cleaning experience.\n\
        Unicorn Windshield Washer not only cleans your windshield effortlessly but also leaves a protective wax layer that repels dirt, grime, and water, ensuring a streak-free, crystal-clear view. The advanced formula enhances visibility by removing road film, bugs, and debris, while the wax component provides a brilliant shine that lasts longer.\n\
        With its 3M Wash-Wax-Protect technology, Unicorn Windshield Washer offers more than just a clean windshield – it protects your entire vehicle. The wax coating acts as a barrier against environmental contaminants, preserving your car's paintwork and keeping it looking its best. Whether you're driving in heavy rain, snow, or dusty conditions, Unicorn Windshield Washer ensures your vehicle stays clean and protected.\n\
        ",
        image: "Images/product4WSW.jpg"
    },
    {
        id: 5,
        name: "Headlight cleaner & Restorer",
        price: "Rs 399",
        description: "Restore clarity and enhance safety with Unicorn Headlight Cleaner & Restorer, the ultimate solution for rejuvenating your vehicle's headlights. Over time, headlights can become foggy, yellowed, or dull due to UV exposure, road grime, and environmental contaminants, compromising visibility and safety. Unicorn Headlight Cleaner & Restorer is specifically designed to restore your headlights to their original clarity and brilliance, ensuring a brighter, safer drive.\n\
        This powerful formula effectively removes oxidation, dirt, and grime, leaving your headlights with a crystal-clear finish. The advanced restoration process not only enhances visibility but also provides a protective layer to shield your headlights from future damage. With Unicorn Headlight Cleaner & Restorer, you can enjoy improved nighttime visibility and a more confident driving experience.\n\
        Unicorn Headlight Cleaner & Restorer is ideal for all types of vehicles, ensuring that your headlights are always in top condition. With its brightened vision and safeguarded drive, you can trust Unicorn to deliver the ultimate solution for headlight restoration. Experience the difference today and make Unicorn Headlight Cleaner & Restorer your go-to for automotive care.",
        image: "Images/product5HCR.jpg"
    },
    {
        id: 6,
        name: "Quick Car Body Polish",
        price: "Rs 919",
        description: "Transform your car's appearance with Unicorn Quick Car Body Polish, the ultimate solution for achieving a brilliant, long-lasting shine in no time. Designed for car enthusiasts and professionals alike, this high-performance polish delivers a flawless finish while providing superior protection for your vehicle's exterior. \n\
        Unicorn Quick Car Body Polish is formulated with advanced technology to remove light scratches, swirl marks, and surface imperfections, leaving your car with a mirror-like shine. Its quick-drying formula ensures easy application and hassle-free removal, making it the perfect choice for busy car owners who want to maintain a showroom-quality look without spending hours on the process.\n\
        Unicorn Quick Car Body Polish is ideal for both regular maintenance and special occasions, providing a quick and effective way to restore your car's shine. With its effortless shine and maximum protection, you can trust Unicorn to deliver the ultimate polish for your vehicle. Experience the difference today and make Unicorn Quick Car Body Polish your go-to for automotive care.",
        image: "Images/product6CBP.jpg"
    },
    {
        id: 7,
        name: "Leather Tire Wax",
        price: "Rs 899",
        description: "Elevate your vehicle's appearance with Unicorn Leather Tire Wax, the ultimate solution for achieving a brilliant, long-lasting shine. Crafted with premium Carnauba wax, this specialized wax not only enhances the visual appeal of your tires and leather surfaces but also provides superior protection against dirt, grime, and environmental damage. \n\
        Unicorn Leather Tire Wax is designed to deliver a trusted shine that stands out, making your car look as good as new. The advanced formula ensures easy application and quick results, leaving your tires and leather surfaces with a deep, glossy finish that resists fading and wear. Whether you're preparing for a show or simply maintaining your daily driver, Unicorn Leather Tire Wax is the perfect choice for maintaining that showroom-quality look. \n\
        Unicorn Leather Tire Wax is perfect for car enthusiasts and professionals alike, offering a hassle-free way to keep your vehicle's exterior in top condition. With its trusted shine and Carnauba wax protection, you can trust Unicorn to deliver the ultimate glow for your car. Experience the difference today and make Unicorn Leather Tire Wax your go-to for automotive care. \n\
        ",
        image: "product7LTW.jpg"
    },
    {
        id: 8,
        name: "Multiporpose Foam Cleaner",
        price: "Rs ? out of stock",
        description: "Experience the extraordinary cleaning power of Unicorn Enhanced Formula Foam Cleaner. Designed to deliver extra power and superior performance, this advanced foam cleaning solution is your go-to choice for tackling the toughest stains and grime. Whether you're cleaning your home, vehicle, or industrial equipment, Unicorn Foam Cleaner ensures a spotless finish every time. \n\
        The enhanced formula is carefully crafted to provide deep cleaning and long-lasting results, making it 5X more effective than traditional cleaners. Its powerful blend of ingredients penetrates and removes dirt, grease, and grime effortlessly, leaving surfaces sparkling clean and refreshed. The foam formulation clings to surfaces, ensuring thorough coverage and maximum cleaning efficiency. Unicorn Foam Cleaner is also designed to be safe for a variety of materials, ensuring that your investments are protected while delivering exceptional cleaning performance.\n\
        Ideal for both household and professional use, Unicorn Foam Cleaner is the ultimate tool for achieving a pristine environment. With its extra power and enhanced formula, you can trust Unicorn to provide the cleaning solution you need for a spotless, hygienic space. Choose Unicorn Foam Cleaner and experience the difference of superior cleaning power today.",
        image: "product8SFC.jpg"
    },
    {
        id: 9,
        name: "Power Coolent",
        price: "Rs 400-619",
        description: "Introducing Unicorn Power Coolant, the ultimate solution for maintaining optimal engine performance and longevity. Engineered with advanced technology, this concentrated coolant offers 5X more effectiveness compared to standard coolants, ensuring your engine stays cool and protected even under the most demanding conditions. \n\
        Unicorn Power Coolant is specifically formulated to provide long-lasting rust prevention, safeguarding your engine's internal components from corrosion and wear. Its high-performance formula ensures efficient heat dissipation, preventing overheating and maintaining peak engine efficiency. Whether you're driving in extreme temperatures or heavy-duty environments, Unicorn Power Coolant delivers consistent, reliable cooling performance.\n\
        Designed for versatility, this coolant is compatible with a wide range of vehicles, making it the perfect choice for both personal and commercial use. With Unicorn Power Coolant, you can trust that your engine is protected by a brand you can rely on. Drive with confidence, knowing your vehicle is equipped with the superior cooling power of Unicorn.",
        image: "product9PC.jpg"
    },
    {
        id: 10,
        name: "Hydraulic Brake Fluid",
        price: "Rs ? out of stock",
        description: "Trusted Shine with Carnauba Wax Protection  Your Car's Ultimate Glow. \n Experience the ultimate in safety and performance with Unicorn Hydraulic Brake Fluid. Designed to deliver precision and reliability, this high-quality brake fluid ensures smooth, consistent braking every time you hit the pedal. Whether you're driving in city traffic or tackling challenging terrains, Unicorn provides the confidence you need to stop on a dime. \n\
        Our advanced formula is engineered to maintain optimal hydraulic efficiency, even under extreme conditions. It resists heat degradation, ensuring your brakes remain responsive and effective, no matter how hard you push them. With Unicorn, you can trust that your vehicle's braking system will perform flawlessly, keeping you and your passengers safe on the road.\n\
        Choose Unicorn Hydraulic Brake Fluid for a dependable braking experience that combines safety, reliability, and superior performance. Drive with peace of mind, knowing your brakes are backed by the trusted quality of Unicorn.",
        image: "product10HBF.jpg"
    },
    // Add more products here
];

// Get the product ID from the URL
const productId = getQueryParam('id');

// Find the product based on the ID
const product = products.find(p => p.id == productId);

if (product) {
    // Update the product details in the HTML
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-image').src = product.image;
} else {
    // Handle the case where the product is not found
    alert('Product not found!');
}

// Add to cart functionality
document.getElementById('add-to-cart').addEventListener('click', function () {
    const quantity = document.getElementById('quantity').value;

    // Assuming you're using localStorage for cart management
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.productId === product.id);
    if (existingProduct) {
        existingProduct.quantity += parseInt(quantity);
    } else {
        cart.push({ productId: product.id, quantity: parseInt(quantity) });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
});

// Buy now functionality
document.getElementById('buy-now').addEventListener('click', function () {
    const quantity = document.getElementById('quantity').value;

    // Add the product to the cart and redirect to checkout
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productId: product.id, quantity: parseInt(quantity) });
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the checkout page
    // window.location.href = '/checkout.html';  // Update the URL as needed
});
