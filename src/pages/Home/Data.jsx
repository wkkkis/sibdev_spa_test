import React from 'react';
import { Input, Space } from 'antd';

import { AddFavoriteModal, VideoCard } from '../../components';
import { Link } from "react-router-dom";

const Data = ({
  onSearch, videos_request,
  request_info, videos, handleSubmit,
  notification_request
}) => {

    const [inputValue, setInputValue] = React.useState(videos_request)
    const [sortVariant, setsortVariant] = React.useState(true)
    const [modal, setModal] = React.useState(false)

    const gridSort = () => {
      setsortVariant(true)
    }

    React.useEffect(() => {
      setInputValue(videos_request)
    }, [videos_request])

    const lineSort = () => {
      setsortVariant(false)
    }

    const modalPopup = () => {
      setModal(!modal)
    }

    const changeInputValue = (e) => {
      setInputValue(e.target.value)
    }

    const suffix = (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={modalPopup} width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z" stroke="#1390E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
       
      </>
    );
    
    return (
        <div className="page">
          <div className="page__title">
            <span>Поиск видео</span>
            <Space direction="vertical">
              <Input.Search
                placeholder="Что хотите посмотреть?"
                enterButton="Найти"
                value={inputValue}
                suffix={videos.length && suffix}
                size="large"
                onSearch={onSearch}
                onChange={changeInputValue}
              />
            </Space>
            <AddFavoriteModal
              request_value={inputValue} 
              handleSubmit={handleSubmit} 
              state={modal} 
              modalPopup={modalPopup} 
            />
            {notification_request &&
              <div className="notification text-16">
                <div className="row">
                  <b></b> 
                </div>
                <span>Поиск сохранён в разделе «Избранное»</span>
                <Link to="/favorites">Перейти в избранное</Link>
              </div>
            }
          </div>
            <div className="page__data">
              <div className="page__data__sort_wrap mb_20 text-16">
                <span>
                  Видео по запросу 
                  <b> «{videos_request}» </b> 
                  <b className="normal gray_color"> {request_info.totalResults}</b>
                </span>
                <div>
                  <svg onClick={lineSort} className={sortVariant && "disabled"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 6H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 12H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 18H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 6H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 12H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 18H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg onClick={gridSort} className={!sortVariant && "disabled"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 5H5V10H10V5Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 5H14V10H19V5Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 14H14V19H19V14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 14H5V19H10V14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className={sortVariant ? "grid_sort" : "line_sort"}>
                {
                  videos.map(item  => (
                    <div>
                      <VideoCard 
                        title={item.snippet.title} 
                        channelTitle={item.snippet.channelTitle} 
                        image={item.snippet.thumbnails.medium}
                        link={item.id.videoId}
                        sort={sortVariant}
                      />
                    </div>
                  ))
                }
              </div>
            </div> 
        </div>
      )  
}

export default Data;
