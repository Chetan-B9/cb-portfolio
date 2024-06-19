import { Link } from "react-router-dom"
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp  } from "react-icons/fa";

function Social() {
  return (
    <section className="proposal_section px-8 py-14 md:px-20 lg:px-40 flex flex-col items-center gap-10">
      <div className="text-center w-full md:w-[70%] lg:w-1/2">
        <h3 className="font-dm-sans text-2xl font-bold">Interested in <span className="text-main">collaborating</span> with me?</h3>
        <p className="text-sm text-secondary-text my-3">I am always open to discussing web-based projects and partnership opportunities.</p>
      </div>

      <div className="flex gap-10 text-xl ">
        <Link to="https://www.linkedin.com/in/chetan-bedakihale-17885423b" className="hover:text-main hover:drop-shadow-glow" target="_blank"><FaLinkedinIn /></Link>
        <Link to="https://github.com/Chetan-B9" className="hover:text-main hover:drop-shadow-glow" target="_blank"><FaGithub  /></Link>
        <Link to="https://www.instagram.com/c_h_e_t_a_n_b220?utm_source=qr&igsh=eXMwa2RuMTVvdnow" className="hover:text-main hover:drop-shadow-glow" target="_blank"><FaInstagram  /></Link>
        <Link to="https://api.whatsapp.com/send?phone=919902831780" className="hover:text-main hover:drop-shadow-glow" target="_blank"><FaWhatsapp /></Link>
      </div>
    </section>
  )
}

export default Social