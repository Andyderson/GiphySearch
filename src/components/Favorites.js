import React from "react";
import Gallery from "react-grid-gallery";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteFavorites = i => {
    let gifs = this.props.favorites;
    let image = gifs[i];
    let favorites = [...JSON.parse(localStorage.getItem("favorites"))];

    if (image.hasOwnProperty("isSelected")) {
      image.isSelected = !image.isSelected;
    } else {
      image.isSelected = true;
    }

    if (image.isSelected === true) {
      if (favorites.find(gif => gif.id === image.id)) {
        return;
      }
      favorites.push(image);
    } else {
      favorites = favorites.filter(gif => gif.id !== image.id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    this.props.updateFavorites(favorites);
  };

  render() {
    return (
      <Gallery
        title="favorites"
        images={this.props.favorites}
        onSelectImage={i => this.deleteFavorites(i)}
      />
    );
  }
}

export default Favorites;
