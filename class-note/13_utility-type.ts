// utility Type
// 사전에 정의된 Type을 변환할 때 사용하기 좋은 문법
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// ex) 네이버 쇼핑 - API를 위해 정의된 property가 상세 정보에선 불필요한 상황
// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  // ..
}

// interface ProductDetail {
//   id: number; 
//   name: string; 
//   price: number;
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// Pick - 특정 타입 중 필요한 몇개의 속성을 선택하여 타입 정의 가능
// ex) 사전에 정의된 Product 중 상세 정보 표시에 필요한 부분 property들만 뽑아냈다.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }
// #1
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2
type UserProfileUpdate = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
}
type UserProfileKeys = keyof UserProfile

// #3
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p]
}

// #4
type Subset<T> = {
  [p in keyof T]?: T[p]
}
