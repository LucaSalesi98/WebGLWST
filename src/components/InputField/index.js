import {useState, useEffect, useRef} from 'react';
import './style.css';
import randomWords from 'random-words';
import {useDispatch} from 'react-redux';

function Input(store) {
  const [word, setWord] = useState(randomWords());
  const dispatch = useDispatch();
  const inputField = useRef(null);
  const handleKeyDown = (event) => {
    let input = inputField.current;
    let arrayedW0rd = word.split('');
    let inputWord = input.value.split('');
    let inputLength = input.value.length - 1;

    if (event.key === ' ') {
      setWord(randomWords());
      input.value = '';
    }

    console.log('input length:' + inputLength);
    console.log(inputWord[inputLength]);
    console.log(arrayedW0rd[inputLength]);

    if (inputWord[inputLength] === arrayedW0rd[inputLength] && event.key !== ' ') {
      input.style.color = 'green';
      dispatch({type: 'CORRECTION_STATUS_HANDLER', payload: '#008000'});
      dispatch({type: 'INCREMENT_CORRECT_KEYS'});
    } else if (event.key !== arrayedW0rd[inputLength] && event.key !== ' ') {
      input.style.color = 'red';
      dispatch({type: 'CORRECTION_STATUS_HANDLER', payload: '#800000'});
      dispatch({type: 'INCREMENT_WRONG_KEYS'});
    }
  };

  useEffect(() => {});

  return (
    <div className={'wordContainer'}>
      <span className={'wordToWrite'}>{word}</span>
      <input ref={inputField} id={'input'} className={'inputField'} onKeyUp={handleKeyDown}></input>
    </div>
  );
}
export default Input;
