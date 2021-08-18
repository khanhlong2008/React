/* eslint-disable react/jsx-no-duplicate-props */
import { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      Desc: "",
      sltGender: 1,
      rdLang: "vi",
      chkbStatus: false,
    };
  }
  onHandlechange = (e) => {
    var target = e.target;
    var name = target.name;
    var value =target.type ==='checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Form</h3>
                  </div>
                  <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit}>
                      <div className="form-group">
                        <label>UserName</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Username"
                          onChange={this.onHandlechange}
                          value={this.state.Username}
                        />
                      </div>
                      <div className="form-group">
                        <label>PassWord</label>
                        <input
                          type="password"
                          className="form-control"
                          name="Password"
                          onChange={this.onHandlechange}
                          value={this.state.Password}
                        />
                      </div>
                      <div className="form-group">
                        <label>Mo Ta</label>

                        <textarea
                          className="form-control"
                          name="Desc"
                          onChange={this.onHandlechange}
                          value={this.state.Desc}
                        ></textarea>
                      </div>
                      <label>Gioi Tinh</label>
                      <select
                        name="sltGender"
                        className="form-control"
                        value={this.state.sltGender}
                        onChange={this.onHandlechange}
                      >
                        <option value={0}>Nu</option>
                        <option value={1}>Nam</option>
                      </select>
                      <br></br>
                      <label>Ngon Ngu</label>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="rdLang"
                            value="en"
                            onChange={this.onHandlechange}
                            checked={this.state.rdLang === "en"}
                          />
                          tieng Anh
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="rdLang"
                            value="vi"
                            onChange={this.onHandlechange}
                            checked={this.state.rdLang === "vi"}
                          />
                          Tieng Viet
                        </label>
                      </div>
                      
                      <div className="checkbox">
                          <label>
                              <input 
                              type="checkbox" 
                              value=""
                              name="chkbStatus"
                              value={true}
                              onChange={this.onHandlechange}
                              checked={this.state.chkbStatus === true}
                              />
                              trang thai
                          </label>
                      </div>
                      
                      <button type="submit" className="btn btn-primary">
                        Luu
                      </button>
                      &nbsp;
                      <button type="reset" className="btn btn-default">
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Form;
