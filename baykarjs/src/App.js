import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card} from "antd";

function App() {
    const [data, setData] = useState(null); //
    const [timer, setTimer] = useState(30);
    const [disableBtn, setDisableBtn] = useState(true);
    const [question, setQuestion] = useState(1);
    const [answer, setAnswer] = useState('');
    const [answers, setAnswers] = useState([]);

    useEffect(() => { // Sayaç için bir interval tanımlıyorum.
        const time = setInterval(() => {
            setTimer((prevCount) => {
                if (prevCount === 21) { // 20. saniyede butonlarımı tıklanabilir hale getiriyorum.
                    setDisableBtn(false)
                }
                if (prevCount <= 0) { // Süre biterse
                    setQuestion(prevCount => prevCount + 1) // Soruyu atla
                    setTimer(30); // Süreyi tekrardan 30 yap
                    setAnswers(prevAnswers => [
                        ...prevAnswers,
                        ' '
                    ]); // Cevaplarıma boş string ekle
                }
                return prevCount - 1;
            });
        }, 1000);

        return () => clearInterval(time);
    }, []);

    useEffect(() => {
        if (question <= 10) { // 10 soru alana kadar
            Promise.all([fetchData()]); // Soruları çek
            setTimer(30) // Her soru çekildiğinde süreyi sıfırla
            setDisableBtn(true)
        }
    }, [question]);

    const checkAnswer = (e) => {
        const selectedAnswer = e?.currentTarget?.innerText?.split(' ')[1]; // Seçilen cevabı al
        setQuestion(prevCount => prevCount + 1); // Soruyu atla
        setAnswer(selectedAnswer);
        setAnswers(prevAnswers => [
            ...prevAnswers,
            selectedAnswer
        ]); // Cevaplar tablosu için son cevabımı diziye ekle
    }

    const fetchData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${question}`) // Soruları çekme işlemi
            .then(response => {
                setData(response?.data);
            })
    };

    return (
        <>
            <div className="flex flex-col gap-2 justify-center items-center h-screen">
                {question <= 10 ? // 10 soru alana kadar bu kısım çalışacak
                    <>
                        <h1 className="text-5xl">{timer}</h1>
                        <div className="flex items-center flex-col gap-4">
                            {question}. Soru
                            <Card className="text-center select-none w-[50%]">
                                {data?.body}
                            </Card>
                            <div className="grid grid-cols-2 w-1/2 gap-2">
                                <Button disabled={disableBtn} onClick={(e) => checkAnswer(e)}
                                        className="w-full h-[50px] cursor-pointer select-none">
                                    A)&nbsp; <span>{data?.body?.split(' ')[0]}</span>
                                </Button>
                                <Button disabled={disableBtn} onClick={(e) => checkAnswer(e)}
                                        className="w-full h-[50px] cursor-pointer select-none">
                                    B)&nbsp; <span>{data?.body?.split(' ')[1]}</span>
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 w-1/2 gap-2">
                                <Button disabled={disableBtn} onClick={(e) => checkAnswer(e)}
                                        className="w-full h-[50px] cursor-pointer select-none">
                                    C)&nbsp; <span>{data?.body?.split(' ')[2]}</span>
                                </Button>
                                <Button disabled={disableBtn} onClick={(e) => checkAnswer(e)}
                                        className="w-full h-[50px] cursor-pointer select-none">
                                    D)&nbsp; <span>{data?.body?.split(' ')[3]}</span>
                                </Button>
                            </div>
                        </div>
                    </>
                    : // Sorular bittiyse tablo kısmını göster
                    <Card>
                        {answers?.map((item, index) => (
                            <span key={index}>
                               {index + 1}) {item} <br/>
                            </span>
                        ))}
                    </Card>
                }
            </div>
        </>
    );
}

export default App;
