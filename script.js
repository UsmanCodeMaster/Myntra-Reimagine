let menu_icon = document.querySelector("#menu_icon");
let cart_icon = document.querySelector(".bag");
let search = document.querySelector(".search i");
let back = document.querySelector(".searchbar i");
let tabs = document.querySelector(".tabs");
let count = 1;
let gisap = gsap.timeline();
let close_cart = document.querySelector(".close_cart");
let my_data = [
  {
    name: "Small Gaming Pad",
    url: "15",
    id: 18,
    company: "Apple",
    price: 7000,
    color: "#F0BD84",
  },
  {
    name: "Digital Voltmeter",
    url: "1",
    id: 19,
    company: "Volta",
    price: 4300,
    color: "#eb848e",
  },
  {
    name: "Super Speedo Car",
    url: "9",
    id: 20,
    company: "Nicklodeon",
    price: 2800,
    color: "#eb848e",
  },
  {
    name: "Spring Outfit",
    url: "27",
    id: 21,
    company: "Mesho",
    price: 2200,
    color: "#eb848e",
  },
  {
    name: "Chess Game",
    url: "13",
    id: 22,
    company: "WoodHub",
    price: 700,
    color: "#eb848e",
  },
  {
    name: "Fresh Perfume",
    url: "11",
    id: 23,
    company: "FlipKart",
    price: 1200,
    color: "#CDB219",
  },
  {
    name: "Digital Watch",
    url: "18",
    id: 24,
    company: "rolex",
    price: 7000,
    color: "#E7C298",
  },
  {
    name: "Outfit Look",
    url: "26",
    id: 25,
    company: "Myntra",
    price: 2700,
    color: "#eb848e",
  },
  {
    name: "Jujutsu Comics",
    url: "39",
    id: 26,
    company: "Mappa",
    price: 200,
    color: "#eb848e",
  },
  // ============================================================
  {
    name: "Early 90s Computer",
    price: "15,000",
    url: "2",
    id: 14,
    company: "IBM Computer",
    color: "#9A6D6F",
  },
  {
    name: "Sun Glasses",
    price: "249",
    url: "29",
    id: 15,
    company: "Glasses",
    color: "#BFBFBE",
  },
  {
    name: "Foreign Ring",
    price: "250",
    url: "20",
    id: 16,
    company: "Golds",
    color: "#BFBFBE",
  },
  {
    name: "Cooling Fan",
    price: "1,500",
    url: "37",
    id: 17,
    company: "GFC Fans",
    color: "#2C6FBD",
  },
  // =========================================================
  {
    name: "Latest Ring",
    url: "22",
    id: 5,
    price: "1,500",
    company: "GFC Fans",
    color: "#BFBFBE",
  },
  {
    name: "Batman Comics",
    url: "38",
    id: 6,
    price: 250,
    company: "DC Comics",
    color: "#CDB219",
  },
  {
    name: "Latest Bi-Cycle",
    url: "8",
    id: 7,
    price: "4,500",
    company: "Sohrab",
    color: "#CDB219",
  },
  {
    name: "Sand Timer",
    url: "12",
    id: 8,
    price: "1,500",
    company: "SandLanders",
    color: "#eb848e",
  },
  {
    name: "Groot Toy",
    url: "10",
    id: 9,
    price: "1,500",
    company: "Marvel Toys",
    color: "#9C7353",
  },
  {
    name: "Tradition Ring",
    url: "23",
    id: 10,
    price: "500",
    company: "Ragnaration",
    color: "#9A776B",
  },
  {
    name: "Head Phones",
    url: "32",
    id: 11,
    price: "2,500",
    company: "Apple",
    color: "#848B7D",
  },
  {
    name: "Men Scarf",
    url: "28",
    id: 12,
    price: "350",
    company: "Local Product",
    color: "#9A776B",
  },
  {
    name: "Mobile Cover",
    url: "7",
    id: 13,
    price: "1,500",
    company: "Local Product",
    color: "#9A776B",
  },
  // ================================================
  {
    name: "Vanilla",
    price: "1,500",
    url: "3",
    new: "",
    id: 1,
    company: "Niki Product",
    color: "#B4A28A",
  },
  {
    name: "Givnhcey",
    price: "1,249",
    url: "4",
    new: "New",
    id: 2,
    company: "Givnhcey",
    color: "#C0A391",
  },
  {
    name: "Adidas",
    price: "2,500",
    url: "5",
    new: "New",
    id: 3,
    company: "Adidas",
    color: "#CFAB89",
  },
  {
    name: "Stylish",
    price: "1,800",
    url: "6",
    new: "",
    id: 4,
    company: "Jokers'",
    color: "#CFAB89",
  },
];
function open_sidebar(a) {
  if (window.innerWidth > 450) {
    gisap.to(a, {
      width: 450,
      duration: 0.5,
    });
  } else if (window.innerWidth < 450) {
    gisap.to(a, {
      width: "100%",
      duration: 0.5,
    });
  }
}
function sidebar_remove(a) {
  gsap.to(a, {
    width: 0,
    duration: 0.5,
  });
}
function overlay_show() {
  gsap.to(".search_overlay", {
    display: "block",
    duration: 0.1,
  });
}
function overlay_hide() {
  gsap.to(".search_overlay", {
    display: "none",
    duration: 0.1,
  });
}
function nav2_remove() {
  gsap.to(".header_part2", {
    y: -100,
    duration: 0.1,
  });
}
function nav2_show() {
  gsap.to(".header_part2", {
    y: 0,
    duration: 0.1
  });
}
menu_icon.addEventListener("click", function () {
  open_sidebar(document.querySelector(".sidebar"));
  overlay_show();
  nav2_remove();
  sidebar_remove(document.querySelector(".cart"));
});

