import React from 'react';

export default function SearchBar(props) {
  const [term, setTerm] = React.useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.onSubmit(term);
  }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}