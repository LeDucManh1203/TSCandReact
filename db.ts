interface Author {
    id: number;
    name: string;
    slug: string;
  }
  
  interface Category {
    id: number;
    name: string;
    is_leaf: boolean;
  }
  
  interface Seller {
    id: number;
    sku: string;
    name: string;
    link: string;
    logo: string;
    price: number;
    product_id: string;
    store_id: number;
    is_best_store: boolean;
    is_offline_installment_supported: boolean | null;
  }
  
  interface Image {
    base_url: string;
    is_gallery: boolean;
    label: null;
    large_url: string;
    medium_url: string;
    position: null;
    small_url: string;
    thumbnail_url: string;
  }
  
  interface QuantitySold {
    text: string;
    value: number;
  }
  
  interface Attribute {
    code: string;
    name: string;
    value: string;
  }
  
  interface Specification {
    name: string;
    attributes: Attribute[];
  }
  
  interface Book {
    authors: Author[];
    book_cover: null;
    categories: Category;
    current_seller: Seller;
    description: string;
    images: Image[];
    list_price: number;
    name: string;
    original_price: string;
    quantity_sold: QuantitySold;
    rating_average: number;
    short_description: string;
    specifications: Specification[];
  }
  
  interface Books {
    books: Book[];
  }
  
  const data: Books = {
    books: [
      {
        authors: [
          {
            id: 315,
            name: "Jonathan Swift",
            slug: "jonathan-swift",
          },
        ],
        book_cover: null,
        categories: {
          id: 9,
          name: "Fiction - Literature",
          is_leaf: false,
        },
        current_seller: {
          id: 6337,
          sku: "1951403961346",
          name: "Foreignbooks",
          link: "https://tiki.vn/cua-hang/foreignbooks",
          logo:
            "https://vcdn.tikicdn.com/ts/seller/93/ba/f8/a08e6337f91ea64554cb27833f112e04.jpg",
          price: 69000,
          product_id: "3159381",
          store_id: 6194,
          is_best_store: false,
          is_offline_installment_supported: null,
        },
        description:
          "<p style=\"text-align: justify;\"><span style=\"font-size: medium; color: #0000ff;\"><strong>Gulliver's Travels</strong></span></p>\n<p style=\"text-align: justify;\"><strong>Jonathan Swift's</strong> classic satirical narrative was first published in 1726, seven years after Defoe's Robinson Crusoe (one of its few rivals in fame and breadth of appeal). As a parody travel-memoir it reports on extraordinary lands and societies, whose names have entered the English language: notably the minute inhabitants of Lilliput, the giants of Brobdingnag, and the Yahoos in Houyhnhnmland, where talking horses are the dominant species. It spares no vested interest from its irreverent wit, and its attack on political and financial corruption, as well as abuses in science, continue to resonate in our own times.</p><p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm
  