export default function Features() {
  return (
    <section className="bg-gradient-to-t from-costumegray to-costumperpel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-3xl text-white font-mono uppercase mb-4">Digital transformation for the commodities industry</h2>
            <p className="text-xl text-gray-400 font-mono uppercase">Navigate market volatility and operational complexity with our award-winning products, designed to support your organization’s needs. We offer a suite of comprehensive commodities trading, risk management, and advanced decision support solutions to empower businesses of all sizes across all industries, commodities, and regions. ION is a long-term partner on your digital transformation journey.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
             
              <h4 className="h4 text-xl text-white mb-2">Agriculture and CPG</h4>
              <p className="text-lg text-gray-400 text-center">Improve decision-making and deliver profit long after the crop is harvested.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
          
              <h4 className="h4 text-xl text-white mb-2">Coal mining and production</h4>
              <p className="text-lg text-gray-400 text-center">Manage coal quality and inventory from pit to delivery.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            
              <h4 className="h4 text-xl text-white mb-2">Crude oil, refined products</h4>
              <p className="text-lg text-gray-400 text-center">Minimize the impacts of market disruptions and risk on your business.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
             
              <h4 className="h4 text-xl text-white mb-2">Environmental credits</h4>
              <p className="text-lg text-gray-400 text-center">Manage renewable credits and certificates from generation to retirement.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
        
              <h4 className="h4 text-xl text-white mb-2">Manufacturing and procurement</h4>
              <p className="text-lg text-gray-400 text-center">Get real-time, actionable insights into your raw material spend.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
           
              <h4 className="h4 text-xl text-white mb-2">Merchant trading</h4>
              <p className="text-lg text-gray-400 text-center">Gain business insights to optimize trading strategies.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
