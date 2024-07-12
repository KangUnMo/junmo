import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const WeddingTVApp = () => {
    const [manName, setManName] = useState('');
    const [womanName, setWomanName] = useState('');
    const [isWinner, setIsWinner] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);

    const navigate = useNavigate(); // useNavigate 훅 사용


    useEffect(() => {
        if (isWinner) {
            setShowCelebration(true);
            const timer = setTimeout(() => {
                setShowCelebration(false);
                alert('축하합니다! 당첨되셨습니다.');
                navigate('/CongratsPage'); // useNavigate 훅으로 페이지 이동
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isWinner, navigate]);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLottery();
        }
    };
    const handleLottery = () => {
        const checkMName = '강준모'
        const checkWName = '신지혜'

        const exceptMName = '강운모'
        const exceptWName = '조경진'

        //예외처리
        if(!manName || !womanName){
            alert('이름을 모두 입력 바랍니다.')
            return
        }


        if (checkMName === manName && checkWName === womanName) {
            setIsWinner(true);
        } else  if (exceptMName === manName && exceptWName === womanName) {
            alert('우리도 뭐 당첨??? 우리도 뭐사??ㅋㅋㅋㅋㅋㅋ')
        } else {
            alert('아쉽게도 당첨되지 않았습니다. 다시 시도해보세요!');
        }
    };

    return (
        <div>
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-purple-800 mb-6">
                    2024.07.13 이벤트
                </h1>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="신랑 이름"
                        value={manName}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setManName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        placeholder="신부 이름"
                        value={womanName}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setWomanName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button
                        onClick={handleLottery}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    >
                        추첨하기
                    </button>
                </div>
            </div>
            {showCelebration && (
                <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-6xl animate-bounce">🎉</div>
                </div>
            )}
            <style jsx>{`
                @keyframes confetti {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
                }
                .confetti {
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background-color: #f0f;
                    animation: confetti 5s ease-in-out infinite;
                }
            `}</style>
            {showCelebration && (
                <>
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="confetti"
                            style={{
                                left: `${Math.random() * 100}vw`,
                                top: `-5vh`,
                                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default WeddingTVApp;