import React from 'react';
import './pokemon-page.styles.scss';

class PokemonPage extends React.Component {
  capitalizeWord = word => {
    const newWord = word.split('')[0].toUpperCase() + word.slice(1);
    return newWord;
  };
  render() {
    const { currentPokemon } = this.props;
    const { id, name, status, captureDate } = currentPokemon;
    return (
      <div style={{ position: 'relative' }}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(../../assets/images/pokemons-images/${id}.png)`
          }}
        />
        <div className='pokemon-info'>
          <h1 className='pokemon-title'>{this.capitalizeWord(name)}</h1>
          <img
            className='pokemon-image'
            src={`../../assets/images/pokemons-images/${id}.png`}
            alt='pokemon'
          />
          <span>
            ID: <span className='pokemon-info_focus'>{id}</span>
          </span>
          <span>
            Status: <span className='pokemon-info_focus'>{status}</span>
          </span>
          {captureDate !== 'none' ? (
            <span>
              Capture Date:{' '}
              <span className='pokemon-info_focus'>{captureDate}</span>
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default PokemonPage;
