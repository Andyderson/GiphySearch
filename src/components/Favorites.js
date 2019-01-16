import React from "react";
import Gallery from "react-grid-gallery";
import PropTypes from "prop-types";

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
    let html;

    if (this.props.favorites.length === 0) {
      html = <h2 className="giphytext">No GIFs Favorited Yet!</h2>;
    } else {
      html = (
        <div>
          <h2 className="giphytext">Favorites</h2>
          <Gallery
            images={this.props.favorites}
            onSelectImage={i => this.deleteFavorites(i)}
          />
        </div>
      );
    }

    return <div>{html}</div>;
  }
}

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  favLength: PropTypes.number.isRequired,
  updateFavorites: PropTypes.func.isRequired
};

export default Favorites;
