import React from "react";
import CardList from "../components/CardList";
import Nav from "../components/Nav";
import AddButton from "../components/AddButton";

class Home extends React.Component {
  state = {
      data: [
        {
          id: 1,
          title: "Monster",
          description: "drink",
         
          imgIcono:
            "https://www.monsterenergy.com/media/uploads_image/2020/12/02/auto/400/2cd0b187eb3ea28f5250d12fdb4f0988.png?mod=v1_fdbccdc73cd0c96253e6a1a754324fa3",
        },
        {
          id: 2,
          title: "Red Bull",
          description: "drink",
          
          imgIcono:
            "https://cdn.iconscout.com/icon/free/png-512/redbull-282301.png",
        },
        {
          id: 3,
          title: "Brahma",
          description: "drink",
        
          imgIcono:
            "https://image.winudf.com/v2/image/Yml6LmFwcDRtb2JpbGUuYXBwX2U4YzNmZGMxNTRmMDQyNTE4M2JlZmZkODQ3MTkwZmM2LmFwcF9pY29uX29jZWpsa3My/icon.png?w=170&fakeurl=1",
        },
        {
          id: 4,
          title: "Quilmes",
          description: "drink",
        
          imgIcono:
        "https://d26lpennugtm8s.cloudfront.net/stores/001/128/742/products/681518-mla31599733161_072019-f-f1d01c8456d675b73015881880471387-640-0.jpg"
        }],
    };
  

  render() {
    return (
      <div>
        <Nav username="gabriel" />
        <CardList exercice={this.state.data} />
        <AddButton />
      </div>
    );
  }
}

export default Home;
