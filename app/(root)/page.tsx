import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';


const page = () => {

    const loggedIn = { firstName: "Jannick", lastName: "Pedersen", email: "jantest@live.dk" };

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox type='greeting' title='Welcome' user={loggedIn?.firstName || 'Guest'} subtext='Access and manage your account and transactions efficiently' />

                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.69} />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 69}, {currentBalance: 666}]} />
        </section>  
    );

};


export default page;
