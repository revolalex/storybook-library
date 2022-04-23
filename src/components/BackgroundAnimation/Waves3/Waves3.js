import './Waves3.css'

const Waves3 = () => {
    return (
        <div class="waveWrapper waveAnimation">
            <div class="waveWrapperInner bgTop">
                <div class="wave-wave3 waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
            </div>
            <div class="waveWrapperInner bgMiddle">
                <div class="wave-wave3 waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
            </div>
            <div class="waveWrapperInner bgBottom">
                <div class="wave-wave3 waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
            </div>
        </div>

    )
}

export default Waves3