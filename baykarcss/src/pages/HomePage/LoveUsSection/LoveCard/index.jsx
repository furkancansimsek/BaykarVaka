import React from 'react';

const LoveCard = ({
    logo,
    comment,
    user
                  }) => {
    return (
        <>
            <div className="flex flex-col items-start w-[319px] h-[296px] md:w-[384px] md:h-[430px] bg-white rounded-[20px] p-6 md:p-8 text-textPrimary">
                <img className="my-4" src={logo} alt="LOVERLOGO"/>
                <p className="md:text-2xl my-2 md:my-4 leading-[140%] md:leading-[160%]">{comment}</p>
                <div className="flex items-center gap-4 mt-4">
                    <img src={user?.profile} alt="USERPROFILE"/>
                    <div className="flex flex-col item">
                        <h6 className="text-[18px]">{user?.name}</h6>
                        <span className="text-[#475569]">{user?.position}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoveCard;