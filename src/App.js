import React, { Component } from 'react';
import { Header, MovieList, MovieDetails } from './components';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [{
        title: 'Ocean\'s Eleven',
        img: 'https://fr.web.img6.acsta.net/medias/nmedia/00/02/33/84/aff11.jpg',
        details: 'Comédie / Braquage',
        description: 'Après deux ans passés dans la prison du New Jersey, Danny Ocean retrouve la liberté et s\'apprête à monter un coup qui semble impossible à réaliser : cambrioler dans le même temps les casinos Bellagio, Mirage et MGM Grand, avec une jolie somme de 150 millions de dollars à la clé. Il souhaite également récupérer Tess, sa bien-aimée que lui a volée Terry Benedict, le propriétaire de ces trois somptueux établissements de jeux de Las Vegas.'
      }, {
        title: 'Mon beau-père et moi',
        img: 'https://www.ecranlarge.com/uploads/image/001/121/erwunzxn4p8fqz3wnlma7gfxywy-408.jpg',
        details: 'Comédie / Romance',
        description: 'Greg Focker, un modeste infirmier de Chicago, vit depuis deux mois avec la charmante Pam Byrnes et rêve d\'officialiser leur union. Ravie de sa proposition, la jeune femme insiste pour un strict respect des règles bourgeoises : Greg devra obtenir l\'accord de son père, Jack.'
      }, {
        title: 'L\'as des as',
        img: 'https://fr.web.img5.acsta.net/medias/nmedia/18/62/88/10/18866819.jpg',
        details: 'Comédie / Aventure',
        description: 'Jo Cavalier, entraîneur national, doit accompagner l\'équipe de boxe aux J.O. de Berlin. Durant le voyage il prend en charge un enfant de dix ans poursuivi par la Gestapo.'
      }, {
        title: 'Intouchables',
        img: 'https://fr.web.img6.acsta.net/medias/nmedia/18/82/69/17/19806656.jpg',
        details: 'Comédie / Drame',
        description: 'A la suite d’un accident de parapente, Philippe, riche aristocrate, engage comme aide à domicile Driss, un jeune de banlieue tout juste sorti de prison. Bref la personne la moins adaptée pour le job.'
      }],
      selectedMovie: 0
    }
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header/>
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList movies={ this.state.movies } updateSelectedMovie={ this.updateSelectedMovie } />
          <MovieDetails movie={ this.state.movies[this.state.selectedMovie] }/>
        </div>
      </div>
    );
  }
}

export default App;
