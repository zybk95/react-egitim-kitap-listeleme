
import React, { Component } from 'react'

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
            <div className="ui basic green button">Seç</div>
            <div className="ui basic red button">Sil</div>
          </div>
        </div>
      </div>
    )
  }
}

export default KitapItem