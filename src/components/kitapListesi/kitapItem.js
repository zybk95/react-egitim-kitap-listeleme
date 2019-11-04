import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook, deleteBook } from '../../actions'


class KitapItem extends Component {
  render() {
    const { kitap } = this.props;

    return (
      <div className="card">
        <div className="content">
          <div className="header">{kitap.title}</div>
          <div className="description">
            {kitap.shortDescription}
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            
            <div className="ui basic green button"
              onClick={() => {
                this.props.selectBook(kitap)
              }}>
                Seç
            </div>

            <div className="ui basic red button"
              onClick={() => {
                this.props.deleteBook(kitap)
              }}>
              Sil
            </div>
          
          </div>
        </div>
      </div>
    )
  }
}


export default connect(null, { selectBook, deleteBook })(KitapItem)