import React from 'react'

///import///images///
import saadiShirazi from '../../images/poets/1665506993070 (1).jpg' ;
import hafez from '../../images/poets/1665507596716.jpg';
import ferdosi from '../../images/poets/1665507596678.jpg';
import molana from '../../images/poets/1665507596709.jpg';
import saibTabrizi from '../../images/poets/1665507596704.jpg';
import omar from '../../images/poets/poet_Khayyam_RussianPainting.jpg';
///import///images///

 const Quote = (props) => {

  const data =[
    {people: "Saadi Shirazi" , book: 'Gulistan (Chapter 4, 1258)', quote: "A wise man will not utter every word which occurs to him." , image: saadiShirazi},
    {people: "Saadi Shirazi" , book: 'Gulistan (Chapter 4, 1258)', quote: "Whatever is procured in haste goes easily to waste.", image: saadiShirazi },
    {people: "Saib Tabrizi" , book: 'The Divan of Saib', quote: "Seek for the truth from the heart which is empty of thought.", image: saibTabrizi },
    {people: "Saib Tabrizi" , book: 'The Divan of Saib', quote: "The touchstone of false friends is the day of need: by way of proof, ask a loan from your friends.", image: saibTabrizi },
    {people: "Hafez Shirazi" , book: 'The Divan of Hafez', quote: "Stay close to anything that makes you glad you are alive.", image: hafez },
    {people: "Hafez Shirazi" , book: 'The Divan of Hafez', quote: "You yourself are your own obstacle, rise above yourself.", image: hafez },
    {people: "Ferdowsi" , book: '', quote: "But all this world is like a tale we hear - Men's evil, and their glory, disappear.", image: ferdosi },
    {people: "Ferdowsi" , book: '', quote: "Our lives pass from us like the wind, and why Should wise men grieve to know that they must die? The Judas blossom fades, the lovely face Of light is dimmed, and darkness takes its place.", image: ferdosi },
    {people: "rumi" , book: '(Molana)', quote: "The Inspiration You Seek Is Already Within You. Be Silent And Listen.", image: molana },
    {people: "rumi" , book: '(Molana)', quote: "Whenever you are alone, remind yourself that God has sent everyone else away so that there is only you and Him.", image: molana },
    {people: "rumi" , book: '(Molana)', quote: "Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation.", image: molana },
    {people: "Omar Khayyam" , book: 'Rubaiyat', quote: "Be happy for this moment. This moment is your life.", image: omar },
    {people: "Omar Khayyam" , book: 'Rubaiyat', quote: "Don't cry upon you losse Don't mesure today with tommorows Don't trust to passed and coming day Believe in now - and be happy today.", image: omar },
    {people: "Omar Khayyam" , book: 'Rubaiyat', quote: "To wisely live your life, you don't need to know much Just rememeber two main rules for the beginning: You better starve, than eat whatever And better be alone, than with whoever", image: omar },
    {people: "Omar Khayyam" , book: 'Rubaiyat', quote: "My friend, let's not think of tomorrow, but let's enjoy this fleeting moment of life.", image: omar },
 
  ]

  const randomHandler= ()=>{
    const res = (Math.floor(Math.random() *  16  )) + 1;
    return res
  }

  console.log(randomHandler())

  let number = randomHandler()
  return (
    <div className='flex flex-col items-center justify-center w-width100p gap-2 p-2 flex-1 h-1/2  '>
      <img src={data[number].image} alt='iranian poet' className='w-40 h-40 rounded-lg m-auto' />
      <h2 className='text-lg font-bold'>{data[number].people}</h2>
      <h3>{data[number].book}</h3>
      <p className='overflow-auto'>{data[number].quote}</p>
    </div>
  )
}


export default Quote;