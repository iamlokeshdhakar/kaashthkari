import Image from 'next/image'
import '../styles/persons.css'
const Persons = () => {
  return (
    <div className="persons">
      <div className='p-arrow'>
        <Image src={'/arrow.png'} width={80} height={50}/>
      </div>
      <div className='p-img'>
        <Image src={'/person.png'} width={900} height={250}/>
        <Image src={'/person.png'} width={900} height={250}/>
      </div>
      <div className='p-text'>
        <h1>KNOW THE CONNOISSEURS</h1>
      </div>
    </div>
  )
}

export default Persons