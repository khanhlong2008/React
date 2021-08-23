var initialState = [
    {
        id: 1,
        name: 'iphone 12',
        img:'https://img.websosanh.vn/v2/users/root_product/images/dien-thoai-apple-iphone-12-pro/bf4dsxoa54r7x.jpg?compress=85',
        description:'san pham do apple san xuat',
        price: 500,
        inventory: 10,
        rating: 5,
    },
    {
        id: 2,
        name: 'samsung',
        img:'https://www.viendongmobile.com/vnt_upload/product/12_2020/White.png',
        description:'san pham do samsung san xuat',
        price: 400,
        inventory: 15,
        rating: 4,
    },
    {
        id: 3,
        name: 'vivo',
        img:'https://www.minhducvn.com/wp-content/uploads/2021/06/Y3S.png',
        description:'san pham do vivo san xuat',
        price: 300,
        inventory: 5,
        rating: 2,
    },
    {
        id: 4,
        name: 'oppo',
        img:'https://cdn.didongviet.vn/pub/media/catalog/product//o/p/oppo-a15-didongviet.jpg',
        description:'san pham do oppo san xuat',
        price: 200,
        inventory: 5,
        rating: 1,
    }
]
const products = (state = initialState , action )=>{
    switch(action.type){
        default: return [...state]
    }
}
export default products 