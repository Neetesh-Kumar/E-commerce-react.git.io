import React from "react";
import { MDBContainer,  MDBCardHeader, MDBIcon, MDBMedia, MDBBtn, MDBPageItem, MDBPagination, MDBPageNav } from "mdbreact";

class BlogComponentsPage extends React.Component {
  constructor(){
    super();
    this.state +={
      data:''
    }
  }
  handle(event){
    this.setState({
      data:event.target.value
    })
  }
  render(){
  return (
      <MDBContainer>
        <MDBCardHeader className="border-0 font-weight-bold">
          <p className="mr-4 mb-0">4 comments</p>
        </MDBCardHeader>
        <MDBMedia className="d-block d-md-flex mt-4">
          <img className="card-img-64 d-flex mx-auto mb-3" src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.18169-9/27750805_1437017716408448_6274462356708797883_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=6-of9E9EX34AX_iC-iz&_nc_ht=scontent.fkhi17-1.fna&oh=5b5c0fd83d8c38cd73aef4993b033b63&oe=60D8A5F1" alt="" />
          <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
            <h5 className="font-weight-bold mt-0">
              Zahid Ali<MDBIcon icon="reply" className="pull-right ml-2" />
            </h5>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <MDBMedia className="d-block d-md-flex mt-4">
            <img className="card-img-64 d-flex mx-auto mb-3" src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/165383181_2952811855003483_5684492072529653642_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lMyJuSLNCMUAX9-MuXp&_nc_ht=scontent.fkhi17-1.fna&oh=ccca4d4900279ce36d055952befe6cb0&oe=60D90E62" alt="" />
              <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                  <h5 className="font-weight-bold mt-0">
                Aneel Kumar<MDBIcon icon="reply" className="pull-right ml-2" />
                  </h5>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <div className="form-group mt-4">
                    <p><MDBIcon icon="user" size="5x" ></MDBIcon>     {this.state.data}</p>
                    <br/>
                    {/* <MDBIcon icon="user" size="5x" ></MDBIcon> */}
                    <label htmlFor="quickReplyFormComment">Your comment</label>
                    <textarea className="form-control" id="quickReplyFormComment" rows="5" onChange={this.handle.bind(this)}></textarea>
                    <div className="text-center my-4">
                      <MDBBtn size="sm" color="primary">Post</MDBBtn>
                    </div>
                  </div>
                  <MDBMedia className="d-block d-md-flex mt-4">
                    <img className="card-img-64 d-flex mx-auto mb-3" src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.18169-9/12742242_551680391667671_6924259067931177324_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=rOm4JLa1UL8AX9hEn2K&_nc_oc=AQlyNRvwlobQ-tR3bz4yG9auB7oR7NnGazTwEL5G5WtLaIyLHDFPnmirnZnhgY4cp6Zl1YvKYdcb6P7W9xoIw8RT&_nc_ht=scontent.fkhi17-1.fna&oh=2b95bca1e24a32980776ff053dc2c68b&oe=60D6916F" alt="" />
                    <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                      <h5 className="font-weight-bold mt-0">
                        Affan Qureshi<MDBIcon icon="reply" className="pull-right ml-2" />
                      </h5>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </MDBMedia>
                  </MDBMedia>
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </MDBMedia>
        <MDBMedia className="d-block d-md-flex mt-4">
          <img className="card-img-64 d-flex mx-auto mb-3" src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/165644385_3524688677637847_4254004241352554733_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=K07vr93dV8oAX9IMybI&tn=ghiJHcpFvKcqmFc2&_nc_ht=scontent.fkhi17-1.fna&oh=713cb5686de6b5950032c06602fa9b5d&oe=60D90C2C" alt="" />
          <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
            <h5 className="font-weight-bold mt-0">
              Neetesh Chhangani<MDBIcon icon="reply" className="pull-right ml-2" />
            </h5>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </MDBMedia>
        </MDBMedia>
        <MDBPagination className="d-flex justify-content-center mt-5">
          <MDBPageItem disabled>
            <MDBPageNav>
              <span>First</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem disabled>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem active>
            <MDBPageNav>
              1 <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              2
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              3
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              4
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              5
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              &raquo;
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              Last
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBContainer>
  );
}
}

export default BlogComponentsPage;