cart_icon.addEventListener("click", function () {
  overlay_show();
  sidebar_remove(document.querySelector(".sidebar"));
  nav2_remove();
  open_sidebar(document.querySelector(".cart"));
});

search.addEventListener("click", function () {
  document.querySelector(".searchbar").style.display = "flex";
  sidebar_remove(document.querySelector(".sidebar"));
  sidebar_remove(document.querySelector(".cart"));
  nav2_remove();
});

back.addEventListener("click", function () {
  document.querySelector(".searchbar").style.display = "none";
  nav2_show();
});

let tab_array = [
  {
    name: "Kid Toys",
    img: "product9",
    bgcolor: "#CADFF0",
  },
  {
    name: "Taditional Rings",
    img: "product23",
    bgcolor: "#CDC8F0",
  },
  {
    name: "Head Phones",
    img: "product32",
    bgcolor: "#F0D7B6",
  },
  {
    name: "Key Board",
    img: "product40",
    bgcolor: "#FFFD92",
  },
  {
    name: "Charger",
    img: "product33",
    bgcolor: "#C3F0BE",
  },
  {
    name: "Cooling Fan",
    img: "product37",
    bgcolor: "#CDC8F0",
  },
  {
    name: "Comic Books",
    img: "product38",
    bgcolor: "#CADFF0",
  },
  {
    name: "Outfits",
    img: "product28",
    bgcolor: "#F0D7B6",
  },
  {
    name: "Sun Glasses",
    img: "product30",
    bgcolor: "#C3F0BE",
  },
];
let clutter = "";
tab_array.forEach(function (pro, idx) {
  clutter += `<div class="product tabs${idx}" style="background-color: ${pro.bgcolor};"><img src="images/${pro.img}.webp" alt="Car Toy"><p>${pro.name}</p></div>`;
  document.querySelector(
    ".tabs"
  ).innerHTML = `<i class="ri-bubble-chart-fill"></i>${clutter}`;
});

gsap.to(".header_part2", {
  y: -100,
  scrollTrigger: {
    trigger: ".page1 > img",
    scroller: "body",
    scrub: true,
    // markers: true,
    start: "top 0%",
    end: "top -10%",
  },
});

let shoe_clutter = "";
my_data.forEach(function (shoe, idx) {
  if (shoe.id < 5) {
    shoe_clutter += `<div class="sneakers sneaker${idx}" data-set="${idx}"><div class="new${shoe.id}">${shoe.new}</div><img class="click_me" src="images/product${shoe.url}.webp" data-set="${idx}"><h3>${shoe.name} Sneaker</h3><p>This is the most comfortable sneaker that you would definitely like.</p><div class="price"><p>Price</p><p>&#x20b9; ${shoe.price}</p><button data-set="${idx}" class="add_bag_button">Add to Bag</button></div></div>`;
  }
  document.querySelector(".sneaker_products").innerHTML = shoe_clutter;
});
function new_dis(a) {
  if (a.innerText == "") {
    a.style.display = "none";
  }
}
new_dis(document.querySelector(".new1"));
new_dis(document.querySelector(".new4"));

let isMouseDown = false;
let startX;
let scrollLeft;

