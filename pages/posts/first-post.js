import Link from 'next/link';



export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>

      <h2>Welcome to my journey

      <p>
  This is the beginning of a journey through my thoughts, experiences, and the lessons learned along the way. 
  Here, you’ll find a collection of ideas, stories, and insights that I’ve gathered. 
  So grab a cup of coffee and join me as we explore the myriad paths of life’s adventures together.
    </p>
    <a href = "https://www.pinterest.jp/HeeChanPark2/">Link to my Pinterest account...</a>
     <br /> 
     <br />
        <Link href="/">Back to home</Link>
     
      </h2>

    </>
  );
}