const PRODUCTS = [
  {
    "id": "PL-NAM-001",
    "name": "Áo Polo Nam Basic Premium",
    "gender": "Nam",
    "oldPrice": 399000,
    "price": 299000,
    "discount": 25,
    "material": "Cotton Compact 65% + Polyester 35%",
    "colors": [
      "Đen",
      "Trắng",
      "Xanh navy",
      "Be"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 12,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1625910513413-5fc45e0f3c0d?auto=format&fit=crop&w=900&q=85",
    "description": "Áo Polo Nam Basic Premium mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "HD-UNI-002",
    "name": "Áo Hoodie Basic Unisex",
    "gender": "Unisex",
    "oldPrice": 499000,
    "price": 399000,
    "discount": 20,
    "material": "Cotton nỉ da cá",
    "colors": [
      "Đen",
      "Trắng",
      "Xám",
      "Be"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 13,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    "description": "Áo Hoodie Basic Unisex mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "TS-NAM-003",
    "name": "Áo T-shirt Nam Oversize",
    "gender": "Nam",
    "oldPrice": 299000,
    "price": 239000,
    "discount": 20,
    "material": "Cotton 100%",
    "colors": [
      "Đen",
      "Trắng",
      "Xám"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 14,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "description": "Áo T-shirt Nam Oversize mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "SM-NAM-004",
    "name": "Áo Sơ mi Nam Oxford",
    "gender": "Nam",
    "oldPrice": 449000,
    "price": 359000,
    "discount": 20,
    "material": "Cotton Oxford",
    "colors": [
      "Trắng",
      "Xanh nhạt",
      "Đen"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 15,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85",
    "description": "Áo Sơ mi Nam Oxford mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "QJ-NAM-005",
    "name": "Quần Jeans Nam Straight",
    "gender": "Nam",
    "oldPrice": 599000,
    "price": 449000,
    "discount": 25,
    "material": "Denim cotton",
    "colors": [
      "Xanh đậm",
      "Xanh nhạt",
      "Đen"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 16,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
    "description": "Quần Jeans Nam Straight mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "QK-NAM-006",
    "name": "Quần Kaki Nam Basic",
    "gender": "Nam",
    "oldPrice": 499000,
    "price": 399000,
    "discount": 20,
    "material": "Kaki cotton",
    "colors": [
      "Be",
      "Đen",
      "Nâu"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 17,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85",
    "description": "Quần Kaki Nam Basic mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "QS-NAM-007",
    "name": "Quần Short Nam Basic",
    "gender": "Nam",
    "oldPrice": 349000,
    "price": 279000,
    "discount": 20,
    "material": "Kaki co giãn",
    "colors": [
      "Đen",
      "Be",
      "Xám"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 18,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1517457210348-703079e57d4b?auto=format&fit=crop&w=900&q=85",
    "description": "Quần Short Nam Basic mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "JK-NAM-008",
    "name": "Áo Jacket Nam Basic",
    "gender": "Nam",
    "oldPrice": 699000,
    "price": 559000,
    "discount": 20,
    "material": "Polyester chống gió",
    "colors": [
      "Đen",
      "Xám",
      "Navy"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 19,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    "description": "Áo Jacket Nam Basic mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "PO-NAM-009",
    "name": "Áo Polo Nam Premium",
    "gender": "Nam",
    "oldPrice": 499000,
    "price": 399000,
    "discount": 20,
    "material": "Cotton pique",
    "colors": [
      "Trắng",
      "Navy",
      "Xanh rêu"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 12,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=900&q=85",
    "description": "Áo Polo Nam Premium mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "AO-NU-010",
    "name": "Áo Kiểu Nữ Thanh Lịch",
    "gender": "Nữ",
    "oldPrice": 399000,
    "price": 299000,
    "discount": 25,
    "material": "Voan mềm",
    "colors": [
      "Trắng",
      "Đen",
      "Hồng"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 13,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1564257577054-6e5ab5f5f6a8?auto=format&fit=crop&w=900&q=85",
    "description": "Áo Kiểu Nữ Thanh Lịch mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "TS-NU-011",
    "name": "Áo Thun Nữ Baby Tee",
    "gender": "Nữ",
    "oldPrice": 299000,
    "price": 229000,
    "discount": 23,
    "material": "Cotton co giãn",
    "colors": [
      "Trắng",
      "Đen",
      "Hồng"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 14,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    "description": "Áo Thun Nữ Baby Tee mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "VD-NU-012",
    "name": "Váy Body Nữ Thanh Lịch",
    "gender": "Nữ",
    "oldPrice": 549000,
    "price": 399000,
    "discount": 27,
    "material": "Polyester co giãn",
    "colors": [
      "Đen",
      "Đỏ",
      "Kem"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 15,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
    "description": "Váy Body Nữ Thanh Lịch mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "VS-NU-013",
    "name": "Váy Suông Nữ Basic",
    "gender": "Nữ",
    "oldPrice": 499000,
    "price": 379000,
    "discount": 24,
    "material": "Cotton pha",
    "colors": [
      "Trắng",
      "Đen",
      "Be"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 16,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
    "description": "Váy Suông Nữ Basic mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "QJ-NU-014",
    "name": "Quần Jeans Nữ Ống Rộng",
    "gender": "Nữ",
    "oldPrice": 599000,
    "price": 459000,
    "discount": 23,
    "material": "Denim",
    "colors": [
      "Xanh nhạt",
      "Xanh đậm"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 17,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
    "description": "Quần Jeans Nữ Ống Rộng mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "QO-NU-015",
    "name": "Quần Ống Suông Nữ",
    "gender": "Nữ",
    "oldPrice": 499000,
    "price": 389000,
    "discount": 22,
    "material": "Tuytsi co giãn",
    "colors": [
      "Đen",
      "Kem",
      "Nâu"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 18,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1506629905607-d9b1bce2b5c0?auto=format&fit=crop&w=900&q=85",
    "description": "Quần Ống Suông Nữ mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "CV-NU-016",
    "name": "Chân Váy Chữ A",
    "gender": "Nữ",
    "oldPrice": 399000,
    "price": 299000,
    "discount": 25,
    "material": "Kaki mềm",
    "colors": [
      "Đen",
      "Be",
      "Nâu"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 19,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?auto=format&fit=crop&w=900&q=85",
    "description": "Chân Váy Chữ A mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "KN-NU-017",
    "name": "Áo Len Nữ Basic",
    "gender": "Nữ",
    "oldPrice": 499000,
    "price": 399000,
    "discount": 20,
    "material": "Len mềm",
    "colors": [
      "Kem",
      "Nâu",
      "Đen"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 12,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85",
    "description": "Áo Len Nữ Basic mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  },
  {
    "id": "BL-NU-018",
    "name": "Blazer Nữ Basic",
    "gender": "Nữ",
    "oldPrice": 699000,
    "price": 549000,
    "discount": 21,
    "material": "Tuytsi",
    "colors": [
      "Đen",
      "Kem",
      "Nâu"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock": 13,
    "origin": "Việt Nam",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    "description": "Blazer Nữ Basic mang phong cách hiện đại, dễ phối đồ, phù hợp đi học, đi làm và đi chơi. Thiết kế chú trọng sự thoải mái và tính ứng dụng hằng ngày."
  }
];