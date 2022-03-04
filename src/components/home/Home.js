import React, { useRef, useState, useEffect } from 'react';
import './Home.css';
import { ExternalLink } from 'react-external-link';

const getCloud = () => `A computer is a digital electronic machine that can be programmed to carry out sequences of arithmetic or logical operations automatically and we are building super computers in the world`.split(' ');
// const getCloud = ()=> `welcome to react apk`.split(' ').sort(()=>Math.random()>0.5?1:-1);

function Word(props) {
    const { text, active, correct } = props;

    // const rerender = useRef(0);
    // useEffect(() => {
    //     rerender.current += 1
    // })

    if (correct === true) {
        return <span className='correct'>
            {text} </span>
    }
    if (correct === false) {
        return <span className='incorrect'>
            {text} </span>
    }
    if (active) {
        return <span className='active'>
            {text} </span>
    }
    return <span >{text} </span>
}

//to stop rerender of each words
Word = React.memo(Word);

function Timer(props) {
    const { correctWords, startCounting } = props;
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        let id;
        if (startCounting) {
            id = setInterval(() => {
                setTimeElapsed(oldTime => oldTime + 1);
            }, 1000)
        }
        return () => {
            clearInterval(id);
        }
    }, [startCounting])

    const minute = timeElapsed / 60;

    return <div className='timeSpeed'>
        <p><h3>Time : {timeElapsed}</h3></p>
        <p><h3>Speed : {((correctWords / minute) || 0).toFixed(2)} WPM</h3></p>
    </div>
}


const Home = () => {
    //level 1 start
    const [userInput, setUserInput] = useState('');
    const cloud = useRef(getCloud());
    const [activeWordIndex, setActiveWordIndex] = useState(0);
    const [correctWordArray, setCorrectWordArray] = useState([]);
    const [startCounting, setStartCounting] = useState(false);

    function processInput(value) {
        if (activeWordIndex === cloud.current.length) {
            //stop
            return
        }

        if (!startCounting) {
            setStartCounting(true);
        }


        if (value.endsWith(' ')) {

            if (activeWordIndex === cloud.current.length - 1) {
                //overflow
                setStartCounting(false)
                setUserInput('Completed Game!!!')
                return
            } else {
                setUserInput('');

            }

            //user has finished this word
            setActiveWordIndex(index => index + 1);

            //correct word
            setCorrectWordArray(data => {
                const word = value.trim();
                const newResult = [...data]
                newResult[activeWordIndex] = word === cloud.current[activeWordIndex];
                return newResult;
            })

        } else {
            setUserInput(value);
        }
    }
    //level 1 end



    return (
        <>
            <div className='intro1 container my-3'>
                <h5>Instructions</h5>
                <div>1. Type all the sentence in one flow (donot use "enter" button)</div>
                <div>2. After typing each word enter spacebar only (donot use "enter" button)</div>
                <div>3. After typing last word enter spacebar only (donot use "enter" button)</div>
                <div>4. Green color shows correct word</div>
                <div>4. Red color shows incorrect word</div>
                <div>4. Purple color shows word to type in the input text box</div>
            </div>
            <div className='container my-3'>
                <div className='level1'>
                    <h3>Level 1 - Easy</h3>
                    <Timer
                        startCounting={startCounting}
                        correctWords={correctWordArray.filter(Boolean).length}
                    />
                    <div>{cloud.current.map((word, index) => {
                        return <Word
                            text={word}
                            active={index === activeWordIndex}
                            correct={correctWordArray[index]}
                        />
                    })}</div>

                    <input
                        type="text"
                        value={userInput}
                        placeholder ='Enter the word'
                        onChange={(e) => { processInput(e.target.value) }}
                    />
                    <div>Player input is : {userInput}</div>
                </div>
                <div className='container my-3 intro'>
                    <h3>Game+Web Developer - Krishnakant Pawar</h3>
                    <div>
                        Linkedin -<ExternalLink href="https://www.linkedin.com/in/krishnakant-pawar/" />
                    </div>
                    <img src={require("../../images/3.jpg")} alt="123" style={{ width: 150, height: 250 }} />
                    <h5>I am a Full Stack Developer & like to make Web Applications for Development of people around the world.</h5>
                    <h1 className='container my-5 mx-5'>Thank You Very Much!!!</h1>
                </div>


            </div>
          
        </>
    )
}

export default Home