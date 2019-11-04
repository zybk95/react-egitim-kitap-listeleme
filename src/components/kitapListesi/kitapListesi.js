import React, { Component } from 'react';
import { connect } from 'react-redux';
import KitapItem from './kitapItem';
//---------------------------------------
// import aksiyon from '../../actions'
// import { addBook } from '../../actions';
// Sadece addBook metodunu kulanmak isteseydik böyle yapacaktık amma valakin ki biz tüm
//actionları kullanmak istiyoruz o yüzden yukarudaki gibi kullandık şimdi aksiyon. yazıp hepsini kullana biliriz...
//---------------------------------------

//--------CSS---------------
import './kitapListesi.scss';

class KitapListesi extends Component {
  componentDidMount(state) {
    // this.props.addBook({
    //   title: 'Cin Ali',
    //   isbn: 3333333333,
    //   pageCount: 400,
    //   shortDescription: "Cin ali hikayeleri....",
    // });
  }

  render() {
    const { kitapListesi } = this.props;
    return (
      <div className="kitap-listesi ui cards">
        {
          // <ul>
          //   {kitapListesi.map(k => (
          //     <li key={k.isbn}>
          //       {k.title}
          //     </li>
          //   ))}
          // </ul>
          kitapListesi.map(k => (
            <KitapItem key={k.isbn} kitap={k} />
          ))
        }
      </div>
    )
  }
}

/** 
 * reducers global bir state oluşturuyor öyle düşünebiliriz...
 * oradan o değerleri nasıl alacağız şimdi ona bakalım...
*************************************************/
const mapStateToPropsX = (state) => {
  // console.log("\n----Map state to props-----")
  // console.log(state);
  return {
    kitapListesi: state.kitapListesi
  }
}

//connect() ile redux'un react compent ile (ki burada bu kitaplistesi oluyor) konuşmasını sağlayabliyormuşuz...
// export default connect(mapStateToPropsX, { addBook })(KitapListesi);
export default connect(mapStateToPropsX)(KitapListesi);
