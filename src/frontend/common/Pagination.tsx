import React from "react";
import {Button, Toolbar} from "@material-ui/core";

class Pagination extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      page: 1
    }
  }

  setPage(page: any) {
    const aa:any  = this
    this.setState({
      page
    },()=>{aa.props.onChange(page)})
  }

  render() {
    const {total}: any = this.props;
    const {page}: any = this.state;
    const allPage = Math.ceil(total / 10) || 1;
    return (
      allPage > 1 &&
      <Toolbar>
          <div>
            {
               `${(page - 1) * 10 + 1}-${page * 10} of ${total}`
            }
          </div>
          <div style={{marginLeft: '200px'}}>
            {
              <Button
                          disabled={page <= 1}
                          onClick={() => this.setPage(page - 1)}>3333</Button>
            }
            {
              `当前页：${page}`
            }
            {
              <Button  disabled={page === allPage} onClick={() => this.setPage(page + 1)}>2222</Button>
            }
          </div>
      </Toolbar>
    )
  }
}

export default Pagination
