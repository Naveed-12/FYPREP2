function Areas({ img1, title1, img2, title2, img3, title3, location }) {
    return (
        <div className='areas'>
            <h1 className='lahore'>{location}</h1>
            <div className='small_img_container'>

                <div className='small_img_container1'><img src={img1} className='small_img' /><h2>{title1}</h2></div>
                <div className='small_img_container1'><img src={img2} className='small_img' /><h2>{title2}</h2></div>
                <div className='small_img_container1'><img src={img3} className='small_img' /><h2>{title3}</h2></div>


            </div>
        </div>
    )
}

export default Areas