tabs.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - tabs.offsetLeft;
  scrollLeft = tabs.scrollLeft;
});

tabs.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

tabs.addEventListener("mouseup", () => {
  isMouseDown = false;
});

tabs.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - tabs.offsetLeft;
  const walk = (x - startX) * 1; // Adjust scrolling speed if needed
  tabs.scrollLeft = scrollLeft - walk;
});

let f_pro = document.querySelector(".famous_products");
let isMouseDownFamous = false;
let startXFamous;
let scrollLeftFamous;

f_pro.addEventListener("mousedown", (e) => {
  isMouseDownFamous = true;
  startXFamous = e.pageX - f_pro.offsetLeft;
  scrollLeftFamous = f_pro.scrollLeft;
});

f_pro.addEventListener("mouseleave", () => {
  isMouseDownFamous = false;
});

f_pro.addEventListener("mouseup", () => {
  isMouseDownFamous = false;
});

f_pro.addEventListener("mousemove", (e) => {
  if (!isMouseDownFamous) return;
  e.preventDefault();
  const x = e.pageX - f_pro.offsetLeft;
  const walk = (x - startXFamous) * 1; // Adjust scrolling speed if needed
  f_pro.scrollLeft = scrollLeftFamous - walk;
});

let famous_clutter = "";
my_data.forEach(function (product, index) {
  if (product.id >= 5 && product.id <= 13) {
    famous_clutter += `<div class="fam_pro fam_pro_${index}" data-set="${index}"><img src="images/product${product.url}.webp" class="click_me" data-set="${index}"></div>`;
  }
  document.querySelector(".famous_products").innerHTML = famous_clutter;
});

// ----------------------------------------------
// Page4

let page4_clutter = "";
my_data.forEach(function (page4, idx) {
  if (page4.id >= 14 && page4.id <= 17) {
    page4_clutter += `<div class="page4_products page4_product${idx}" data-set="${idx}"><img class="click_me" data-set="${idx}" src="images/product${page4.url}.webp"><h3>${page4.name} Sneaker</h3><p>This is the most comfortable sneaker that you would definitely like.</p><div class="price"><p>Price</p><p>&#x20b9; ${page4.price}</p>	<button data-set="${idx}" class="add_bag_button">Add to Bag</button></div></div>`;
  }
  document.querySelector(".things_should_buy").innerHTML = page4_clutter;
});

// --------------------------------------------------------------------------
// page5
let f_pro2 = document.querySelector(".famous_products2");
let isMouseDownFamous2 = false;
let startXFamous2;
let scrollLeftFamous2;

f_pro2.addEventListener("mousedown", (e) => {
  isMouseDownFamous2 = true;
  startXFamous2 = e.pageX - f_pro2.offsetLeft;
  scrollLeftFamous2 = f_pro2.scrollLeft;
});

f_pro2.addEventListener("mouseleave", () => {
  isMouseDownFamous2 = false;
});

f_pro2.addEventListener("mouseup", () => {
  isMouseDownFamous2 = false;
});

f_pro2.addEventListener("mousemove", (e) => {
  if (!isMouseDownFamous2) return;
  e.preventDefault();
  const x = e.pageX - f_pro2.offsetLeft;
  const walk = (x - startXFamous2) * 1; // Adjust scrolling speed if needed
  f_pro2.scrollLeft = scrollLeftFamous2 - walk;
});

let famous_clutter2 = "";
my_data.forEach(function (product, index) {
  if (product.id >= 18 && product.id <= 26) {
    famous_clutter2 += `<div class="fam_pro fam_pro_${index} data-set="${index}"><img src="images/product${product.url}.webp" class="click_me" data-set="${index}"></div>`;
  }
  document.querySelector(".famous_products2").innerHTML = famous_clutter2;
});

let extra_page = document.querySelector(".clicked_page");

let to_click = document.querySelectorAll(".click_me");

let clicked_clutter = "";

