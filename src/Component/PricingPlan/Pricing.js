import React from 'react'
import "../PricingPlan/Pricing.css";
import mdi_tick_circle from "../../Assets/mdi_tick-circle.png"
import img_up from "../../Assets/price_upshape.png"
import img_down from "../../Assets/price_downshape.png"
import standard from "../../Assets/standard_plan.png"
import basic from "../../Assets/basic.png"
import premium from "../../Assets/premium.png"

function Pricing() {
  return (
    <div>
    
      <div className='row back'>
      <div>
      <h1 className='princing_head'>Get Simple, Transparent Pricing Packages With No Hidden Fees</h1>
      <p className='pricing_subhead'>Our services come in three different pricing packages, each suited to your budget and needs.
      </p>
      </div>
      <div>.</div>
      <div>.</div>
   <div className='main_check'>
   
  <div className='basic_plan'>
  <img className='img_stand' src={basic} alt='basic'/>
  <h1 className='priceplan'>$1120 <span className='pricemonth'>/Month</span></h1>
  <div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">1x Marketing Expert* (8hrs/day) </div>

</div>
<div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">Client Success Manager </div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Campaigns KPI Tracking</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Auditing of marketing campaigns</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Unlimited users</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Setting up marketing work 
environment*</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">List Management (Data pulling, 
    skip tracing & stacking)</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">CRM Management (Configuring 
    and leads update)</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Tool and Data health management 
(daily)</div>

</div>






<a href='https://square.link/u/XoCkd47M' target="_blank"> <button className='pricing_btn'>Choose Plan</button></a>
  </div>
  <div className='arrowupimg'>
<img src={img_down} alt='imgdown'/>
  </div>
  <div className='basic_plan'>
  <img className='img_stand' src={standard} alt='standard'/>
  <h1 className='priceplan'>$2000 <span className='pricemonth'>/Month</span></h1>
  <div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">2x Marketing Expert* (8hrs/day) </div>

</div>
<div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">Client Success Manager </div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Campaigns KPI Tracking</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Auditing of marketing campaigns</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Unlimited users</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Setting up marketing work 
environment*</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">List Management (Data pulling, 
    skip tracing & stacking)</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">CRM Management (Configuring 
    and leads update)</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Tool and Data health management 
(daily)</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Lead Follow-up Manager</div>

</div>





<a href='https://square.link/u/TAkNvNcw' target="_blank"> <button className='pricing_btn1'>Choose Plan</button></a>
  </div>
  <div className='arrowupimg'>
  <img src={img_up} alt='img_up'/>
    </div>
    <div className='basic_plan'>
    <img className='img_stand' src={premium} alt='premium'/>
    <h1 className='priceplan'>$2400 <span className='pricemonth'>/Month</span></h1>
    <div class="d-flex flex-row">
    <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
    <div class="pl-2 pt-2 text_style_desp">3x Marketing Expert* (6hrs/day) </div>
  
  </div>
  <div class="d-flex flex-row">
    <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
    <div class="pl-2 pt-2 text_style_desp">Client Success Manager </div>
  
  </div>
  <div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">Campaigns KPI Tracking</div>
  
  </div>
  <div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">Auditing of marketing campaigns</div>
  
  </div>
  <div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">Setting up marketing work 
  environment*</div>
  
  </div>
   
  <div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">Unlimited users</div>
  
  </div>

  <div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">List Management (Data pulling, 
      skip tracing & stacking)</div>
  
  </div>
  <div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">CRM Management (Configuring 
      and leads update)</div>
  
  </div>
  <div class="d-flex flex-row">
  <img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
  <div class="pl-2 pt-2 text_style_desp">Tool and Data health management 
  (daily)</div>
  
  </div>
  <div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Lead Follow-up Manager</div>

</div>
<div class="d-flex flex-row">
<img class="p-2 image_style_tickmark" src={mdi_tick_circle} alt='tick' />
<div class="pl-2 pt-2 text_style_desp">Disposition of property campaigns*</div>

</div>
  
  
  
  
  
<a href='https://square.link/u/3jQYfdn8' target="_blank"> <button className='pricing_btn2'>Choose Plan</button></a>
    </div>
  </div>
      </div>
    </div>
  )
}

export default Pricing
