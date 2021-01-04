import react, {useState, useEffect} from 'react';
import './style.css';
import randomWords from 'random-words';
import CorrectionHandler from '../../actions/correctionHandler';
import {useDispatch} from 'react-redux';
function Input(store) {
  const [word, setWord] = useState(randomWords());
  const dispatch = useDispatch();
  const handleKeyDown = (event) => {
    console.log(event.key);

    const inputField = document.getElementById('input');

    let arrayedW0rd = word.split('');
    console.log(arrayedW0rd);

    let inputWord = inputField.value.split('');
    let inputLength = inputWord.length;
    console.log(inputWord);

    if (event.key === arrayedW0rd[inputLength]) {
      console.log('CORRECT');
      inputField.style.color = 'green';
      dispatch({type: 'CORRECTION_STATUS_HANDLER', payload: '#008000'});
    } else {
      console.log('nope');
      inputField.style.color = 'red';
      dispatch({type: 'CORRECTION_STATUS_HANDLER', payload: '#800000'});
    }

    if (event.key === 'Enter') {
      console.log('do validate');
      setWord(randomWords());
      console.log(inputField.value);
      inputField.value = '';
    }
  };

  useEffect(() => {
    console.log('component mounted');
  });

  return (
    <div className={'wordContainer'}>
      <span className={'wordToWrite'}>{word}</span>
      <input id={'input'} className={'inputField'} onKeyDown={handleKeyDown}></input>
    </div>
  );
}
export default Input;
