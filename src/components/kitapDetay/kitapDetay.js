import React, { Component } from 'react'
import { connect } from 'react-redux'

import './kitapDetay.scss'


class kitapDetay extends Component {
  renderContent() {

    const { kitapSecimX } = this.props;
    console.log(kitapSecimX)
    if (kitapSecimX.isbn) { //eğer secilenKitap.isbn undifened değilse bunu === yap yani secilen bir kitap varsa 
      return (
        <div>
          {kitapSecimX.title}
        </div>
      );
    } else {
      return (
        <div>
          <p>
            Seçili kitap yok...
        </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="kitap-detay-container">
        {this.renderContent()}
      </div>
    )
  }
}

const mapStatePropsX = (state) => {
//bu metot react-redux'a ait connect metodunu kullanarak react ile redux'u buluşturur.
//reducers dizininin altındaki index.js dosyasında gerçekleşen olayda  kitapSecimK state atılıyordu zaten 
//yani seçilen kitap global state atılıyor gibi düşüne biliriz...
//onuda burada yakalatıp kitapSecimX'e atıyoruz ve yukarıda afiyetle kullanabiliyoruz...
  return {
    kitapSecimX: state.kitapSecimK
  }

}

export default connect(mapStatePropsX)(kitapDetay)