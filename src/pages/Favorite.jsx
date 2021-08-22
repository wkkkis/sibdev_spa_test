import React from "react";
import { connect } from "react-redux";
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/authCheck';
import { getVideoThunk } from "../redux/reducers/videos";
import { getFavoritesThunk, editFavoriteThunk, removeFavoriteThunk } from "../redux/reducers/favorites";
import { Spin, Result} from 'antd';
import { RequestLine } from "../components";
import { useHistory } from "react-router-dom";

const Favorite = ({
  getFavoritesThunk, favorites,
   user_id, editFavoriteThunk, 
   removeFavoriteThunk, getVideoThunk,
  }) => {

  let history = useHistory()

  React.useEffect(() => {
    getFavoritesThunk(user_id)
  }, [])

  const editRequest = (slider, value, id) => {
    editFavoriteThunk({
      id: id, 
      user_id: user_id,
      videos_number: slider,
      sort_variant: value.sort,
      request: value.request,
      title: value.title
    })
  }

  const removeRequest = (id) => {
    removeFavoriteThunk(id, user_id)
  }

  const doRequest = (item) => {
    getVideoThunk(item.request, item.video_number, item.sort_variant)
    history.push('/')
  }

  if(!favorites.length){
    return <div className="loading">
      <Spin tip="Загрузка..." />
    </div>
  }else if(favorites === "request_no"){
    return <Result title="У тебя нету запросов"/>
  }

  return (
    <div className="page">
      <div className="page__title">
        Избранное
      </div>
      <div className="page__data">
      {
        favorites.map(item => (
          <RequestLine 
            item={item} 
            editRequest={editRequest} 
            request_required={true}
            removeRequest={removeRequest}
            doRequest={doRequest}
          />
        ))
      }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user_id: state.user.id,
  favorites: state.favorites.requests
})

export default compose(
  connect(mapStateToProps, {
    getFavoritesThunk, editFavoriteThunk,
    removeFavoriteThunk, getVideoThunk
  }),
  withAuthRedirect
)(Favorite)
