import Image from 'next/image'
import '../styles/gov.css'
const GovScheme = () => {
  return (
    <div className='gov'>
      <h1>GOVERNMENT SCHEMES</h1>
      <div className='ab'>

      <div className="g-img">
        <Image src={'/gov.png'} fill={'cover'} style={{width: '100%'}}/>
      </div>
      <div className="g-cnt">Over the years, the Government has employed various schemes to help the Artisans of Uttar Pradesh grow and showcase their art to the public. One such scheme is ODOP, (One District One Product), which promotes specific goods from each district in Uttar Pradesh. It seeks to encourage local craftsmen and businesses in traditional crafts and industries by offering financial help, marketing assistance, and infrastructural development. The artisans can register for and avail these schemes at the District Industries Center.</div>
      </div>
    </div>
  )
}

export default GovScheme