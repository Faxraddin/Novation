import Image from 'next/image'

export default function Footer() {
    return(
        <>
        <section className="footer">
            <div className="footer-container">
    
                <div className='ft'>
                    <h2>Novation</h2>
                    <Image src={'/assets/lgss.png'} width={90} height={40}/>
                </div>
                <div className='ft'>
                    <h2>Haqqımızda</h2>
                    <span>Startaplar</span>
                    <span>Mentorlar</span>
                    <span>Investorlar</span>
                </div>
                <div className='ft'>
                    <h2>Şirkət</h2>
                    <span>Tereflesper</span>
                    <span>Fealiyet</span>
                    <span>Blog</span>

                </div>
                <div className='ft'>
                    <h2>Əlaqə</h2>
                    <span>+546845676</span>
                </div>

            </div>
        </section>

        <Image style={{position:'absolute'}} src={'/assets/fooo.png'} width={1440} height={100}/>
        </>
    )
}