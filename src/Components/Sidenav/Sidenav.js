import './Sidenav.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




import React from 'react'

const Sidenav = () => {
  return (
    <>
        <div className='bgnav'>
            <h2 className='logoname'>CRE<br/>DIX</h2>
            <hr/>

            <p className='invest'><i>N</i> Invest/Withdraw</p>
            
            <div className='divdesign'>
            <button className='btndeals'><i>N</i> Deals</button>
        </div>
        </div>

        <div class="button">
            <i class="fas fa-sync-alt"></i> Active
        </div>
         <div class="button2">
            <i class="fas fa-sync-alt"></i> Ej5zj..E2ldl
        </div>

        <div>
        <p class="back-link"><i class="fas fa-sync"></i> Go back to all deals</p>

        <div class="header">
      <h2 class="title">Fintech - Deal1</h2>
      <button class="funding-btn">Open for funding</button>
      <button class="activate-btn">Activate deal</button>
        </div>
        <hr className='hr'/>
    </div>

    <div class="button-row">
            <button id='btn' class="buttonA">
            <div class="icon"><i class="fas fa-circle"></i> Principal</div>
            <div class="text">1M USDC</div>
             </button>
        <button id='btn' class="buttonB">
            <div class="icon">Interest</div>
            <div class="text">131.4k USDC</div>
        </button>
        <button id='btn' class="buttonC">
            <div class="icon">Financing fee</div>
            <div class="text">16%</div>
        </button>
    </div>
        <p className='repayment'>Repayment schedule</p>

        <button className='btnlast'>
            <p className='p1text'>Type of repayment structure</p>
            <div className='ptextgroup'>
                <p>Amortization loan</p>
                <p><u>show deatails</u><i class="fa-solid fa-caret-down"></i></p>
            </div>
        </button>
    </>
  )
}

export default Sidenav