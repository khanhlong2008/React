/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { Product } from "./../Props/Product";
class Props extends Component {
  render() {
    var products = [
      {
        id: "0",
        name: "Apple Iphone 12 Pro Max",
        price: "30.000.000",
        image:
          "https://cdn.tgdd.vn/Files/2021/04/25/1346183/iphone-12-pro-mau-tim-1_800x450.jpg",
        status: true,
      },
      {
        id: "1",
        name: "Samsung Galaxy s10",
        price: "30.000.000",
        image:
          "https://www.didongmy.com/vnt_upload/news/02_2020/pin-galaxy-s20-ultra-didongmy.jpg",
        status: true,
      },
      {
        id: "2",
        name: "Oppo F1 Plus",
        price: "10.000.000",
        image: "http://tapchicongthuong.vn/images/20/8/20/oppo_f17_pro.jpg",
        status: true,
      },
      {
        id: "3",
        name: "Xaomi Note 10",
        price: "10.000.000",
        image: "https://www.viettablet.com/images/companies/1/0-hinh-moi/tin-tuc/2021/thang-3/17/Redmi-Note-10-black.jpg?1615957353557",
        status: true,
      },
      {
        id: "4",
        name: "Vivo V19",
        price: "12.000.000",
        image: "https://reviewso.vn/uploads/vivo-v19-1.jpg",
        status: true,
      },
      {
        id: "5",
        name: "Nokia X50",
        price: "6.000.000",
        image: "https://media.techz.vn/resize_x700x400/media2019/upload2019/2021/07/03/nokia-x50-moi-co-cum-5-camera-do-phan-giai-108mp-man-hinh-sieu-muot-sap-ra-mat_03072021161609.jpg",
        status: true,
      },
    ];

    let elememts = products.map((product, index) => {
        let result = '';
        if(product.status){
            result = <Product 
                        key={product.id} 
                        price={product.price} 
                        image={product.image}
                     >
                        {product.name}
                     </Product>;
        }
      return result;
      
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" >
              Props
            </a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {elememts}
                                {/* <Products
                                name="Apple Iphone 12 Pro Max"
                                price="30.000.000"
                                image="https://cdn.tgdd.vn/Files/2021/04/25/1346183/iphone-12-pro-mau-tim-1_800x450.jpg"
                                />
                                <Products
                                name="Oppo F1 Plus"
                                price="10.000.000"
                                image="http://tapchicongthuong.vn/images/20/8/20/oppo_f17_pro.jpg"
                                />
                                <Products
                                name="Samsung Galaxy s10"
                                price="20.000.000"
                                image="https://www.didongmy.com/vnt_upload/news/02_2020/pin-galaxy-s20-ultra-didongmy.jpg"
                                /> */}

                                {/* children (this.props.chidren) */}
                                {/* <Products
                                
                                price="30.000.000"
                                image="https://cdn.tgdd.vn/Files/2021/04/25/1346183/iphone-12-pro-mau-tim-1_800x450.jpg"
                                >
                                    Apple Iphone 12 Pro Max
                                </Products>
                                <Products
                                
                                price="10.000.000"
                                image="http://tapchicongthuong.vn/images/20/8/20/oppo_f17_pro.jpg"
                                >
                                    Oppo F1 Plus
                                </Products>
                                <Products
                                name="Samsung Galaxy s10"
                                price="20.000.000"
                                image="https://www.didongmy.com/vnt_upload/news/02_2020/pin-galaxy-s20-ultra-didongmy.jpg"
                                >
                                    Samsung Galaxy s10
                                </Products> */}      
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { Props };
