import React from 'react'

const VideoCart = ({title, channelTitle, image, link, sort}) => {

    const handleClick = () => {
        window.open(`https://www.youtube.com/watch?v=${link}`, '_blank');
    }

    return (
        <div className={sort ? "video_card video_card" : "line_card video_card"} onClick={handleClick}>
            <div className="video_card__image">
                {!image.url ?
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="245" height="138" viewBox="0 0 245 138" fill="none">
                            <path 
                                fill-rule="evenodd" 
                                clip-rule="evenodd" 
                                d="M-0.245361 0.435652L81.4213 46.4357L96.4984 54.928C96.6551 54.6335 96.8166 54.3418 96.9828 54.0532L81.9121 45.5644L0.245406 -0.435638L-0.245361 0.435652ZM148.769 53.6298C148.94 53.9157 149.106 54.2047 149.268 54.4966L163.579 46.4357L245.245 0.435652L244.755 -0.435638L163.088 45.5644L148.769 53.6298ZM149.268 83.5034C149.106 83.7953 148.94 84.0843 148.769 84.3702L163.088 92.4357L244.755 138.436L245.245 137.564L163.579 91.5644L149.268 83.5034ZM96.9828 83.9468C96.8166 83.6582 96.6551 83.3665 96.4984 83.072L81.4213 91.5644L-0.245361 137.564L0.245406 138.436L81.9121 92.4357L96.9828 83.9468Z" fill="#1390E5" fill-opacity="0.2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                <circle cx="20" cy="20" r="20" fill="#C4C4C4"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M10.5 26.5C10.5 27.6046 11.3954 28.5 12.5 28.5H14.5V11.5H12.5C11.3954 11.5 10.5 12.3954 10.5 13.5V26.5Z" fill="#1390E5" fill-opacity="0.2"/>
                                <path d="M29.5 13.5C29.5 12.3954 28.6046 11.5 27.5 11.5H25.5V28.5H27.5C28.6046 28.5 29.5 27.6046 29.5 26.5V13.5Z" fill="#1390E5" fill-opacity="0.2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 12C11.6716 12 11 12.6716 11 13.5V15H14V12H12.5ZM15 12V19.5H25V12H15ZM26 12V15H29V13.5C29 12.6716 28.3284 12 27.5 12H26ZM29 16H26V19.5H29V16ZM29 20.5H26V24H29V20.5ZM29 25H26V28H27.5C28.3284 28 29 27.3284 29 26.5V25ZM25 28V20.5H15V28H25ZM14 28V25H11V26.5C11 27.3284 11.6716 28 12.5 28H14ZM11 24H14V20.5H11V24ZM11 19.5H14V16H11V19.5ZM10 13.5C10 12.1193 11.1193 11 12.5 11H27.5C28.8807 11 30 12.1193 30 13.5V26.5C30 27.8807 28.8807 29 27.5 29H12.5C11.1193 29 10 27.8807 10 26.5V13.5Z" fill="#1390E5"/>
                            </g>
                        </svg>
                    </>
                    : <img src={image.url} alt="" />
                }
            </div>
            <div className="video_card__description">
                <span className="bold text-16">
                    {title}
                </span>
                <span className="text-14 gray_color">
                    {channelTitle}
                </span>
            </div>
        </div>
    )
}

export default VideoCart;
