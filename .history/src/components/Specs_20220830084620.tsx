
import { BiBluetooth } from "react-icons/bi";
import { BsBatteryCharging } from "react-icons/bs";
import { RiPlugFill } from "react-icons/ri";
import { BsMic } from "react-icons/bs";

const Specs = () => {
  return (
    <section className=" section grid" >
            
             <h2 className="section_title section_title-gradient">Specs</h2>
            <div className="relative box grid">
                <div className="gap-y-[1.5rem] grid">
                    <div className="grid row-span-1 ">
                        <BiBluetooth className="specs_icon" />
                        <h3 className="specs_title">Connection</h3>
                        <span className="specs_subtitle" >Bluetooth v5.2</span>
                    </div>
                    <div className="specs_data">
                       <BsBatteryCharging  className="specs_icon" />
                        <h3 className="specs_title">Battery</h3>
                        <span className="specs_subtitle" >Duration 40h</span>
                    </div>
                    <div className="specs_data">
                       <RiPlugFill  className="specs_icon" />
                        <h3 className="specs_title">Load</h3>
                        <span className="specs_subtitle" >Fast charge 4.2-AAC</span>
                    </div>
                    <div className="specs_data">
                       <BsMic  className="specs_icon" />
                        <h3 className="specs_title">Microphone</h3>
                        <span className="specs_subtitle" >Supports Apple Siri <br/> and Google</span>
                    </div>
                   
                </div>
                
              <div>
                 <img 
                 src="assets/images/specs.png" 
                 alt="" 
                 className="specs_img" />
              </div>
            </div>
          </section>
  )
}

export default Specs