to_click.forEach(function (i) {
  i.addEventListener("click", function (e) {
    extra_page.style.display = "flex";
    my_data.forEach(function (product, idx) {
      if (e.target.dataset.set == idx) {
        clicked_clutter = `<div class="clicked_product_content">
<div class="cancel" onclick="del_extra_page()">X</div><div class="product_image"><img src="images/product${product.url}.webp" /></div><div class="clicked_product_info"><div class="company" style="color: ${product.color};">${product.company}</div><h2>${product.name}</h2><div class="made">Made in Pakistan</div><div class="clicked_pro_price"><div>&#x20b9; ${product.price}</div><div class="rating"><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></div></div><h4 style="border-bottom: 2px solid ${product.color};">Description</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit adipis icing elit.</p><div class="extra"><div class="color"><p>Color</p><div class="color_circle" style="background-color: ${product.color};"></div></div><div class="quantity"><p>Quantity</p><div class="quantity_number"><p>+</p><p>1</p><p>-</p></div></div><div class="original_price"><p>Original Price</p><div class="org_price_value">&#x20b9; 2500</div></div></div><button class="clicked_wish">Add to my Wishlist</button><button class="add_to_bag" style="background-color: ${product.color};" data-set="${idx}">Add To Bag</button></div></div>`;
      }
      document.querySelector(".clicked_page").innerHTML = clicked_clutter;
    });
  });
  i.addEventListener("mouseover", function () {
    i.style.cursor = "pointer";
  });
});

function del_extra_page() {
  extra_page.style.display = "none";
}

let cart = [];
function add_to_bag() {
  document
    .querySelector(".clicked_page")
    .addEventListener("click", function (i) {
      if (i.target.classList.contains("add_to_bag")) {
        document.querySelector(".add_to_bag").innerText = "Added to Bag";
        setTimeout(function () {
          document.querySelector(".add_to_bag").innerText = "Add to Bag";
      }, 5000);
        cart.push(my_data[i.target.dataset.set]);
        cart_pro_num();
      } else {
        return;
      }
      show_in_cart();
    });
}
add_to_bag();
let cart_clutter = "";
function show_in_cart() {
  document.querySelector(".cart_product_list").innerHTML = "";
  let cancel_value = 0;
  if (cart.length !== 0) {
    cart.forEach(function (item, idx) {
      cart_clutter = "";
      cart_clutter = `<div class="cart_products"><div class="cart_products_image"><img src="images/product${item.url}.webp" /></div><div class="cart_product_details"><div class="cart_product_info"><div class="details"><h4>${item.name}</h4><p>${item.company}</p></div><div class="cancel_product" dataset="${cancel_value}"><span dataset="${cancel_value}" style="pointer-event: none;">x</span></div></div><div class="cart_product_extra"><div class="cart_pro_price">&#x20b9; ${item.price}</div><div class="product_quantity"><span>+</span> 1 <span>-</span></div></div></div></div>`;
      cancel_value += 1;
      document.querySelector(".cart_product_list").innerHTML += cart_clutter;
    });
  }
  document.querySelectorAll(".cancel_product").forEach(function (i) {
    i.addEventListener("click", function () {
      cart.splice(i.getAttribute("dataset"), 1);
      show_in_cart();
      cart_pro_num();
    });
  });
}

close_cart.addEventListener("click", function () {
  sidebar_remove(document.querySelector(".cart"));
  overlay_hide();
});
document.querySelector(".close_sidebar").addEventListener("click", function () {
  sidebar_remove(document.querySelector(".sidebar"));
  overlay_hide();
});

function cart_pro_num() {
  let pro_num_icon = document.querySelector(".pro_num_icon");
  pro_num_icon.innerHTML = cart.length;
  if (pro_num_icon.innerText == "" || cart.length == 0) {
    pro_num_icon.style.display = "none";
  } else {
    pro_num_icon.style.display = "flex";
  }
}

document.querySelectorAll(".add_bag_button").forEach(function (i) {
  i.addEventListener("click", function () {
    i.innerText = "Added to Bag";
    i.style.backgroundColor = "green";
    setTimeout(function () {
      i.innerText = "Add to Bag";
      i.style.backgroundColor = "black";
    }, 4000);
    cart.push(my_data[i.dataset.set]);
    show_in_cart();
    cart_pro_num();
  });
});

let search_clutter = "";
let search_list = document.querySelector(".search_here input");
search_list.addEventListener("input", function (i) {
  let filtered_search = [];
  if (search_list.value !== "") {
    filtered_search = my_data.filter(function (i) {
      return i.name.toLowerCase().startsWith(search_list.value);
    });
  } else {
    filtered_search = [];
  }
  filtered_search.forEach(function (searches) {
    search_clutter += `<div class="suggests"><i class="ri-search-line"></i><div>${searches.name}</div><i class="ri-arrow-left-up-fill"></i></div>`;
    document.querySelector(".suggestions").innerHTML = search_clutter;
  });
  search_clutter = "";
});
