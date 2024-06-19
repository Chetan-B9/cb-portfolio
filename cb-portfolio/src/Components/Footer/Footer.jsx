
function Footer() {
  return (
    // Footer portion 
    <section className="px-8 md:px-20 lg:px-40 my-5">
      {/* <div> */}
       
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center  md:items-center md:justify-start">
            <div className="flex gap-2">
            <img src="/cb logo.png" alt="logo" width={20}/>
            <h2 className="font-dm-sans text-lg tracking-widest font-extrabold">Portfolio</h2>
            </div>
            <p className="mx-5 text-msm text-secondary-text">&copy; 2024. All Rights Reserved.</p>
        </div>
      {/* </div> */}
    </section>
  )
}

export default Footer